import React from 'react'

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
        <footer className='w-100 d-flex aling-items justified-content-center flex-wrap'>
            <p className='fs-5 px-3 pt-3'>ExpertD. &copy; Todos los Derechos Reservados 2023</p>
            <div id='icons'>
                <a href="https://www.facebook.com/LimaLimon.RioGrande"><i className='bi bi-facebook'></i></a>
                <a href="https://www.instagram.com/limalimon.riogrande"><i className='bi bi-instagram'></i></a>
                <a href="https://wa.me/5492964589026"><i className='bi bi-whatsapp'></i></a>
            </div>
        </footer>
    </div>

  )
}
