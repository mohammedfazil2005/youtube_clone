import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <Link to={'/'} className="navbar-brand"><img id='logo' src="https://www.koahspearguns.com/uploads/1/8/0/5/18055309/published/youtube-logo.jpg?1724159757" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        {/* <input className="" type="search" placeholder="  Search" aria-label="Search" />
                        <button id='searchbutton' type="submit"><i class="fa-solid fa-magnifying-glass"></i></button> */}
                        </ul>
                        <form  role="search">
                            <button  type="submit">+ Create</button>
                            <i className="fa-regular fa-bell"></i>
                            <img src="https://www.svgrepo.com/show/496485/profile-circle.svg" alt="profile" />
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
