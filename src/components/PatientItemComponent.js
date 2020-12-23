import React from 'react'
import AddPatientButton from './patients/AddPatientButton';
import GetPatientButton from './patients/GetPatientButton';
import DeletePatientButton from './patients/DeletePatientButton'
class PatientItemComponent extends React.Component {
   
    render() {

        return (

            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto"><b>Add Patient Details</b></span>
                        </div>
                        <div className="col-md-8 d-none d-lg-block">
                            <p>Use this service to add the details about the patient and saved it permanently inside the repository</p>
                        </div>
                        <div className="col-md-2">
                            <AddPatientButton />
                        </div>

                    </div>
                </div>

                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto"><b>Get Patient Details</b></span>
                        </div>
                        <div className="col-md-8 d-none d-lg-block">
                            <p>Use this service to get the details about the patients in table format</p>
                        </div>
                        <div className="col-md-2">
                            <GetPatientButton />
                        </div>

                    </div>
                </div>

                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto"><b>Delete Patient Details</b></span>
                        </div>
                        <div className="col-md-8 d-none d-lg-block">
                            <p>Use this service to delete the details about the patients in table format</p>
                        </div>
                        <div className="col-md-2">
                            <DeletePatientButton />
                        </div>

                    </div>
                </div>

            
            </div>

        )
    }
}

export default PatientItemComponent;