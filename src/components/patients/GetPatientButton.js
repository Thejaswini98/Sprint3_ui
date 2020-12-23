import React  from 'react';
import {Link} from 'react-router-dom';
const GetPatientButton = () =>{
    return(

        <React.Fragment>
            <Link to="/getPatient" className="btn btn-lg btn-info">
                Get
            </Link>
        </React.Fragment>        
    );
}

export default GetPatientButton;