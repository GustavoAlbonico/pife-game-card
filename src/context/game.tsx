import { createContext, Dispatch, ReactNode, useEffect, useReducer } from "react";
import { IGame } from "../types/game";
import { deck } from "../data/deck";

type GameAction = { type: "START" } | { type: "DRAW" } | { type: "DISCART" } | { type: "RESULT" };

type GameContextProps = {
    state: IGame;
    dispatch: Dispatch<GameAction>;
}

type GameProviderProps = {
    children: ReactNode;
}

const startGame: IGame = {
    player: {
        id: 1,
        name: "Robertinho",
        cards: []
    },
    players: [
        {
            id: 1,
            name: "Robertinho",
            cards: []
        },
        {
            id: 2,
            name: "Carlos",
            cards: []
        }
    ],
    deck: deck,
    turn: 0
}

const gameReducer = (state: IGame, action: GameAction): IGame => {

    switch (action.type) {
        case "START":
            return state;
        case "DRAW":
            return state;
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
    dispatch: () => {}
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

