import "./CardSymbol.css";

type CardSymbolProps = {
    suit: "hearts" | "diamonds" | "clubs" | "spades",
}

const CardSymbol = ({
    suit,
}: CardSymbolProps) => {

    return (
        <div className={`card-symbol ${suit}`}>
        </div>
    )
}

export default CardSymbol