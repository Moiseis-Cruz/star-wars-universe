async function getDatos(){
    const response = await fetch("https://swapi.dev/api/people");
    const data = await response.json();
    console.log(data);
    return data
}

getDatos()

export const Main = () => {
    return(
        <section>
            <h1>Teste</h1>
        </section>
    )
}