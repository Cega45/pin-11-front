import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" to='/'>Lima Limón🍈🍋</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Information'>Información</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='Services'>Servicios</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='Products'>Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='Contact'>Contactanos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <hr/>
    </div>
  )
}

