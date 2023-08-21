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
      <form>
        <button onClick={() => filtrarPorCategoria("todos")}>Todos</button>
        <button onClick={() => filtrarPorCategoria("Pote")}>Bolo de Pote</button>
        <button onClick={() => filtrarPorCategoria("Cone")}>Cone Trufado</button>
        <button onClick={() => filtrarPorCategoria("Fatia")}>Fatia de Bolo</button>
        <button onClick={() => filtrarPorCategoria("Pudin")}>Pudin</button>
        <button onClick={() => filtrarPorCategoria("Barra")}>Barra Trufada</button>
        <button onClick={() => filtrarPorCategoria("Docinho")}>Docinhos</button>
        {/* Adicione mais botões para outras categorias se necessário */}
      </form>
    </div>
  );
}

export default Header;
