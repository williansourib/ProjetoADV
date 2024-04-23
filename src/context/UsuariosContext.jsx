/** Passos para criar um contexto
 * 
 * 1 [] import o creatcontext do react
 * 2 [] criar a variavel do contexto
 * 3 [] exportar a variavel do contexto
 * 4 [] crie a variavel do provider
 * 5 [] receba a prop children
 * 6 [] defina os dados globais
 * 7 [] crie o jsx do provider e passe os dados globais no prop value
 * 8 [] importe o provider do arquivo app jsx
 * 9 [] importe o contexto do arquivo que for ultilizar
 * 10 [] emporte o 
 * 
 * 
 * 
 * */


import {createContext, useState} from "react"

export const UsuariosContext = createContext ()

export const UsuariosContextProvider = ({children}) => {
    const [usuarios, setUsuarios] = useState ([

        {
            nome: "Willian",
            email: "email@email.com"
        },
        {
            nome: "Ana",
            email: "ana@email.com"
        },
        {
            nome: "Carlos",
            email: "carlos@email.com"
        },
    ])  
    
    return(
        <UsuariosContext.Provider value={{usuarios, setUsuarios}} >
            {children}
        </UsuariosContext.Provider>
        
    ) 
}