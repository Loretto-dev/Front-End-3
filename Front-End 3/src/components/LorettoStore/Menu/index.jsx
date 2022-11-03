export function Menu(menu) {

    return (

        <li menu={menu.id} >
            <img src={menu.menu.logo}/>
            <h1>{menu.menu.home}</h1>
            <h2>{menu.menu.store}</h2>
            <h2>{menu.menu.library}</h2>
            <h2>{menu.menu.comunity}</h2>
        </li>

    )
}