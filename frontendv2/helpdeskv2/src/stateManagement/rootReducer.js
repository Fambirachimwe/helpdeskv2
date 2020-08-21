import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';



const userInitState = {
    isAuth : false,
    tickets: [],
    user: null,
    users: []
}


const adminInitState = {
    isAuth: false,
    tickets: [],
    users: [],
    admin: null
}


const persistConfig = {
    key: "root",
    storage,
    whitelist: ['userReducer', 'adminReducer']
}

const userReducer = (state=userInitState, action) => {


    switch (action.type) {
        case "USER_LOGGED_IN":
            
            return {
                ...state,
                isAuth: action.isAuth, 
                user: action.user
            }

        case "LOGOUT": 
            return {
                ...state,
                isAuth: action.isAuth
            }

        case "USER_GET_USER_TICKETS": 
            return {
                ...state,
                tickets: action.tickets
            }
        
        case "GET_USERS":
            return {
                ...state,
                users: action.users
           }

        case "USER_UPDATE_STATE":
            if(state.tickets === undefined){
                return {
                    ...state,
                    tickets: [action.ticket]
                }
            }
            else {
                return {
                    ...state,
                    tickets: [...state.tickets, action.ticket]
                }
            }

            

    
        default:
            return state
    }



};

const adminReducer = (state=adminInitState, action) => {

    switch (action.type) {
        case "ADMIN_LOGGED_IN":
            return {
                ...state,
                isAuth: action.isAuth,
                admin: action.user,
            }
            
        case "LOGOUT": 
            return {
                ...state,
                isAuth: action.isAuth
            }

        case "ADMIN_GET_All_TICKETS":
            return {
                ...state,
                tickets: action.tickets
            }

        case "ADMIN_UPDATE_STATE":
                if(state.tickets === undefined){
                    return {
                        ...state,
                        tickets: [action.ticket]
                    }
                }
                else {
                    return {
                        ...state,
                        tickets: [...action.ticket]
                    }
                }

            
    
        default:
            return state
    }




    
}


const rootReducer = combineReducers({
    userReducer,
    adminReducer
});



export const pReducer = persistReducer(persistConfig ,rootReducer);



