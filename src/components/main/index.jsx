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
            <Person people={characters.listCharacters} />
        </section>
    )
}