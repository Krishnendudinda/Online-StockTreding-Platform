import React,{ useState, useEffect} from "react";
import axios from 'axios';

const Sells = () => {
  const [allsells, setAllSells] = useState([]);
  useEffect(() => {
    axios.get("https://online-stocktreding-platform-1.onrender.com/showSells", { withCredentials:true })
      .then((res) => {
        console.log(res.data);
        setAllSells(res.data);  
    })
    .catch((err) =>{
        console.log(err);
        window.location.href = "https://zerodha-frontend-jrrm.onrender.com/loginup"; 
      });
  }, []);
  
  return (
    <>
      <h3 className="title">Sells ({allsells.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty.</th>
          </tr>


          {allsells.map((stock, index) => {

            
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

export default Sells;