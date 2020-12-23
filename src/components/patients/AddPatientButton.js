import React  from 'react';
import {Link} from 'react-router-dom';
const AddPatientButton = () =>{
    return(

        <React.Fragment>
            <Link to="/addPatient" className="btn btn-lg btn-info">
                Add
            </Link>
        </React.Fragment>        
    );
}

export default AddPatientButton;