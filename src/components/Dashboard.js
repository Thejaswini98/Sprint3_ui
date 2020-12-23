import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientItemComponent from './PatientItemComponent';


class DashboardComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            
            <div className="patients">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        
                        <hr />
                        <PatientItemComponent/>

                    </div>
                </div>
                
            </div>
            </div>

        );
    }

}

export default DashboardComponent;