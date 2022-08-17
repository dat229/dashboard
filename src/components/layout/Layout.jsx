import React from 'react'

import PathRoutes from '../PathRoutes'
import Sidebar from '../sidebar/Sidebar'
import Topnav from '../topnav/Topnav'

import { useSelector } from 'react-redux';

import './layout.scss'

const Layout = () => {

  const themeMode = useSelector((state) => state.theme.mode);
  const themeColor = useSelector((state) => state.theme.color);

  return (
    <div className={`layout ${themeMode} ${themeColor}`}>
        <Sidebar />
        <div className='layout__content' >
          <Topnav />
            <div className='layout__content__main'>
                <PathRoutes />    
            </div> 
        </div>
    </div>
  )
}

export default Layout