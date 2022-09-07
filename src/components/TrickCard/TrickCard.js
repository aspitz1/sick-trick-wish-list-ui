import './TrickCard.css';

const TrickCard = ({ trick }) => {
    const { stance, name, obstacle, tutorial, id } = trick;
    return (
        <article className='trick-card' id={id}>
            <ul className='trick-ul'>
                <li>{stance} {name}</li>
                <li>Obstacle: {obstacle}</li>
                <li>Link to Tutorial: <a href={tutorial}>{tutorial}</a></li>
            </ul>
        </article>
    )
}

export default TrickCard;