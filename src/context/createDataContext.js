//va ser que nuetro reducer pueda generar un contexto y un proveedor de servicio y un 
//contexto en el cual va estar basado nuestro proveedor

import React, { useReducer } from "react";

export default (reducer, actions, defaultvalue) => {
    const Context = React.createContext();

    const Provider = ({ children }) => { //vamos a tener hijos dentro de este contexto
        const [state, dispatch] = useReducer(reducer, defaultvalue);

        const boundActions = {};

        for (let key in actions){
            boundActions[key] = actions[key](dispatch);
        }
     

        return (
            <Context.Provider value={{state, ...boundActions}}>
                {children}
            </Context.Provider>
        );
    } 

    return { Context, Provider};
};

// nos vamos ir a conectar ir a la Api y la almacenamos dentro dento del estado del el contexto
// este se lo pasa al provider y el provider a la pantalla.