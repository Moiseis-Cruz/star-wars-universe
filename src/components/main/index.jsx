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
            <Person people={characters.listCharacters} />
        </section>
    )
}

const Person = (props) => {
    return(
        <ul>
            {
                props.people.map((item, index) => {
                    return(
                        <li key={index}>
                            <div>
                                <h2>{item.name}</h2>
                                <p>{item.url}</p>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}