import "./portfolioList.css"

export default function PortfolioList({id,title, active, setSelected}) {
    return (
        <li className = {active ? "portfolio active" : "portfolioList"}
            onClick={() => setSelected(id)}
        >
            {title}            
        </li>
    )
}
