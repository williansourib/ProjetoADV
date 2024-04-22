import CardTrilha from "./components/CardTrilha/index.jsx";
import "./App.css"

function App() {
 
  const listaTrilhas = [
    {
      nomeTrilha: "Trilha Da Montanha",
      cidade: "Florianópolis",
      estado: "SC",
      duracao: "7 horas",
      trajeto: "8 km",
      dificuldade: "moderada",
      tipo: "montanha",
      nomeUsuario: "Willian Ribeiro",
      urlImagem: "https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }
  ]
  return (
    <div className="container">
      <h1 className="titulo">Explore Trilhas Incriveis</h1>
    {
      listaTrilhas.map((trilha, index) => (
        <CardTrilha dadosTrilha = {trilha} key= {index} />
      ))
    } 
    </div>
  )
}

export default App
