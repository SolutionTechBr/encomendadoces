import React from "react";
import "./HeadingStyle.scss";

function Header({ lanches, setLanchesFiltrados }) {
  function filtrarPorCategoria(categoria) {
    if (categoria === "todos") {
      setLanchesFiltrados(lanches);
    } else {
      const lanchesFiltrados = lanches.filter(item => item.category === categoria);
      setLanchesFiltrados(lanchesFiltrados);
    }
  }

  function naoCarregarAPagina(event) {
    event.preventDefault();
  }

  return (
    <div className="header">
      <img src="caminho_para_a_imagem.png" alt="Logo" />
      <form>
        <button onClick={() => filtrarPorCategoria("todos")}>Todos</button>
        <button onClick={() => filtrarPorCategoria("Cone")}>Cone Trufado</button>
        <button onClick={() => filtrarPorCategoria("Pote")}>Bolo de Pote</button>
        {/* Adicione mais botões para outras categorias se necessário */}
        <input type="text" placeholder="Pesquisar..." />
      </form>
    </div>
  );
}

export default Header;
