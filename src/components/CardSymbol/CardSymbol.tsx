import "./CardSymbol.css";

type CardSymbolProps = {
    naipe: "hearts" | "diamonds" | "clubs" | "spades",
}

const CardSymbol = ({
    naipe,
}: CardSymbolProps) => {

    return (
        <div className={`card-symbol ${naipe}`}>
        </div>
    )
}

export default CardSymbol