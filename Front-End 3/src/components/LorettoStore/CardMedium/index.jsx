export function CardMedium(props) {

    return (

        <li medium={props.medium.id} >
            <h1>{props.medium.name}</h1>
            <h2>{props.medium.categories}</h2>
            <h2>{props.medium.oldPrice}</h2>
            <h2>{props.medium.newPrice}</h2>
            <img src={props.medium.picture}/>
        </li>

    )
}