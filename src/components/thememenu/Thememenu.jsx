import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

import { useDispatch } from 'react-redux';

import { allSlice } from '../../redux/slice/ThemeSlice';

import './thememenu.scss';

const mode_settings = [
    {
        id: 'light',
        name: 'Light',
        background: 'light-background',
        class: 'theme-mode-light'
    },
    {
        id: 'dark',
        name: 'Dark',
        background: 'dark-background',
        class: 'theme-mode-dark'
    }
]

const color_settings = [
    {
        id: 'blue',
        name: 'Blue',
        background: 'blue-color',
        class: 'theme-color-blue'
    },
    {
        id: 'red',
        name: 'Red',
        background: 'red-color',
        class: 'theme-color-red'
    },
    {
        id: 'cyan',
        name: 'Cyan',
        background: 'cyan-color',
        class: 'theme-color-cyan'
    },
    {
        id: 'green',
        name: 'Green',
        background: 'green-color',
        class: 'theme-color-green'
    },
    {
        id: 'orange',
        name: 'Orange',
        background: 'orange-color',
        class: 'theme-color-orange'
    },
]

const clickOutSize = (dropdown_theme,theme_menu) => {
    document.addEventListener('mousedown',(e) => {
        if(dropdown_theme.current && !dropdown_theme.current.contains(e.target)){
            theme_menu.current.classList.remove('active');
        }
    })
    
}

const Thememenu = () => {

    const dispath = useDispatch();

    const dropdown_theme = useRef(null);
    const theme_menu = useRef(null);

    clickOutSize(dropdown_theme,theme_menu);

    const [chooseMode, setChooseMode] = useState('light');
    const [chooseColor, setChooseColor] = useState('blue');

    useEffect(() => {
        const classMode = mode_settings.find(item => item.class === localStorage.getItem("themeMode"));
        const classColor = color_settings.find(item => item.class === localStorage.getItem("themeColor"));

        if(classMode !== undefined) setChooseMode(classMode.id);
        if(classColor !== undefined) setChooseColor(classColor.id);
    },[])

    const setActiveMenu = () => theme_menu.current.classList.add('active'); 
    const closeMenu = () => theme_menu.current.classList.remove('active'); 
    
    const setModeTheme = (item) => {
        setChooseMode(item.id);
        localStorage.setItem('themeMode',item.class);
        dispath(allSlice.changeMode(item.class));

    } 

    const setColorTheme = (item) => {
        setChooseColor(item.id);
        localStorage.setItem('themeColor',item.class);
        dispath(allSlice.changeColor(item.class));
    } 

  return (
    <div 
        className='dropdown__theme'
        ref={dropdown_theme}
    >
        <button className="dropdown__toggle" onClick={setActiveMenu}>
            <i className='bx bx-palette'></i>
        </button>
        <div className='theme-menu' 
            ref={theme_menu}
        >
            <div className='theme-menu__title'>
                <h4>Themes settings</h4>
                <button className="theme-menu__title__close" onClick={closeMenu}>
                    <i className='bx bx-x'></i>
                </button>
                
            </div>
            <div className='theme-menu__mode'>
                <span>Choose mode</span>
                <ul>
                    {
                        mode_settings.map((item,i) => (
                            <li key={i} onClick={() => setModeTheme(item)}>
                                <div key={i} className={`mode-list__color ${item.background}` }>
                                    <button className={`mode-list__check__icon ${item.background} 
                                                        ${item.id === chooseMode ? 'active' : ''}`}
                                    >
                                        <i className='bx bx-check'></i>
                                    </button>
                                </div>
                                <span>{item.name}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='theme-menu__mode'>
                <span>Choose color</span>
                <ul>
                    {
                        color_settings.map((item,i) => (
                            <li key={i} onClick={() => setColorTheme(item)}>
                                <div className={`mode-list__color ${item.background}` }>
                                    <button className={`mode-list__check__icon ${item.background} 
                                                        ${item.id === chooseColor ? 'active' : ''}`}
                                    >
                                        <i className='bx bx-check'></i>
                                    </button>
                                </div>
                                <span>{item.name}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Thememenu