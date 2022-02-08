import react, {createContext, useReducer} from "react";


const InitialState =[
    {id: 1, label:"Flower", amount: 20},
    {id: 2, label:"Pen", amount: 60},
    {id: 3, label:"Shampoo", amount: 100},
    {id: 4, label:"Shirt", amount: 500},
]


export const GlobalContext = createContext(useReducer);
export default function GlobalProvider ({children}){
    const [state, dispatch] =useReducer(InitialState)
    return(
         <GlobalContext.Provider>
                {children}
        </GlobalContext.Provider>
    )
} 