import './TrickCard.css';

const TrickCard = ({ trick, deleteTrick }) => {
    const { stance, name, obstacle, tutorial, id } = trick;
    return (
        <article className='trick-card' id={id}>
            <ul className='trick-ul'>
                <li>{stance} {name}</li>
                <li>Obstacle: {obstacle}</li>
                <li>Link to Tutorial: <a href={tutorial}>{tutorial}</a></li>
            </ul>
            <button onClick={() => deleteTrick(id)}>DELETE</button>
        </article>
    )
}

export default TrickCard;