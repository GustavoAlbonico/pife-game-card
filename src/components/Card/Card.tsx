
import CardSymbol from "../CardSymbol/CardSymbol";
import "./Card.css";

type CardProps = {
    naipe: "hearts" | "diamonds" | "clubs" | "spades",
}

const Card = ({ naipe }: CardProps) => {
    return (
        <div className="card">
            <div className="card-left">
                <span className="card-number">9</span>
                <CardSymbol naipe={naipe} />
            </div>
            <div className="card-middle">
                <div className="card-middle-content">
                    <div className="card-middle-content-left">
                        <CardSymbol naipe={naipe}  />
                        <CardSymbol naipe={naipe}  />
                        <CardSymbol naipe={naipe}  />
                        <CardSymbol naipe={naipe}  />
                    </div>
                    <div className="card-middle-content-center">
                        <CardSymbol naipe={naipe}/>
                        <CardSymbol naipe={naipe} />
                        <CardSymbol naipe={naipe} />
                        <CardSymbol naipe={naipe} />
                    </div>
                    <div className="card-middle-content-right">
                        <CardSymbol naipe={naipe} />
                        <CardSymbol naipe={naipe} />
                        <CardSymbol naipe={naipe} />
                        <CardSymbol naipe={naipe} hide={true} />
                    </div>
                </div>
            </div>
            <div className="card-right">
                <span className="card-number">9</span>
                <CardSymbol naipe={naipe} />
            </div>

        </div>
    )
}

export default Card;