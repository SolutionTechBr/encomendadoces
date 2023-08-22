import React from 'react';
import './StyleCard.scss'; // Import the SCSS styles

export default function Card({
  adicionarAoCarrinho,
  LanchesFiltrados,
}) {
  return (
    <div className="DivContainer"> {/* Use className */}
      {LanchesFiltrados.map((lanch) => (
        <div className="DivCard" key={lanch.id}> {/* Use className */}
          <div className="DivContainerImg"> {/* Use className */}
            <img src={lanch.img} alt="imagem" />
          </div>
          <div className="DivInfo"> {/* Use className */}
            <h3>{lanch.name}</h3>
            <span>{lanch.category}</span>
            <p>R$ {lanch.price}</p>
            <button onClick={() => adicionarAoCarrinho(lanch)}>
              Adicionar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
