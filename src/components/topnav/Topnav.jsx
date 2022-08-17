import React from 'react'
import { Link } from 'react-router-dom';

import notifications from '../../assets/JsonData/notification.json';
import user_menu from '../../assets/JsonData/user_menus.json';

import Dropdown from '../dropdown/Dropdown';
import Thememenu from '../thememenu/Thememenu';

import './topnav.scss';

const curr_user = {
    display_name: 'GVD',
    image: 'https://wallpaperaccess.com/full/3225763.jpg',
}

const renderNotifications = (item,i) => (
  <div className='notification-item' key={i}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
)

const renderUserMenu = (item,i) => (
  <div className='notification-item' key={i}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
)


const renderUserToggle = (item,i) => (
    <div className='topnav__right__user' key={i}>
      <div className='topnav__right__user-avatar'>
        <img src={item.image} alt='avatar user' />
      </div>
      <div className='topnav__right__user-name'>{item.display_name}</div>
    </div>
)

const Topnav = () => {


  return (
    <div className='topnav'>
        <div className='topnav__search'>
            <input type='text' placeholder='Search here...' />
            <i className='bx bx-search'></i>
        </div>
        <div className='topnav__right'>
          <div className='topnav__right__item'>
              <Dropdown 
                customToggle = {() => renderUserToggle(curr_user)}
                contentData= {user_menu}
                renderItem = {renderUserMenu}
              />
          </div>
          <div className='topnav__right__item'>
              <Dropdown
                icon = 'bx bx-bell'
                badge = '12'
                contentData= {notifications}
                renderItem = {renderNotifications}
                renderFooter = {() => <Link to='/'>View All</Link>}
              />
          </div>
          <div className='topnav__right__item'>
                <Thememenu />
          </div>
        </div>
    </div>
  )
}

export default Topnav