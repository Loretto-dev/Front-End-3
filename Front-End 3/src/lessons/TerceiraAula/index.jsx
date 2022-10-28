import './style.scss'
import batataGif from './../../assets/images/batata.gif'

export function TerceiraAula(){


    const components = [
        { name:'Component Card', description:`Test`, image:'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif'},
        { name:'Component Card 1', description:`Test1`, image:''},
        { name:'Component Card 2', description:`Test2`, image:''},
        { name:'Component Card 3', description:`Test3`, image:''}
    ]

    return(
        <main>
            <img src={ batataGif }/>
            <h1>Lista de componentes encontrados em um sistema</h1>
            <ul>
                {
                    components.map(component =>(
                        <li>
                            <img src={ component.image }/>
                            <h1>{ component.name }</h1>
                            <p>{ component.description }</p>
                        </li>
                    ))
                }

            </ul>

        </main>
    )

}