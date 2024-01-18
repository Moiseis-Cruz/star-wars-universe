import { useState, useEffect } from "react";

import { getDatos } from "../../service";

export const Main = () => {

    const [ characters, setCharacters ] = useState({
        listCharacters : []
    });

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDatos();

            console.log(data.results);

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