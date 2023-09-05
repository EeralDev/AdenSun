import { useContext, useEffect, useState } from 'react';
import { IOrder } from '../../DTO/DTOs';
import { UserContext } from '../../Context/UserContext';
import { MDBAccordion } from 'mdb-react-ui-kit';
import OrderItemAccordion from '../ACDN/OrderItemAccordion';

function Orders() {

    const user = useContext(UserContext);

    const [orders, setOrders] = useState<IOrder[]>([])

    useEffect(() =>
    {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': user.token }
        };
        fetch(`https://localhost:44316/api/Client/Order`, requestOptions)
            .then((res) => res.json())
            .then(data => {
                if (data[0] !== 'E') {
                    setOrders(data)
                }
                else {
                    alert(data);
                }
            });
    }, [user.token])

    return (
        <MDBAccordion className="m-5" initialActive={1}>
            {
                orders.map((item, index) =>
                    <OrderItemAccordion Order={item} collapseID={index + 1}/>
                )
            }
        </MDBAccordion>
    )
}

export default Orders;