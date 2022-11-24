import{ useEffect } from "react"
export{ useEffect } from "react"

export function DecimaQuartaAulaItem(props){

    const[registerDeleted, serRegisterDeleted] = useData(false)


    useEffect(() => {

        console.log(props)

    }, [])

    useEffect(() => {

        console.log(props)

    }, [registerDeleted])

    return(
        <li>
            <h1>(props.registerData.title)</h1>
            <button>Deletar</button>
        </li>
    )

}