import React from "react";
import PropTypes from "prop-types";


function Header() {
var headerStyles = {
  display: 'flex',
  flexDirection: 'space-between',
  width: '100%',
  borderBottom: '2px solid lightgrey'
}

var headerLeft = {
  display: 'flex',
  flexDirection: 'row',
  // justifyContent: 'space-between',
  width: '50%',
  margin: '0',

}
var headerRight = {
  float: 'right',
  width: '50%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
}

var inputSearch = {
  borderRadius: '12px',
  marginRight: '40px',
  border: 'none',
  border: '3px solid lightblue',
  height: '39px',
  width: "160px",
  textAlign: 'center'
}
var buttonSearch = {
  border: 'none',
  border: '3px solid lightblue',
  borderRadius: '12px',
  width: '90px',
  height: '39px'
}
var button = {
  padding: '12px',
  border: '1px solid lightgrey'
}






  return (
    <div style={headerStyles}>
      <div style={headerLeft}>
        <a><p style={button}>Home</p></a>
        <a><p style={button}>Notifications</p></a>
        <a><p style={button}>Messages</p></a>
      </div>
      <div style={headerRight}>
        <input placeholder="Search" style={inputSearch}></input>
        <button style={buttonSearch}>Tweet</button>
      </div>
    </div>

  )
}
export default Header;
