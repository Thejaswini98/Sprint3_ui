import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deletePatient } from '../../actions/PatientAction';
import classnames from "classnames";
class DeletePatient extends Component {

    constructor(props) {
        super(props);

        this.state={
            patients:[],
            errors : {},
            modalIsOpen: false
        }
    }

    componentWillReceiveProps(nextProps)
    {
        if(nextProps.errors)
        {
            this.setState({errors : nextProps.errors.error});
        }
    }

    onChange=(event)=>{
       this.setState(
           {[event.target.name]:event.target.value}
       );
    }

    onSubmit=(event)=>{
        event.preventDefault();
        const deletePatient = {
            patientIdentifier:this.state.patientIdentifier
            
        }
        console.log(this.state.patientIdentifier);
        this.props.deletePatient(this.state.patientIdentifier,this.props.history);
        

    }

    
    render() {
        const {errors} = this.state;
        return (
            <div className="patient">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Delete Patient detail</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.patientIdentifier},{ "is-invalid": errors.responseMessage })}
                                    placeholder="Unique Patient ID" 
                                    name="patientIdentifier" 
                                    onChange={this.onChange}
                                    value={this.state.patientIdentifier}
                                    />

                                    {errors.patientIdentifier && (
                                        <div className="invalid-feedback">
                                            {errors.patientIdentifier}
                                            </div>
                                    )}
                                    {errors.responseMessage && (
                                        <div className="invalid-feedback">
                                            {errors.responseMessage}
                                            </div>
                                    )}
                            </div>
                            <input type="submit" className="btn btn-primary btn-block mt-4" />

                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

DeletePatient.propTypes = {
    deletePatient:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return { errors: state.error }
};
export default connect(mapStateToProps,{deletePatient})(DeletePatient);