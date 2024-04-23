import { useContext, useState } from "react"
import { UsuariosContext } from "../context/UsuariosContext"
import styles from "./Cadastro.module.css"
import CButton from "../components/atoms/Button/CButton"
import Input from "../components/atoms/Button/Input/Inputt"

function Cadastro() {
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
  });

  // Get usuarios and setUsuarios from context
  const { usuarios, setUsuarios } = useContext(UsuariosContext);
  
  function CadastrarUsuarios() {
    // Add the new usuario to the existing usuarios array
    setUsuarios([...usuarios, usuario]);  
  }

  function limparCampos() {
    // Reset the user input fields
    setUsuario({ nome: "", email: "" });
  }

  return (
    <>
      <div className={styles.card}>
        <h1>Pagina Cadastro</h1>
      </div>
      <Input 
        label="nome do usuario" 
        value={usuario.nome}
        onChange={(evento) => setUsuario({...usuario, nome: evento.target.value})}
      />
      
      <Input
        label="email do usuario" 
        value={usuario.email}
        onChange={(evento) => setUsuario({...usuario, email: evento.target.value})}
      />
      <CButton onClick={CadastrarUsuarios}>Cadastrar</CButton>
      <CButton onClick={limparCampos}>Limpar</CButton>
    </>
  )
}

export default Cadastro;
