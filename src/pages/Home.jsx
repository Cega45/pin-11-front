import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">

        <div className="carousel-indicators">

            <button type="button" className="btn btn-success">
                <Link className="nav-link" to='/Information'>Más información</Link>
            </button>

            <button 
                type="button" 
                data-bs-target="#carouselExampleDark" 
                data-bs-slide-to="0" 
                className="active" 
                aria-current="true" 
                aria-label="Slide 1">
            </button>

            <button 
                type="button" 
                data-bs-target="#carouselExampleDark" 
                data-bs-slide-to="1" 
                aria-label="Slide 2">
            </button>

            <button 
                type="button" 
                data-bs-target="#carouselExampleDark" 
                data-bs-slide-to="2" 
                aria-label="Slide 3">
            </button>

        </div>

        <div className="carousel-inner">

            <div className="carousel-item active">
                <img src="images/accesorios.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption">
                    <h1>Lima Limón</h1>
                    <p>Todo lo que buscas en un solo lugar</p>
                </div>
            </div>

            <div className="carousel-item">
                <img src="images/maquillaje2.jpg" className="d-block w-100" alt="..."></img>
                <div className="carousel-caption">
                    <h1>Servicios</h1>
                    <ul>
                        <li>Peluquería</li>
                        <li>Faciales</li>
                        <li>Masajes</li>
                        <li>Corporales</li>
                        <li>Depilación</li>
                        <li>Cabina Solar</li>
                        <li>Y más....</li>
                    </ul>
                </div>
            </div>

            <div className="carousel-item">
                <img src="images/compras3.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption">
                    <h1>Productos</h1>
                    <ul>
                        <li>Cosmética</li>
                        <li>Indumentaria</li>
                        <li>Acc deportivos</li>
                        <li>Marroquineria</li>
                        <li>Perfumería</li>
                        <li>Aromas textiles</li>
                    </ul>
                    <p>
                        <strong>Vení a conocernos y descubrí todo lo que hay para vos</strong>
                    </p>
                </div>
            </div>
        </div>

        <button 
            className="carousel-control-prev" 
            type="button" 
            data-bs-target="#carouselExampleDark" 
            data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
        </button>

        <button 
            className="carousel-control-next" 
            type="button" 
            data-bs-target="#carouselExampleDark" 
            data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
        </button>

    </div>
    )
}
