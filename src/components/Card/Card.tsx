
import CardSymbol from "../CardSymbol/CardSymbol";
import "./Card.css";

type CardProps = {
    naipe: "hearts" | "diamonds" | "clubs" | "spades",
    number: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13,
}
const Card = ({ naipe, number }: CardProps) => {

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

    const findColor = (naipe: string): string => {
        switch (naipe) {
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
        <div className="card">
            <div className="card-left">
                <span
                    className="card-number"
                    style={{
                        color: findColor(naipe)
                    }}
                >
                    {numberToRepresentationCardNumber(number)}
                </span>
                <CardSymbol naipe={naipe} />
            </div>
            <div className="card-middle">
                <div className="card-middle-content">
                    <div className={`card-middle-content-left-${numberToString(number)}`}>
                        <CardSymbol naipe={naipe} />
                        <CardSymbol naipe={naipe} />
                        <CardSymbol naipe={naipe} />
                        <CardSymbol naipe={naipe} />
                    </div>
                    <div className={`card-middle-content-center-${numberToString(number)}`}>
                        <CardSymbol naipe={naipe} />
                        <CardSymbol naipe={naipe} />
                        <CardSymbol naipe={naipe} />
                        <CardSymbol naipe={naipe} />
                    </div>
                    <div className={`card-middle-content-right-${numberToString(number)}`}>
                        <CardSymbol naipe={naipe} />
                        <CardSymbol naipe={naipe} />
                        <CardSymbol naipe={naipe} />
                        <CardSymbol naipe={naipe} />
                    </div>
                </div>
            </div>
            <div className="card-right">
                <span
                    className="card-number"
                    style={{
                        color: findColor(naipe)
                    }}
                >
                    {numberToRepresentationCardNumber(number)}
                </span>
                <CardSymbol naipe={naipe} />
            </div>

        </div>
    )
}

export default Card;