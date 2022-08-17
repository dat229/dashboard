import React from 'react'
import { useState } from 'react';

import './table.scss'

const Table = (props) => {
    
    
    const initDataShow = props.limit ? props.bodyData.slice(0, props.limit) : props.bodyData;
    let pages = null;
    let range = [];

    const [dataShow, setDataShow] = useState(initDataShow);

    if(props.limit!==undefined){
        let page = Math.floor(props.bodyData.length / Number(props.limit));
        pages = props.bodyData.length % Number(props.limit) === 0 ? page : page+1;
        range = [...Array(pages).keys(pages)];
    }

    const [dataPage, setDataPage] = useState(1);

    const setPage = (item) => {
        const start = item * Number(props.limit);
        const end = start + Number(props.limit);
    
        setDataShow(props.bodyData.slice(start,end));

        setDataPage(item+1);
    }
    

    return (
    <div className='card table-wrapper'>
        <table>
            {
                props.headData && props.renderHead ? 
                    (
                       <thead>
                           <tr>
                               {
                                   props.headData.map((item,i) => props.renderHead(item,i))
                               }
                           </tr>
                       </thead> 
                    )
                : null
            }

            {
                props.bodyData && props.renderBody ?
                (
                    <tbody>
                        {
                            dataShow.map((item,i) => props.renderBody(item,i))
                        }
                    </tbody>
                )
                : null
            }   

        </table>
        
        {
            pages > 1 ?
                <div className='table__pagination'>
                    {
                        range.map((item,i) => (
                            <div key={i}  
                                className= {`table__pagination-item ${dataPage===i+1 ? 'active' : ''}`}
                                onClick={() => setPage(i)}
                            >
                                {item+1}
                            </div>
                        ))
                    }
                </div>
            : null
        }
    </div>
  )
}

export default Table