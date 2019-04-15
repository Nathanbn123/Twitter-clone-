import React from "react";
import PropTypes from "prop-types";



function Peeps() {



  let container = {
    marginTop: '1em',
    width: '250px',
    minHeight: '1px',
    border: '1px solid lightgrey',
    marginLeft: '1em',
  }
  let text = {
    width: '100%',
    minHeight: '75px',
    display: 'flex',
    flexDirection: 'row',
    fontSize: '12px',
    // justifyContent: 'space-around'
  }
  let profPic = {
    height: '35px',
    width: '35px',
    backgroundColor: 'rgb(99,19,12)',
    marginTop: '8px',
    marginLeft: '8px'
  }
  let texttext = {
    marginLeft: '20px'
  }
  let subHead = {

  }
  let button = {
    backgroundColor: 'rgb(66,113,179)',
    width: '100px',
    height: '30px',
    color: 'white',
  }


  return (

    <div style={container}>
      <div style={text}>
        <div style={profPic}>
        </div>
        <div style={texttext}>
          <div style={subHead}>
            <p>Random Person</p>
          </div>
          <button style={button}>Button</button>
        </div>
      </div>
      <div style={text}>
        <div style={profPic}>
        </div>
        <div style={texttext}>
          <div style={subHead}>
            <p>Random Person</p>
          </div>
          <button style={button}>Button</button>
        </div>
      </div>
      <div style={text}>
        <div style={profPic}>
        </div>
        <div style={texttext}>
          <div style={subHead}>
            <p>Random Person</p>
          </div>
          <button style={button}>Button</button>
        </div>
      </div>
      <div style={text}>
        <div style={profPic}>
        </div>
        <div style={texttext}>
          <div style={subHead}>
            <p>Random Person</p>
          </div>
          <button style={button}>Button</button>
        </div>
      </div>
      <div style={text}>
        <div style={profPic}>
        </div>
        <div style={texttext}>
          <div style={subHead}>
            <p>Random Person</p>
          </div>
          <button style={button}>Button</button>
        </div>
      </div>
      <div style={text}>
        <div style={profPic}>
        </div>
        <div style={texttext}>
          <div style={subHead}>
            <p>Random Person</p>
          </div>
          <button style={button}>Button</button>
        </div>
      </div>
    </div>






  )
}


export default Peeps;
