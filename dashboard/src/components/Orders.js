import React,{ useState, useEffect} from "react";
import axios from 'axios';

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/showOrders", { withCredentials:true })
      .then((res) => {
        console.log(res.data);
        setAllOrders(res.data);  
    })
    .catch((err) =>{
        console.log(err);
        window.location.href = "http://localhost:3000/loginup"; 
      });
  }, []);
  
  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty.</th>
          </tr>


          {allOrders.map((stock, index) => {

            
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.price}</td>
                <td>{stock.qty}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;