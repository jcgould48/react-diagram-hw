import React from 'react';

const MainContent = (props) =>{
  return (
    <div 
    style={{
   
    height:'100px',
    width:'100px',
    marginLeft:'115px',
    }}>
  <div className="container">
  <img className= "image" src= {props.image} alt="..."/>
  <div className="centered text">{props.text}</div>
  </div>
</div>
    
    )
}

export default MainContent