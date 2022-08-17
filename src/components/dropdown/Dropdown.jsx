import React, { useRef } from 'react'

import './dropdown.scss';

const clickDropdownToggle = (toggle_ref, content_ref) => {
  document.addEventListener('mousedown',(e)=>{
    if(toggle_ref.current && toggle_ref.current.contains(e.target)){
      content_ref.current.classList.toggle('active');
    }else{
      if(content_ref.current && content_ref.current.contains(e.target)){
        content_ref.current.classList.remove('active');
      }
    }
  })
}

const Dropdown = (props) => {
  
  const dropdownToggle = useRef(null);
  const dropdownContent = useRef(null);

  clickDropdownToggle(dropdownToggle,dropdownContent);
  
  return (
    <div className='dropdown'>
      <button ref={dropdownToggle} className='dropdown__toggle'>
        {
          props.icon ? <i className={props.icon}></i> : ''
        }

        {
          props.badge ? <span className='dropdown__toggle__badge'>{props.badge}</span> : ''
        }

        {
          props.customToggle ? props.customToggle() : ''
        }
      </button>

      <div ref={dropdownContent} className='dropdown__content'>
        {
          props.contentData && props.renderItem ? props.contentData.map(
            (item,i)=>(props.renderItem(item,i))
          ) : ''
        }

        {
          props.renderFooter ? 
            <div className='dropdown__content__footer'>
              {props.renderFooter()}
            </div>
          : ''
        }
      </div>
    </div>
  )
}

export default Dropdown