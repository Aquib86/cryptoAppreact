import React from 'react'
import {Routes,Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';


import {Navbar,Homepage,Cryptocurrencies,News,CryptoDetails} from './components'
import './App.css' 


const App = () => { 
  return (
   <div className="app">
    <div className="navbar">
      <Navbar/>

    </div>
    <div className="main">
      <Layout>
        <div className='routes'>
           <Routes>
            <Route  path="/" element={<Homepage />} />
            {/* <Route  path="/exchanges" element={<Exchanges />} /> */}
            <Route  path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route  path="/crypto/:uuid" element={<CryptoDetails />} />
            <Route  path="/news" element={<News />} />
            
            
           
           </Routes>
        </div>
        <div className="footer" >
      <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
        Cryptopedia <br /> 
        All rights reserved 
     </Typography.Title>
     <Space>
      <Link to="/">Home</Link>
      {/* <Link to="/exchanges">Exchanges</Link> */}
      <Link to="/news">News</Link>
     </Space>
    </div>
      </Layout>
      
    </div>
    


   </div>
  )
}

export default App