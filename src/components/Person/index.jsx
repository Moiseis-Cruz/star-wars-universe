export const Person = (props) => {
    return(
        <ul>
            {
                props.people.map((item, index) => {
                    return(
                        <li key={index}>
                            <div style={{border: '2px solid red'}}>
                                <h2>{item.name}</h2>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}