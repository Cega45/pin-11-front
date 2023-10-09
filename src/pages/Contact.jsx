import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { MessagesAlerts } from './MessagesAlerts'

export const Contact = () => {
    const [userData, setUserData] = useState({name:"", email:"", phone:"", message:""})
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [dataMissing, setDataMissing] = useState(false)

    const handleChange = function(event) {
        setSuccess(false)
        setError(false)
        setDataMissing(false)
        const property = event.target.id
        const value = event.target.value
        setUserData({...userData, [property]: value})
    }
    console.log(userData)

    const handleSubmit = function(event) {
        event.preventDefault()
        if(!(userData.name && userData.email && userData.phone && userData.message)){
            setDataMissing(true)
            return
        }

        axios({
            method: 'POST',
            data: userData,
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).then(
            response => {
                console.log(response)
                setSuccess(true)
                setUserData({name:"", email:"", phone:"", message:""})
            }

        ).catch(
            error => setError(true)
        )
    }

  return (
    <section>
        <div className="container">
            
            <form onSubmit={handleSubmit} userData={userData}>

                <h4>Envianos tu consulta, te contactaremos a la brevedad.</h4>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                    </label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Tu nombre" 
                        id="name"
                        onChange={handleChange}
                        value={userData.name}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                    </label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp"
                        placeholder="limalimon@xxxxxxmail"
                        onChange={handleChange}
                        value={userData.email}
                    />
                    <div id="emailHelp" className="form-text">
                        No compartiremos esta información con nadie.
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="phone"
                        placeholder="Tu número de teléfono"
                        onChange={handleChange}
                        value={userData.phone}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="message">
                    </label>
                    <textarea 
                        className="form-control" 
                        placeholder="Escribe aquí tu consulta" 
                        id="message"
                        onChange={handleChange}
                        value={userData.message}>
                    </textarea>
                </div>  

                <button type="submit" className="btn btn-success">
                    Enviar
                </button>

            </form>
        
            <section>
                {success && <MessagesAlerts type="success" alert="Tu consulta se envió exitosamente"/>}
                {error && <MessagesAlerts type="danger" alert="Lo siento, no pudimos enviar tu consulta, por favor intenta mas tarde"/>}
                {dataMissing && <MessagesAlerts type="warning" alert="Por favor completa todos los campos solicitados antes de enviar tu consulta"/>}
            </section>
        </div>
    </section>
  )
}


/* POST 'https://jsonplaceholder.typicode.com/posts'
      .then(response => response.json())
      .then(json => console.log(json))*/