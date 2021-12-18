import React from 'react'
import 'bootstrap'
import imgLogo from '../NavBar/Logo.png'
import Local2 from '../Home/Img/Local2.jpeg'
import Local1 from '../Home/Img/Local1.jpeg'
import Local3 from '../Home/Img/Local3.jpeg'
import Local from '../Home/Img/Local.jpeg'
import Productos5 from '../Home/Img/Productos5.jpeg'
import Productos1 from '../Home/Img/Productos1.jpeg'
import Productos3 from '../Home/Img/Productos3.jpeg'
import Productos2 from '../Home/Img/Productos2.jpeg'
import Productos4 from '../Home/Img/Productos2.jpeg'
import Terapia from '../Home/Img/Terapia.jpeg'
import Productos6 from '../Home/Img/Productos6.jpeg'
import Local0 from '../Home/Img/Local0.jpeg'
import '../../App.css'
import '../Home/Home.css'


const Home = () => {
    return (
        <main>
            <h2 className='home__Logo-Titulo'><img className='App-logo' src={imgLogo} alt="logo" />Tienda Dietetica</h2>,
                <div id="carouselExampleIndicators" class="carousel slide mb-3 carousel_top" data-bs-ride="carousel">
                    <div class="carousel-inner imgCarousel">
                        <div class="carousel-item active">
                            <img src={Local2} className='wH' alt="..."/>
                            <img src={Local1} className="wH" alt="..."/>
                            <img src={Local3} className="wH" alt="..."/>
                            <img src={Local} className="wH" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src={Productos5} className="wH" alt="..."/>
                            <img src={Productos2} className="wH" alt="..."/>
                            <img src={Productos1} className="wH" alt="..."/>
                            <img src={Productos3} className="wH" alt="..."/>    
                        </div>
                        <div class="carousel-item">
                            <img src={Productos4} className="wH" alt="..."/>
                            <img src={Productos6} className="wH" alt="..."/>
                            <img src={Terapia} className="wH" alt="..."/>
                            <img src={Local0} className="wH" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev carouselButton" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next carouselButton" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            <div>
                <p className='textHome'>La idea principal del almacen dietetico es poder brindarles a las personas del barrio y las que se vengan a atender en nuestro consultorio la posibilidad de incorporar alimentos saludables, naturales, en lo posible, libres de aditivos y conservantes, ya que una parte importante de la sanacion de nuestros cuerpos (tanto fisico-mental y emocional) pasan por los alimentos que ingerimos, las bebidas que consumimos y los hábitos que incorporamos. 
                    En Biopacha buscamos una vida mas armoniosa y saludable para nosotros mismos y todos aquellos que quieran acompañarnos en ese reto, romper con los malos habitos, la mala alimentación y las estructuras que nos imposibilitan tener un cuerpo cada vez mas libre y saludable.
                </p>
            </div>
        </main>
    )
}

export default Home