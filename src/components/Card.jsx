
const Card = ({item}) => {
    return (
        <div className="mx-5">
                <div className="card bg-base-100 w-64 h-auto shadow-xl m-4"> {/* Ajusta el ancho y el padding */}
                    <figure className="mb-2"> {/* Espaciado inferior */}
                        <img
                            src={item.strMealThumb}
                            alt={item.strMeal} // Cambia el alt para que sea más descriptivo
                            className="h-32 w-full object-cover" // Ajusta la altura de la imagen
                        />
                    </figure>
                    <div className="card-body p-2"> {/* Reduce el padding del cuerpo */}
                        <h2 className="card-title text-sm">{item.strMeal}</h2> {/* Reduce el tamaño del texto */}
                        <p className="text-xs">If a dog chews shoes whose shoes does he choose?</p> {/* Reduce el tamaño del texto */}
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary btn-sm">Buy Now</button> {/* Botón más pequeño */}
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default Card
