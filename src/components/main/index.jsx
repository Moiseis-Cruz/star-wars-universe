import { useState, useEffect } from "react";

import { Person } from "../Person";

import { getDatos } from "../../service";

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
            {characters.listCharacters.length > 0 ? <Person people={characters.listCharacters} /> : <h2>❗❗Nenhum personagem encontrado❗❗</h2>}
        </section>
    )
}