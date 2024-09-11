import alimento from '../assets/Alimentos (15).jpg'
import alimento2 from '../assets/Alimentos (18).jpg'
import alimento3 from '../assets/Alimentos (38).jpg'
import alimento4 from '../assets/Alimentos (34).jpg'

const Carousel = () => {
    return (
        <div>
            <div className="flex justify-center pt-4">
                <div className="carousel carousel-center rounded-box w-4/5 m-2 ">
                    <div className="carousel-item w-1/4">
                        <img
                            src={alimento}
                            className="w-full" />
                    </div>
                    <div className="carousel-item w-1/4">
                        <img
                            src={alimento2}
                            className="w-full" />
                    </div>
                    <div className="carousel-item w-1/4">
                        <img
                            src={alimento3}
                            className="w-full" />
                    </div>
                    <div className="carousel-item w-1/4">
                        <img
                            src={alimento4}
                            className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
