import { createContext, useReducer } from "react";

const StudentsContext = createContext();

const StudentsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_STUDENT':
            return{
                students: action.payload
            }

        case 'CREATE_STUDENT':
            return{
                students: [action.payload, ...state.students]
            }    
    }
}

const StudentsContextProvider = ({ childern }) => {
    const [state, dispatch] = useReducer(StudentsReducer, {
        students: null
    })

    return (
        <StudentsContext.Provider value={{...state, dispatch}}>
            {childern}
        </StudentsContext.Provider>
    )
}

export {
    StudentsContext,
    StudentsReducer,
    StudentsContextProvider
};