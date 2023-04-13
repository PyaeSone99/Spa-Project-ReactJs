import React, { useRef } from 'react'
import Nav from './Nav'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import { useLoginContext } from '../Api/LoginContextApi'

const cardWidth = {
    width : "30rem"
}

const colorText = {
    color : "#00C6C2"
}

export default function Login() {
    const navigate = useNavigate()
    const phoneRef = useRef();
    const passwordRef = useRef();

    const {loggedIn,setLoggedIn} = useLoginContext();

    const login = (e) =>{
        e.preventDefault()
        let user = {
            phone : phoneRef.current.value,
            password : passwordRef.current.value
        }
        setLoggedIn(true)
        e.target.reset()
        navigate("/home");
    }
    return (
        <>
            <Nav />
                <section className="card m-auto my-5 shadow-lg" style={cardWidth}>
                    
                    <div className="card-body fw-bold" style={colorText}>
                        <div className="card-title text-center fs-3 ">Login Form</div>
                        <form onSubmit={login}>
                            <div className="mb-3" >
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="phone" ref={phoneRef} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" ref={passwordRef} />
                            </div>
                            <button type="submit" className="btn btn-outline-success">Submit</button>
                        </form>
                    </div>
                </section>
            

        </>
    )
}
