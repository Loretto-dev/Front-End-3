
import './style.scss'
import youtubeImage from "./../../assets/images/youtube.jpeg"
import batataGif from './../../assets/images/batata.gif'
import { QuintaAulaItem } from '../../components/QuintaAulaItem/index'

export function QuintaAula() {

    const componentsFinded = [
        {
            title: 'Vídeo Component',
            image: youtubeImage,
            text: 'Lorem ipsum, dolor sit in stardestroyer.'
        },
        {
            title: 'Input Component',
            image: batataGif,
            text: 'Lorem ipsum, dolor sit or jedi, much better.'
        },
        {
            title: 'Vídeo Component',
            image: youtubeImage,
            text: 'Lorem ipsum, dolor sit in stardestroyer.'
        },
        {
            title: 'Vídeo Component',
            image: youtubeImage,
            text: 'Lorem ipsum, dolor sit in stardestroyer.'
        }
    ]

    return (
        <div className="quarta-aula-component">

            {/* Header */}
            <header>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/f0c190ec-fb9d-4442-89f0-08c267b5aee0/BR-pt-20221017-popsignuptwoweeks-perspective_alpha_website_small.jpg'></img>
            </header>

            <h1 className='main-title'>Componentes identificados</h1>

            <ul className='components-finded'>

                {
                    componentsFinded.map(
                        component => {
                            return (
                                <QuintaAulaItem
                                    item={component} />
                            )
                        }
                    )
                }
            </ul>
        </div>

    )

}
