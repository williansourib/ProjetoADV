import * as PropTypes from "prop-types"
import "./style.css"
function CardTrilha({dadosTrilha}) {
    return (
        <div className= "card_container" >
            <h1>{dadosTrilha.nomeTrilha}</h1>
            <span>{dadosTrilha.cidade} {dadosTrilha.estado}</span>
            <img className="card_imagem" width={200} src={dadosTrilha.urlImagem} alt="imagem montanha" />
        </div>
    )
}
CardTrilha.propTypes = {
    dadosTrilha: PropTypes.exact({
      nomeTrilha: PropTypes.string.isRequired,
      cidade: PropTypes.string.isRequired,
      estado: PropTypes.string.isRequired,
      duracao: PropTypes.number.isRequired,
      trajeto: PropTypes.number.isRequired,
      dificuldade: PropTypes.string.isRequired,
      //enum
      tipo: PropTypes.oneOf(['caminhada / trekking','ciclismo']),
      nomeUsuario: PropTypes.string.isRequired,
      urlImagem: PropTypes.string.isRequired, 
    })
}

// aqui vai os propTypes
export default CardTrilha;