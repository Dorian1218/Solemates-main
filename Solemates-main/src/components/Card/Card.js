import './Cards.css'
function Card(props) {
    return (
        <div class="card">
            <h1>{props.shoeName}</h1>
            <h2>Lowest Ask</h2>
            <h1>{props.price}</h1>
        </div>
    )
}

export default Card