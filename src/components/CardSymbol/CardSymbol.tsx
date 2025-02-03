import "./CardSymbol.css";

type CardSymbolProps = {
    naipe: "hearts" | "diamonds" | "clubs" | "spades",
    hide?: boolean,
    flip?: boolean
}

const CardSymbol = ({
    naipe,
    hide,
    flip,
}: CardSymbolProps) => {

    return (
        <div
         className={`card-symbol ${naipe}`}
         style={{
            rotate : (`${flip ? 180 : 0}deg`),
            display: (hide ? "none" : "block")
         }}
         >
        </div>
    )
}

export default CardSymbol