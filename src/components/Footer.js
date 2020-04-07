import React from 'react';

function currentDate(){
  const today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; //As January is 0.
let yyyy = today.getFullYear();

if(dd<10) dd='0'+dd;
if(mm<10) mm='0'+mm;
return (mm+'/'+dd+'/'+yyyy);
  // return today.getMonth() + ":" + today.getDay() + ":" + today.getYear()
  }

const Footer = () =>{
  return  (
  <footer>
    <div style={{
      outlineStyle : 'solid', 
      outlineColor:'black', 
      outlineWidth: '1px',
      height: '100px',
      width: '100%',
      backgroundColor:'lightYellow',
      paddingTop:'55px',
      paddingLeft:'15px'

    }}>
    &copy; Gould - Date:{currentDate()}</div>
    </footer>
  )
}

export default Footer