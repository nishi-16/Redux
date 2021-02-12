import React from "react";
import { useSelector } from "react-redux";

const OrdersDetails = () => {
    const orders = useSelector((state) => state.order);

    return (
        <div>
            {orders[0].map((item) => {
                if(item.id == orders.orderselected){
                    return (
                        <div key={item.id}> {item.ordername} from {item.place}</div>
                    )
                }
            })}
        </div>
    );
};

export default OrdersDetails;
