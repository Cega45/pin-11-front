import React from 'react'

export const Footer = () => {
  return (
    <div>
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
