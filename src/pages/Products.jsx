import React from 'react'
import { Footer } from '../components/Footer'

export const Products = () => {
  return (
    <div>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">

            <div className="carousel-inner">

                <div className="carousel-item active" data-bs-interval="10000">
                    <img src="images/cuidados.webp" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Bienestar</h2>
                        <ul>
                            <li>Cosmética Facial</li>
                            <li>Cosmética Corporal</li>
                            <li>Aceites Ecenciales</li>
                            <li>Productos Capilares</li>
                            <li>Accesorios de ducha</li>
                            <li>Sales de baño</li>
                            <li>Accesorios Cosméticos</li>
                            <li>Aparatología Cosmética</li>
                            <li>Ampollas Capilares</li>
                            <li>Mascaras Descongestivas</li>
                        </ul>
                    </div>
                </div>

                <div className="carousel-item" data-bs-interval="2000">
                    <img src="images/ropa.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Accesorios e indumentaria</h2>
                    <ul>
                            <li>Billeteras</li>
                            <li>Carteras</li>
                            <li>Mochilas</li>
                            <li>Bijouterie</li>
                            <li>Accesorios para peinados</li>
                            <li>Cintos</li>
                            <li>Ropa deportiva</li>
                            <li>Indumentaria Casual</li>
                            <li>Lenceria</li>
                            <li>Accesorios Deportivos</li>
                        </ul>
                    </div>
                </div>  

                <div className="carousel-item">
                    <img src="images/cosmeticos2.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Aromas de la Vida</h2>
                        <ul>
                            <li>Aromaterapia</li>
                            <li>Velas</li>
                            <li>Sahumerios</li>
                            <li>Sales Aromáticas</li>
                            <li>Aceites</li>
                            <li>Perfumes</li>
                            <li>Aromas Textiles</li>
                            <li>Difusores</li>
                            <li>Humidificadores</li>
                            <li>Aromas en aerosol</li>
                        </ul>
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
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

            <Footer/>
        
        </div>
    </div>
  )
}
