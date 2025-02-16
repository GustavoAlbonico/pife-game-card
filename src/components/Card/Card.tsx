
import { CardSuits, CardNumbers, CardVisibleSide } from "../../types/card";
import CardSymbol from "../CardSymbol/CardSymbol";
import "./Card.css";

type CardProps = {
    suit?: CardSuits,
    number?: CardNumbers,
    visibleSide: CardVisibleSide,

}
const Card = ({ suit, number, visibleSide }: CardProps) => {

    const numberToRepresentationCardNumber = (number: number): string | number => {

        switch (number) {
            case 1:
                return "A";
            case 11:
                return "J";
            case 12:
                return "Q";
            case 13:
                return "K";
            default:
                return number;
        }
    }

    const numberToString = (number: number): string => {

        switch (number) {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
            case 10:
                return "ten";
            case 11:
                return "eleven";
            case 12:
                return "twelve";
            case 13:
                return "thirteen";
            default:
                return "invalid";
        }
    }

    const findColor = (suit: string): string => {
        switch (suit) {
            case "hearts":
                return "#FF1703";
            case "diamonds":
                return "#FF1703";
            case "clubs":
                return "#000";
            case "spades":
                return "#000";
            default:
                return "#000";
        }
    }

    return (
        <div className={`card ${visibleSide === "back" ? "card-visible-back-side" : ''}`}>

            {number && suit && visibleSide === "front" &&  <>
                <div className="card-left">
                    <span
                        className="card-number"
                        style={{
                            color: findColor(suit),
                            letterSpacing: (number === 10 ? "-5px" : number === 9 ? "-2px" : "0px"),
                            textAlign: (number === 10 ? "left" : "center"),
                        }}
                    >
                        {numberToRepresentationCardNumber(number)}
                    </span>
                    <CardSymbol suit={suit} />
                </div>
                <div className="card-middle">
                    <div className={`card-middle-content ${numberToString(number)}-${suit}`}>
                        <div className={`card-middle-content-left-${numberToString(number)}`}>
                            <CardSymbol suit={suit} />
                            <CardSymbol suit={suit} />
                            <CardSymbol suit={suit} />
                            <CardSymbol suit={suit} />
                        </div>
                        <div className={`card-middle-content-center-${numberToString(number)}`}>
                            <CardSymbol suit={suit} />
                            <CardSymbol suit={suit} />
                            <CardSymbol suit={suit} />
                            <CardSymbol suit={suit} />
                        </div>
                        <div className={`card-middle-content-right-${numberToString(number)}`}>
                            <CardSymbol suit={suit} />
                            <CardSymbol suit={suit} />
                            <CardSymbol suit={suit} />
                            <CardSymbol suit={suit} />
                        </div>
                    </div>
                </div>
                <div className="card-right">
                    <span
                        className="card-number"
                        style={{
                            color: findColor(suit),
                            letterSpacing: (number === 10 ? "-5px" : number === 9 ? "-2px" : "0px"),
                            textAlign: (number === 10 ? "left" : "center"),
                        }}
                    >
                        {numberToRepresentationCardNumber(number)}
                    </span>
                    <CardSymbol suit={suit} />
                </div>
            </>}
            
        </div>
    )
}

export default Card;