import React from 'react'
import Logo from "../images/profile2.jpg";
import styled from "styled-components"
import { useLoginContext } from '../Api/LoginContextApi';
import { useNavigate } from 'react-router-dom';

const Navbar = styled.nav`
    background-color : ${props => props.theme.colors.third};
`
const LinkColor = {
    color : "#7E506C",
}

export default function Nav(props) {
    const navigate = useNavigate()
    const {loggedIn,setLoggedIn} = useLoginContext();
    const logout = () =>{
        setLoggedIn(false);
        navigate("/")
    }

  return (
      <Navbar>
          <nav className="navbar navbar-expand-md ">
              <div className="container">
                  <a className="navbar-brand fw-bolder" style={LinkColor} href="#">
                      <img src={Logo} alt="Bootstrap" width="30" height="30" className="d-inline-block align-text-top rounded shadow-lg me-2 mb-1"/>
                      Navbar
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end " id="nav">
                      <div>
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                              <li className="nav-item">
                                  <><a className="nav-link fw-bolder" style={LinkColor} href="#">Download</a></>
                              </li>
                              <li className="nav-item">
                                <><a className="nav-link fw-bolder" style={LinkColor}  onClick={logout}> {loggedIn ? "LOGOUT" : "LOGIN"} </a></>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </nav>
      </Navbar>
  )
}



