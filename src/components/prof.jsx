import React from "react";
import PropTypes from "prop-types";
// import pic from '../assets/img/userPic.png';



function Profile() {

var container = {
  marginTop: '1em',
  width: '250px',
  minHeight: '250px',
  zIndex: '1'


}

var topHalf = {
  backgroundColor: 'rgb(95, 149,210)',
  width: '250px',
  height: '150px',

}

var followers = {
  backgroundColor: 'transparent',
  width: '250px',
  minHeight: '20px',
  fontSize: '12px',
  color: 'lightgrey',
  display: 'flex',
  justifyContent: 'space-around'
}

var name = {
float: 'left',
marginLeft: '45%',
marginTop: '8px',



}

var picture = {
  backgroundColor: 'red',
  width: '75px',
  height: '75px',
  marginLeft: '25px',
  top: '7em',
  position: 'absolute',
  marginTop: '100px',
  backgroundColor: 'rgb(77,150,216)',
  border: '1px solid white',
  borderRadius: '8px'
}


var bottomHalf = {
  width: '244px',
  height: '80px',
  border: '3px solid lightgrey'

}



  return (

    <div style={container}>
      <div style={topHalf}>
     </div>
      <div>
        <img style={picture}></img>
      </div>
      <div style={bottomHalf}>
        <h3 style={name}>Itsa me</h3>
        <div style={followers}>
          <a>TWEETS</a>
          <a>FOLLOWING</a>
          <a>FOLOLOWERS</a>
        </div>
      </div>
    </div>


  )
}










export default Profile;
