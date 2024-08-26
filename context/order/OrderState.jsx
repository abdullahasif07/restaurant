import OrderContext from "./CreateContext"




const OrderState = (props) =>{

    const getOrdersOfCustomer =async (token) => {
        const response = await fetch(
            "http://localhost:5000/api/user/order/getorders",
            {
                method:"GET",
                headers:{
                    "auth-token": token,
                    "Content-Type": "application/json",
                }
            }
        );

        return await response.json();
    }

    const addOrder = async (token, details) => {
        const response = await fetch(
            "http://localhost:5000/api/user/order/addorder",
            {
                method:"POST",
                headers:{
                    "auth-token": token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(details)
            }
        );

        //console.log(response);
        
        return await response.json();
    }


    return(
        <OrderContext.Provider value={{getOrdersOfCustomer, addOrder}}>
            {props.children}
        </OrderContext.Provider>
    )
}


export default OrderState;