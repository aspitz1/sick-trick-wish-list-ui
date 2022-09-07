import TrickCard from "../TrickCard/TrickCard";
import './TrickCards.css';

const TrickCards = ({ tricks }) => {
    const makeTrickCards = tricks.map(trick => {
        return <TrickCard trick={trick} key={trick.id}/>
    })

    return (
        <section className="card-container">
            {makeTrickCards}
        </section>
    )
}

export default TrickCards;