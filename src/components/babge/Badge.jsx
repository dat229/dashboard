import React from 'react'

import './badge.scss';

const Badge = (props) => {
  return (
    <td>
        <span className={`badge badge__${props.type}`}>
            {props.content}
        </span>
    </td>
  )
}

export default Badge