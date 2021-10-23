import React, { useEffect, useState } from "react";
import baseurl from "./baseurl";
import axios from "axios";
import './css/archivedlogs.css';


const ArchivedLogs = () => {

    const [data, setData] = useState([])

    const getData = async () => {
    const response = await axios.get(baseurl + "/archivedlogs").catch((err) => console.log("Error:", err.message))

    if (response && response.data) setData(response.data);
}

console.log("Data:", data)
  

  useEffect(() => {
      getData();
  }, [])

    return(
        <div className="archived">
            <div className="div-1">
                <h3>Email</h3>
                <h3>MSISDN</h3>
                <h3>Created At</h3>
            </div>
                {data.map( data => (
                    <div className="div">
                        <p key={data.id}>{data.email}</p>
                        <p key={data.id}>{data.msisdn}</p>
                        <p key={data.id}>{data.created_at}</p>
                    </div>
                ))}

        </div>
    );
}

export default ArchivedLogs;