import React from 'react'


export default function Navbar(props){
    return (
        <nav className="navbar navbar-expand-lg " style={{backgroundColor:"rgb(86, 28, 36)"}}>
            <div className="container-fluid">
                <a className="navbar-brand"  style={{color:"white",fontWeight:"700"}} href="/">Connect</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" style={{color:"white"}} aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  style={{color:"white"}} href="/">About</a>
                        </li>


                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 "  type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success "  style={{color:"white", borderColor:"white"}} type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}


