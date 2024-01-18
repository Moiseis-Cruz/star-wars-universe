import { useState, useEffect } from "react";

import { getDatos } from "../../service";

getDatos()

export const Main = () => {

    const [ characters, setCharacters ] = useState({
        listCharacters : []
    });

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDatos();

            setCharacters({
                listCharacters: data.results
            });
        };

        fetchData();
    },[]);

    return(
        <section>
            <h1>Teste</h1>
        </section>
    )
}