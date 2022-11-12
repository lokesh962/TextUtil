import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const redColor=()=>{
    document.body.style.backgroundColor = '#ee4545';
    props.alert("Red Colour","success")
  }
  const greenColor=()=>{
    document.body.style.backgroundColor = '#83f883';
    props.alert("Green Colour","success")
  }
  const yellowColor=()=>{
    document.body.style.backgroundColor = '#f8ff89';
    props.alert("Yellow Colour","success")
  }
  return (<>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/About">{props.about}</Link>
            </li>
          </ul>

          <button style={{height: "25px",width: "29px",backgroundColor: "red",borderRadius:"63px"}} onClick={redColor}></button>&nbsp;
          <button style={{height: "25px",width: "29px",backgroundColor: "green",borderRadius:"63px"}} onClick={greenColor}></button>&nbsp;
          <button style={{height: "25px",width: "29px",backgroundColor: "yellow",borderRadius:"63px"}} onClick={yellowColor}></button>&nbsp;
         

          <div className={`custom-control custom-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} >
            <input type="checkbox" onClick={props.mymode} className="custom-control-input " id="customSwitch1" />
            <label className="custom-control-label" htmlFor="customSwitch1"><b>Enable DarkMode &nbsp;</b></label>
          </div>

          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit" style={{ color: props.mode === 'light' ? 'black' : 'white', border: '1px solid black' }}>Search</button>
          </form>
        </div>
      </div>
    </nav>
  </>

  )
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Enter Title Here",
  about: "Enter About Here"
}
