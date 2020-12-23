import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getPatients} from '../../actions/PatientAction'

class GetPatientComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            patients:[]
        }
    }

    componentDidMount(){
        this.props.getPatients();
    }

    render() {
        const {patients} =  this.props.patients;
        return (
            <div class="container">
                <br/>
                <h2 class="text-uppercase text-info"><center>All Patient Details</center></h2>
                <hr></hr>
                <table class="table table-bordered table-striped table-hover table-lg">
                    <tr>
                        <th>Patient Identifier</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>

                    <tbody>
                        {
                            patients.map((patient) => {
                                const { patientIdentifier, patientName, patientAge, phoneNumber, patientAddress } = patient;
                                return (
                                    <tr>
                                        <td>{patientIdentifier}</td>
                                        <td>{patientName}</td>
                                        <td>{patientAge}</td>
                                        <td>{phoneNumber}</td>
                                        <td>{patientAddress}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    
                </table>
            </div>
        );
    }
}

GetPatientComponent.propTypes={
    getPatients:PropTypes.func.isRequired

}

const mapStateToProps=(state)=>({
    patients:state.patients
});

export default connect(mapStateToProps,{getPatients})(GetPatientComponent);