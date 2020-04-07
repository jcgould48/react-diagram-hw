import React from 'react';
import MainContent from './MainContent'
import faker from 'faker';

const Main = () =>{
  return (
       <div class= 'column' style= {{
        outlineStyle : 'solid', 
        outlineColor:'black', 
        outlineWidth: '1px',
        height:'690px',
        width:'70%',
        backgroundColor:'pink'
        }}>
        <img 
        src="images/mainstreet.jpg" 
        style={{width:400, height:300}} 
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
        <MainContent 
            image={faker.image.avatar()} 
            text="Square 1"/>
        <MainContent 
            image={faker.image.avatar()} 
            text="Square 2"/>
        <MainContent 
            image={faker.image.avatar()} 
            text="Square 3"/>
        <MainContent 
            image={faker.image.avatar()} 
            text="Square 5"/>
      
        </div>
        </div>
  )
}

export default Main