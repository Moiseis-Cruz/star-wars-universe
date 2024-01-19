export const Person = (props) => {
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