import React from 'react'
import { Footer } from '../components/Footer'

export const Services = () => {
  return (

    <section className='cmp-accordion container'>

        <div className="accordion" id="accordionPanelsStayOpenExample">

            <div className="accordion-item">
                <h2 className="accordion-header">    
                    <button 
                        className="accordion-button" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#panelsStayOpen-collapseOne" 
                        aria-expanded="true" 
                        aria-controls="panelsStayOpen-collapseOne">
                        Servicios para el cuidado Personal
                    </button>
                </h2>                    
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div class="accordion-body">
                        <strong>-Nuestros profesionales se preparan cada día para brindarte los mejores resultados en tus rutinas de cuidado personal.</strong> Tenemos una amplia variead de protocolos para Rutinas de cuidado facial - antiAge - Rosacea - Blamqueamiento - Aparatologia - Celulitis - Flaccidez - Cuidado de Manos y Pies - Depilación - Todos los servicios en Uñas - Pestañas pelo x pelo - Laminado de Cejas - Lifting de pestañas - Masajes Relajantes - Aromaterapia - Maquillaje Consulta por otros servicios.
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button 
                        className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#panelsStayOpen-collapseTwo" 
                        aria-expanded="false" 
                        aria-controls="panelsStayOpen-collapseTwo">
                        Servicios de Peluquería
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <strong>-Contamos con profesionales de basta experiencia en el cuidado del pelo, ansiosos por brindarte la mejor atención.</strong> Peinados - Cortes - Color - Reflejos - Iluminación - Alisados todos los tipos JAPONES / BRASILERO / MAX / FUERTE / NEOFIBRINA - Shock de KERTINA - Botox - Botox matizador - Hidratacion - Nutrición - Lifting Capilar - Reparación de Fibras capilares - Encerado Capilar - KERATINA Molecular - KERATINA Hidrolizada - Colorimetria especial - Peinados - Si el servicio que buscas no aparece en estas opciones, no dudes en consultarnos .
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button 
                        className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#panelsStayOpen-collapseThree" 
                        aria-expanded="false" 
                        aria-controls="panelsStayOpen-collapseThree">
                        Servicios de asesoramiento para profesionales
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <strong>-Tenemos insumos y recursos de calidad que en conjunto a nuestros profesionales altamente capacitados te brindan la mejor atención y asesoramiento a la hora de elegir Cómo y Con qué productos vas a trabajar.</strong> Nuestra experiencia en el rubro nos permite brindarte el mejor asesoramiento sobre que productos utilizar en tus servicios, cómo utilizarlos y tambien como lograr el mejor rendimiento, conseguiendo los mejores resultados con tus clientes, todo esto se debe a que trabajamos con los mejores productos del mercado y tambien a que nunca dejamos de prepararnos y actualizarnos para poder acompañarte en tu creciemiento.
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </section>
  )
}
