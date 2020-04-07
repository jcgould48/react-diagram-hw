import React from 'react';
import SidebarContent from './SidebarContent'

const Sidebar = () =>{
  return (
       <div className= 'column' style= {{
        outlineStyle : 'solid', 
        outlineColor:'black', 
        outlineWidth: '1px',
        textAlign:'center',
        height:'690px',
        width:'30%',
        backgroundColor:'lightBlue'
       }}>
    <SidebarContent
    sideText = "tacos"
    />
    <SidebarContent
    sideText = "lasagna"
    />
    <SidebarContent
    sideText = "sushi"
    />
    <SidebarContent
    sideText = "BBQ"
    />
    <h3>Sidebar</h3>
    </div>
    )
}

export default Sidebar