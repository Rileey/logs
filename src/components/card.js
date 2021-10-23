import "../css/card.css"
import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Card = () => {
    return(
        <div className='top-body-container'>
            <div className='card-container'>
                <Link to="/activelogs" style={{textDecoration: "none", color: "black"}}>
                <div className='card'>
                    <FontAwesomeIcon icon="chart-line" size="2x"/>
                    <h2>Active Logs</h2>
                    <div>
                        <p className="p">Data Logs from the Server Six months and under</p>
                    </div>
                </div>
                </Link>
                <Link to="/archivedlogs" style={{textDecoration: "none", color: "black"}}>
                <div className='card'>
                    <FontAwesomeIcon icon="archive" size="2x"/>
                    <h2>Archived Logs</h2>
                    <div>
                        <p className="p">Expired active logs are archived for a week</p>
                    </div>
                </div>
                </Link>
                <Link to="/expiringlogs" style={{textDecoration: "none", color: "black"}}>
                <div className='card' >
                    <FontAwesomeIcon icon="times-circle" size="2x"/>
                    <h2>Expiring Logs</h2>
                    <div>
                        <p className="p">Expiring archives are deleted at the day's end</p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    );
}

export default Card;