import React from 'react'

export const Products = () => {
  return (
    <div>
        <div id="carouselExampleDark" class="carousel carousel-dark slide">

            <div class="carousel-inner">

                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="images/cuidados.webp" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
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

                <div class="carousel-item" data-bs-interval="2000">
                    <img src="images/ropa.jpg" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
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

                <div class="carousel-item">
                    <img src="images/cosmeticos2.jpg" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
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
                class="carousel-control-prev" 
                type="button" 
                data-bs-target="#carouselExampleDark" 
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button 
                class="carousel-control-next" 
                type="button" 
                data-bs-target="#carouselExampleDark" 
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

            <footer className='w-100 d-flex aling-items justified-content-center flex-wrap'>
                <p className='fs-5 px-3 pt-3'>ExpertD. &copy; Todos los Derechos Reservados 2023</p>
                <div id='icons'>
                    <a href="https://www.facebook.com/LimaLimon.RioGrande"><i className='bi bi-facebook'></i></a>
                    <a href="https://www.instagram.com/limalimon.riogrande"><i className='bi bi-instagram'></i></a>
                    <a href="https://wa.me/5492964589026"><i className='bi bi-whatsapp'></i></a>
                </div>
            </footer>
        
        </div>
    </div>
  )
}
