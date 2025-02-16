import { createContext, Dispatch, ReactNode, useEffect, useReducer } from "react";
import { IGame } from "../types/game";
import { deck } from "../data/deck";
import { ICard } from "../types/card";
import { IPlayer } from "../types/player";

type GameAction =
    { type: "START" } |
    { type: "DISCART" } |
    { type: "RESULT" } |
    { type: "DRAW_CARD" } |
    { type: "ADD_CARD_TO_HAND" } |
    { type: "CLEAR_DRAWN_CARD" } |
    { type: "SELECT_CARD", card: ICard, isAdversaryHand: boolean} |
    { type: "CHANGE_CARDS" }
    ;

type GameContextProps = {
    state: IGame;
    dispatch: Dispatch<GameAction>;
}

type GameProviderProps = {
    children: ReactNode;
}

const startGame: IGame = {
    mainPlayer: {
        id: 1,
        name: "Robertinho",
        hand: []
    },
    adversaryPlayer: {
        id: 2,
        name: "José",
        hand: []
    },
    deck: deck,
    trash: [],
    cardsToChange: []
}

const shuffleDeck = (deck: ICard[]): ICard[] => {

    for (let loopPosition = deck.length - 1; loopPosition > 0; loopPosition--) {
        const randomPosition = Math.floor(Math.random() * (loopPosition + 1));
        [deck[loopPosition], deck[randomPosition]] = [deck[randomPosition], deck[loopPosition]];
    }

    return deck;
}

const drawHand = (deck: ICard[]): ICard[] => {
    const hand: ICard[] = deck.splice(0, 9);
    return hand;
}

const gameReducer = (state: IGame, action: GameAction): IGame => {

    switch (action.type) {
        case "START":
            const shuffledDeck: ICard[] = shuffleDeck(state.deck);

            const mainPlayer: IPlayer = {
                ...state.mainPlayer,
                hand: drawHand(shuffledDeck)
            }

            const adversaryPlayer: IPlayer = {
                ...state.adversaryPlayer,
                hand: drawHand(shuffledDeck)
            }

            return {
                ...state,
                deck: shuffledDeck,
                mainPlayer: mainPlayer,
                adversaryPlayer: adversaryPlayer

            };

        case "DRAW_CARD":
            const drawedCard: ICard | undefined = state.deck.pop();

            if (!drawedCard) return state;

            return {
                ...state,
                drawCard: {
                    card: {
                        ...drawedCard,
                        visibleSide: "front"
                    },
                    type: "main",
                },
            };

        case "ADD_CARD_TO_HAND":
            if (!state.drawCard) return state;

            return {
                ...state,
                mainPlayer: {
                    ...state.mainPlayer,
                    hand: [...state.mainPlayer.hand, state.drawCard.card],
                },
            };

        case "CLEAR_DRAWN_CARD":
            return {
                ...state,
                drawCard: undefined,
            };
        case "SELECT_CARD":
            if (action.isAdversaryHand) return state;

            if (state.cardsToChange?.some((cardToChange: ICard) => cardToChange.id === action.card.id)) {

                const cardsToChange: ICard[] = state.cardsToChange.filter(
                    (cardToChange: ICard) => cardToChange.id !== action.card.id);

                return {
                    ...state,
                    cardsToChange: cardsToChange,
                }
            }

            if (state.cardsToChange.length === 2) return state;

            return {
                ...state,
                cardsToChange: [
                    ...state.cardsToChange,
                    action.card,
                ],
            };

        case "CHANGE_CARDS":

            const updateHand = [...state.mainPlayer.hand];
            const [cardToChangeIndexA, cardToChangeIndexB]: number[] = state.cardsToChange
                .map(cardToChange => state.mainPlayer.hand.indexOf(cardToChange));

            [updateHand[cardToChangeIndexA], updateHand[cardToChangeIndexB]] =
            [updateHand[cardToChangeIndexB], updateHand[cardToChangeIndexA]];

            return {
                ...state,
                mainPlayer: {
                    ...state.mainPlayer,
                    hand: updateHand
                },
                cardsToChange: []
            };

        case "DISCART":
            return state;
        case "RESULT":
            return state;
        default:
            return state;
    }
}

export const GameContext = createContext<GameContextProps>({
    state: startGame,
    dispatch: () => { }
});

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, startGame);

    useEffect(() => {
        dispatch({ type: "START" });
    }, [])

    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    );
};

