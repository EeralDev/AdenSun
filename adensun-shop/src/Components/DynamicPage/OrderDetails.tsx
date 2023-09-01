import { useParams } from 'react-router-dom';

function OrderDetails() {

    const URLParams = useParams();

    return (
        <>
            <div>order { URLParams.orderId}</div>
        </>
    );
}

export default OrderDetails;