import axios from 'axios';
import { GET_ERRORS,GET_PATIENTS,DELETE_PATIENT,GET_PATIENT} from './type';
export const createPatient=(patient,history)=>async dispatch=> {
    try {
        const res =await axios.post ("http://localhost:8081/api/patients",patient)
        //alert("Patient saved with following details:\nPatient Identifier:  " + res["data"]["patientIdentifier"]+"\nName: " + res["data"]["patientName"] + "\nAge: " + res["data"]["patientAge"] + "\nPhone Number: " + res["data"]["phoneNumber"] + "\nAddress: " + res["data"]["patientAddress"]);
        history.push("/getPatient");
    } catch (error) {
        console.log(patient);
        console.log(error.response);
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}

export const getPatients=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8081/api/patients/all");
    dispatch({
        type:GET_PATIENTS,
        payload:res.data
    })
}

export const getPatient=(patientidentifier,history)=>async dispatch=>{
    const res=await axios.get(`http://localhost:8081/api/patients/${patientidentifier}`);
    dispatch({
        type:GET_PATIENT,
        payload:res.data
    })
}


export const deletePatient=(patientIdentifier,history)=>async dispatch=>{
    try{
        if(window.confirm("Are you sure ? This will delete the patient and the data related to it")) {
        const res = await axios.delete(`http://localhost:8081/api/patients/${patientIdentifier}`);
        alert("Patient successfully deleted !!");
        history.push("/getPatient");
        dispatch({
            type:DELETE_PATIENT,
            payload:patientIdentifier
        })
     }}
     catch (error) {
        
        console.log(error.response);
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}