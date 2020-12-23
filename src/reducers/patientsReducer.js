import { GET_PATIENTS } from "../actions/type";

const initialState={
    patients:[],
    patient:{}
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_PATIENTS:
            return{
                ...state,
                patients:action.payload
            }
            default:
                return state;
                
    }
}