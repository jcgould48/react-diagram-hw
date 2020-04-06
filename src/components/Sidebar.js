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
       }}>
    <SidebarContent
    sideText = "text"
    />
    <SidebarContent
    sideText = "text"
    />
    <SidebarContent
    sideText = "text"
    />
    <h3>Sidebar</h3>
    </div>
    )
}

export default Sidebar