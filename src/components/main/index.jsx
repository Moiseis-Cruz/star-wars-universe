import { useState, useEffect } from "react"

import { getDatos } from "../../service"

getDatos()

export const Main = () => {

    const [ characters, setCharacters ] = useState({
        ListCharacters : []
    })

    return(
        <section>
            <h1>Teste</h1>
        </section>
    )
}