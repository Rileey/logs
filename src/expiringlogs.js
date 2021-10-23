import React, { useEffect, useState } from "react";
import axios from "axios";
// import './css/expiringlogs.css'
import baseurl from "./baseurl";


const ExpiringLogs = ({users}) => {

    const [data, setData] = useState([])

    const getData = async () => {
    const response = await axios.get(baseurl + "/expiringlogs").catch((err) => console.log("Error:", err.message))

    if (response && response.data) setData(response.data);
}

console.log("Data:", data)
  

  useEffect(() => {
      getData();
  }, [])

    return(
        <div className="activelogs-container">
            <div className='data'>
            <div className="div-1">
                <h3>Email</h3>
                <h3>MSISDN</h3>
                <h3>Created At</h3>
            </div>
            {data.map( info => (
                <div className="comments">
                    <p key={info.id}>{info.email}</p>
                    <p key={info.id}>{info.msisdn}</p>
                    <p key={info.id}>{info.created_at}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export default ExpiringLogs