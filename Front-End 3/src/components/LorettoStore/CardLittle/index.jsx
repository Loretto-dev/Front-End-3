export function CardLittle(litle) {

    return (

        <li litle={litle.litle.id} >
            <h1>{litle.litle.name}</h1>
            <h2>{litle.litle.plataforms}</h2>
            <h2>{litle.litle.categories}</h2>
            <h2>{litle.litle.price}</h2>
            <img src={litle.litle.picture}/>
        </li>

    )
}