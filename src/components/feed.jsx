import React from "react";
import PropTypes from "prop-types";


function Feed() {
  console.log("Is working");

  var container = {
    width: '350px',
    minHeight: '40px',
    marginLeft: '1em',
    border: '2px solid lightgrey',
    marginTop: '1em',
  }

  var top = {
    width: '100%',
    height: '70px',
    backgroundColor: 'rgb(176,214,238)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }

  var content = {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '25px',

  }

  var input = {
    height: '30px',
    width: '250px',
    border: '1px solid rgb(106, 189, 237)',
    color: 'rgb(106, 161, 108)',
    marginLeft: '15px'
  }

  var block = {
    height: '35px',
    width: '35px',
    backgroundColor: 'rgb(99,19,12)',


  }

  var text = {
    width: '100%',
    borderBottom: '2px solid lightgrey',
    minHeight: '75px',
    display: 'flex',
    flexDirection: 'row',
    fontSize: '12px',
    justifyContent: 'space-around'
  }

  var texttext = {
    marginLeft: '5px',
    width: '70%'

  }

  var profPic = {
    height: '35px',
    width: '35px',
    backgroundColor: 'rgb(99,19,12)',
    marginTop: '8px',
    marginLeft: '8px'

  }

  var subHead = {
    fontWeight: 'bold'

  }

  var Content = {


  }




return (
  <div style={container}>
    <div style={top}>
      <div style={content}>
        <div style={block}>
        </div>
        <input style={input} placeholder="What's Happening?"></input>
      </div>
      </div>
      <div style={text}>
        <div style={profPic}>
        </div>
        <div style={texttext}>
          <div style={subHead}>
            <p>Random Person</p>
          </div>
          <div style={Content}>
            <p>Lorem Lorem Lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem</p>
          </div>
        </div>
      </div>
      <div style={text}>
        <div style={profPic}>
        </div>
        <div style={texttext}>
          <div style={subHead}>
            <p>Random Person</p>
          </div>
          <div style={Content}>
            <p>Lorem Lorem Lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem</p>
          </div>
        </div>
      </div>
      <div style={text}>
        <div style={profPic}>
        </div>
        <div style={texttext}>
          <div style={subHead}>
            <p>Random Person</p>
          </div>
          <div style={Content}>
            <p>Lorem Lorem Lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem</p>
          </div>
        </div>
      </div>
      <div style={text}>
        <div style={profPic}>
        </div>
        <div style={texttext}>
          <div style={subHead}>
            <p>Random Person</p>
          </div>
          <div style={Content}>
            <p>Lorem Lorem Lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem</p>
          </div>
        </div>
      </div>
      <div style={text}>
        <div style={profPic}>
        </div>
        <div style={texttext}>
          <div style={subHead}>
            <p>Random Person</p>
          </div>
          <div style={Content}>
            <p>Lorem Lorem Lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem</p>
          </div>
        </div>
      </div>
      <div style={text}>
        <div style={profPic}>
        </div>
        <div style={texttext}>
          <div style={subHead}>
            <p>Random Person</p>
          </div>
          <div style={Content}>
            <p>Lorem Lorem Lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem</p>
          </div>
        </div>
      </div>
      <div style={text}>
        <div style={profPic}>
        </div>
        <div style={texttext}>
          <div style={subHead}>
            <p>Random Person</p>
          </div>
          <div style={Content}>
            <p>Lorem Lorem Lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem</p>
          </div>
        </div>
      </div>
      <div style={text}>
        <div style={profPic}>
        </div>
        <div style={texttext}>
          <div style={subHead}>
            <p>Random Person</p>
          </div>
          <div style={Content}>
            <p>Lorem Lorem Lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem</p>
          </div>
        </div>
      </div>
      <div style={text}>
        <div style={profPic}>
        </div>
        <div style={texttext}>
          <div style={subHead}>
            <p>Random Person</p>
          </div>
          <div style={Content}>
            <p>Lorem Lorem Lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem</p>
          </div>
        </div>
      </div>
      <div style={text}>
        <div style={profPic}>
        </div>
        <div style={texttext}>
          <div style={subHead}>
            <p>Random Person</p>
          </div>
          <div style={Content}>
            <p>Lorem Lorem Lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed;
