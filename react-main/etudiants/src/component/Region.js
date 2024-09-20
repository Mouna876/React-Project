import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function Pays() {
    const [data, setData] = useState([]);
    const {reg} = useParams();

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/region/${reg}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="Pays">
            <h1>Pays</h1>
            <table>
                <thead>
                    <tr>
                        <th>Flag</th>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>
                                {item.flags?.svg && (
                                    <img src={item.flags.svg} alt={`${item.name?.common} flag`} width="30" height="20" />
                                )}
                            </td>
                            <td>{item.name?.common}</td>
                            <td>{item.capital}</td>
                            <td>{item.population}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Pays;
