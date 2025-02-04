
import CardSymbol from "../CardSymbol/CardSymbol";
import "./Card.css";

type CardProps = {
    naipe: "hearts" | "diamonds" | "clubs" | "spades",
    number: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 ,
}
const Card = ({ naipe, number }: CardProps) => {

    const numberToString = (number:number):string => {

        switch(number) {
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

    return (
        <div className="card">
            <div className="card-left">
                <span className="card-number">{number}</span>
                <CardSymbol naipe={naipe} />
            </div>
            <div className="card-middle">
                <div className="card-middle-content">
                    <div className={`card-middle-content-left-${numberToString(number)}`}>
                        <CardSymbol naipe={naipe}  />
                        <CardSymbol naipe={naipe}  />
                        <CardSymbol naipe={naipe}  />
                        <CardSymbol naipe={naipe}  />
                    </div>
                    <div className={`card-middle-content-center-${numberToString(number)}`}>
                        <CardSymbol naipe={naipe}/>
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
                <span className="card-number">{number}</span>
                <CardSymbol naipe={naipe} />
            </div>

        </div>
    )
}

export default Card;