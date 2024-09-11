import { useEffect, useState } from "react";
import Card from "../components/Card";
import Paginador from "../components/Paginador";


const API = 'https://www.themealdb.com/api/json/v1/1/categories.php'; // Endpoint para obtener categorías

const Comidas = () => {
    const [datos, setDatos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 28; // Número de elementos por página

    const getDatos = async () => {
        try {
            // Obtener todas las categorías de comidas
            const response = await fetch(API);
            const data = await response.json();
            //console.log(data);

            // Obtener comidas de cada categoría
            const allMeals = [];

            for (const category of data.categories) {
                const mealsResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`);
                const mealsData = await mealsResponse.json();

                if (mealsData.meals) {
                    allMeals.push(...mealsData.meals); // Agregar las comidas a la lista
                }
            }

            setDatos(allMeals); // Establecer el estado con todas las comidas
        } catch (error) {
            console.error(error);
        }
    };
    console.log(datos);

    useEffect(() => {
        getDatos();
    }, []);

    // Calcular el total de páginas
    const totalPages = Math.ceil(datos.length / itemsPerPage);

    // Filtrar los datos según la página actual
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = datos.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="container mx-auto z-100 px-4 flex flex-col items-center justify-center min-h-screen"> {/* Añadido flex, items-center, justify-center, min-h-screen */}
            <h1 className="text-center my-8 text-6xl text-white">Todos los Productos</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 w-full max-w-5xl"> {/* Añadido w-full, max-w-5xl */}
                {currentItems.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
            <Paginador
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />

        </div>
    );
}

export default Comidas;