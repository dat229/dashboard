import React from 'react'

import './statusCard.scss';

const StatusCard = (props) => {
  return (
    <div key={props.key} className='status-card'>
        <div className='status-card__icon'>
            <i className={props.item.icon}></i>
        </div>
        <div className='status-card__content'>
            <h4>{props.item.count}</h4>
            <span>{props.item.title}</span>
        </div>
    </div>
  )
}

export default StatusCard