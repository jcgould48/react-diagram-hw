import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Sidebar from './Sidebar'

const App = () => {
    return (
        <div>
            <Header/>
            <div className='ui grid'>
            <Sidebar/>
            <Main/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;