import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/images/logo.png' 
import Sidebar_items from '../../assets/JsonData/sidebar_routes.json'; 

import './sidebar.scss'

const Sidebar = () => {

    const location = useLocation();
    
    const index = Sidebar_items.findIndex((item) => item.route === location.pathname);

  return (
    <div className='sidebar'>
      <div className='sidebar__logo'>
        <img src={Logo} alt="logo dashboard" />
      </div>
      <div className='sidebar__content'>
        {
          Sidebar_items.map((item,i)=>(
            <SidebarItem 
              key={i}
              item={item}
              active= {i===index ? 'active' : ''}
            />
          ))
        }
      </div>
    </div>
  )
}

const SidebarItem = (props) =>{

  const item =props.item;

    return(
      <Link to={item.route}>
        <div className={`sidebar__content__item ${props.active}`} >
          <i className={item.icon} ></i>
          <span>{item.display_name}</span>
        </div>
      </Link>
    )
}


export default Sidebar