import React  from 'react';
import {Link} from 'react-router-dom';
const DeletePatientButton = () =>{
    return(

        <React.Fragment>
            <Link to="/deletePatient" class="btn btn-danger">
                Delete
            </Link>
        </React.Fragment>        
    );
}

export default DeletePatientButton;