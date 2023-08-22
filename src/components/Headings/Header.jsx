import "./HeadingStyle.scss";
import React, { useState } from 'react';


function Header({ lanches, setLanchesFiltrados }) {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  function filtrarPorCategoria(categoria) {
    const lanchesFiltrados = lanches.filter(item => categoria === "todos" || item.category === categoria);
    setLanchesFiltrados(lanchesFiltrados);
  }

  
  console.log("Selected Category:", selectedCategory); // Verifique o valor aqui


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
