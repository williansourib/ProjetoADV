import {useContext} from "react"
import {UsuariosContext} from "../context/UsuariosContext";

function Home() {
    const {usuarios, setUsusarios} = useContext(UsuariosContext)

    return (
        <>
            <h1>Pagina Home</h1>
            {usuarios.map((usuario, index) => (
                <h3 key={index}>{usuario.nome}</h3>
            ))}
        </>
    )
}

export default Home