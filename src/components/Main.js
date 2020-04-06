import React from 'react';
import MainContent from './MainContent'

const Main = () =>{
  return (
       <div class= 'column' style= {{
        outlineStyle : 'solid', 
        outlineColor:'black', 
        outlineWidth: '1px',
        height:'690px',
        width:'70%',
        
        }}>
        <img 
        src="images/mainstreet.jpg" 
        style={{width:500, height:350}} 
        alt="..."/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur.</p>
          <br></br>
          <h4 style={{textAlign:'center'}}>Body</h4>
          <br></br>
        <div 
        className='ui relaxed three column grid'
        style={{
          float:'center'}}
        >
        <MainContent />
        <MainContent/>
        <MainContent />
        </div>
        </div>
  )
}

export default Main