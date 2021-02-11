import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'

const Orders = () => {

    const ordersData = useSelector(state => state.order)

    const dispatch = useDispatch()

    const selectOrder = () => {
        dispatch({
            type:"SELECTED_ORDER",
            payload:{
                
            }
        })
    }

    return (
        <div>
            {
                ordersData[0].map((item) => (
                    <li key={item.id}>
                        <Link to="/orderdetails">{item.ordername}</Link>  
                    </li>
                    
                ))
            }
        </div>
    )
}

export default Orders