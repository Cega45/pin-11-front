import React from 'react'
import { Footer } from '../components/Footer'

export const Information = () => {
  return (
    <div className='container-fluid'>
        <div className=''>
            <h1 className='text-color-b'>Lima Limón</h1>
            <h4 className='text-color'>Tiene todo lo que buscas ...</h4>
        </div>

        <div className='aling'>
            <p>
                Somos una empresa que trabaja en la provincia desde 2016, siempre con las mismas ganas de seguir creciendo junto a vos y de acompañarte en los momentos más importantes. Te contamos que estamos trabajando para complacer todos tus deseos, y ya contamos con una amplia variedad de productos y servicios para el cuidado personal,no dudes mas y veni a conocernos!
            </p>
            <p>
                Cosmética - Aromaterapia - Peluqueria - Faciales - Corporales - Pestañas - Cejas - Masajes Relax - Depilación - Manos y Pies - Uñas - Cabina Solar - Indumentaria Femenina - Acc. de Belleza - Acc. de Moda - Marroquineria - Bijouterie - Acc. para el cuidado personal - Insumos para Profesiones de la Belleza y Peluquería - Indumentaria y Accesorios Deportivos - Dejanos saber que mas te gustaria tener...
            </p>
        </div>

        <Footer/>
        
    </div>

  )
}
