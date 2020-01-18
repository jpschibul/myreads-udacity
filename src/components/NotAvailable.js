import React from 'react';
import { Link } from 'react-router-dom';



class NotAvailable extends React.Component{
    render(){
        return <div>
            <h3 style={{textAlign:"center"}}>This page does not exist, please click below to go back to the Book Case </h3>
                <p style={{textAlign:"center"}}>
                <Link to="/">Go to Home </Link>
            </p>
          </div>;
    }
}export default NotAvailable;