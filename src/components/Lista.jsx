const API = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Lista = () => {
    const [datos, setDatos] = useState([])
    const getDatos = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            console.log(data)
            setDatos(data.meals);
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, []);


    return (
        <>
            {datos && datos.slice(0, 10).map((item, index) => (
                <li key={index}><Link to={`/comidas${item.strCategory}`} href="#">{item.strCategory}</Link></li>
            ))}
        </>
    )
}

export default Lista
