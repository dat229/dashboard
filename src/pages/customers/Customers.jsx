import React, {useEffect,useRef} from 'react'

import Table from '../../components/table/Table';

import customList from '../../assets/JsonData/customers-list.json';

const headerCustom = ["","name","email","phone","tatol order","total spend","location"]

const renderHeadCustom = (item,i) => (
    <th key={i}>{item}</th>
)

const renderBodyCustom = (item,i) => (
  <tr key={i}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
)

const Customers = () => {
  return (
    <div className='customer'>
      <h2 style={{"marginBottom":"12px"}}>Customer</h2>
      <div className='row'>
        <div className='col-12'>
          <Table 
            limit = '10'
            headData = {headerCustom}
            renderHead = {(item,i) => renderHeadCustom(item,i)}
            bodyData = {customList}
            renderBody = {(item,i) => renderBodyCustom(item,i)}
          />
        </div>
      </div>
    </div>
  )
}

export default Customers