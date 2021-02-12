import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import selectOrder from "../Actions/action";

const Orders = () => {
    const ordersData = useSelector((state) => state.order);

    const dispatch = useDispatch();

    return (
        <div>
            {ordersData[0].map((item) => (
                <li
                    key={item.id}
                    onClick={() => dispatch(selectOrder(item.id))}
                >
                    <Link to="/ordersdetails">{item.ordername}</Link>
                </li>
            ))}
        </div>
    );
};

export default Orders;
