import React from 'react'

import statusCard from '../../assets/JsonData/status-card-data.json';
import StatusCard from '../../components/statusCard/StatusCard';

import Chart from 'react-apexcharts'
import Table from '../../components/table/Table';
import { Link } from 'react-router-dom';
import Badge from '../../components/babge/Badge';

const chartList = {
  series: [{
    name: 'Online Customers',
    data: [40,70,20,90,36,80,30,91,60]
  }, {
    name: 'Store Customers',
    data: [40, 30, 70, 80, 40, 16, 40, 20, 51]
  }],
  options: {
    type: 'line',
    color: ['#6ab04c', '#2980b9'],
    chart: {
        background: 'transparent'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    legend: {
        position: 'top'
    },
    grid: {
        show: false
    }
  }
  
}

const topCustomers = {
  head: ['user', 'total orders', 'total spending'],
  body: [
    {
      "username": "john doe",
      "order": "490",
      "price": "$15,870",
    },
    {
      "username": "frank iva",
      "order": "250",
      "price": "$12,251",
    },
    {
      "username": "anthony baker",
      "order": "120",
      "price": "$10,840",
    },
    {
      "username": "frank iva",
      "order": "110",
      "price": "$9,251",
    },
    {
      "username": "anthony baker",
      "order": "80",
      "price": "$8,840",
    },
  ]
}

const renderHeadCustomers = (item,i) =>(
  <th key={i}>{item}</th>
)

const renderBodyCustomers = (item,i) => (
  <tr key={i}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
)

const latestOrders = {
  header: [
      "order id",
      "user",
      "total price",
      "date",
      "status"
  ],
  body: [
      {
          id: "#OD1711",
          user: "john doe",
          date: "17 Jun 2021",
          price: "$900",
          status: "shipping"
      },
      {
          id: "#OD1712",
          user: "frank iva",
          date: "1 Jun 2021",
          price: "$400",
          status: "paid"
      },
      {
          id: "#OD1713",
          user: "anthony baker",
          date: "27 Jun 2021",
          price: "$200",
          status: "pending"
      },
      {
          id: "#OD1712",
          user: "frank iva",
          date: "1 Jun 2021",
          price: "$400",
          status: "paid"
      },
      {
          id: "#OD1713",
          user: "anthony baker",
          date: "27 Jun 2021",
          price: "$200",
          status: "refund"
      }
  ]
}

const orderStatus = {
  "shipping": "primary",
  "pending": "warning",
  "paid": "success",
  "refund": "danger"
}

const renderHeadOrders = (item,i) =>(
  <th key={i}>{item}</th>
)

const renderBodyOrders = (item,i) => (
  <tr key={i}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.date}</td>
    <td>{item.price}</td>
    <Badge type={orderStatus[item.status]} content= {item.status} />
  </tr>
)


const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h2 className='dashboard__header'
            style={{"marginBottom":"12px"}}
      >
        Dashboard
      </h2>
      <div className='row'>
        <div className='col-6'>
          <div className='row'>
              {
                statusCard.map((item,i)=>(
                  <div key={i} className='col-6'>
                    <StatusCard 
                      item = {item}
                    />
                  </div>
                ))
              }
          </div>
        </div>
        <div className='col-6'>
          <div  className="card full-height">
            <Chart 
              options={chartList.options} 
              series={chartList.series} 
              type="line" 
              height="100%" 
            />
          </div>
        </div>
        <div className="col-5">
          <div className="card">
              <div className="card__header">
                  <h3>top customers</h3>
              </div>
              <div className="card__body">
                  <Table
                      headData={topCustomers.head}
                      renderHead={(item, index) => renderHeadCustomers(item, index)}
                      bodyData={topCustomers.body}
                      renderBody={(item, index) => renderBodyCustomers(item, index)}
                  />
                  <div className='card__footer'>
                      <Link to='/'>View All</Link>
                  </div>
              </div>
          </div>
        </div>
        <div className="col-7">
            <div className="card">
                <div className="card__header">
                    <h3>latest orders</h3>
                </div>
                <div className="card__body">
                    <Table
                        headData={latestOrders.header}
                        renderHead={(item, index) => renderHeadOrders(item, index)}
                        bodyData={latestOrders.body}
                        renderBody={(item, index) => renderBodyOrders(item, index)}
                    />
                    <div className='card__footer'>
                        <Link to='/'>View All</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Dashboard