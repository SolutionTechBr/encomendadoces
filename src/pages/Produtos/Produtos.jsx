import React, { useEffect, useState } from "react";
import Card from "../../components/Cards/CardProdutos";
import Header from "../../components/Headings/Header";
import Cart from "../../components/Cards/Cart";
import CategoriasData from "../../data/CategoriasData.js"; 

function ProductsPage() {
  document.title = 'Malimpensa Doces | Produtos';

  const [lanches, setLanches] = useState([]);
  const [lanchesCarrinho, setLanchesCarrinho] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [LanchesFiltrados, setLanchesFiltrados] = useState([]);

  useEffect(() => {
    // Usando os dados importados do JSON local
    setLanches(CategoriasData);
    setLanchesFiltrados(CategoriasData);
  }, []);


  function adicionarAoCarrinho(produto) {
    setLanchesCarrinho([...lanchesCarrinho, produto]);
  }

  function deletarItemCarrinho(produto) {
    setLanchesCarrinho(lanchesCarrinho.filter((item) => item !== produto));
  }

  function deletarTodositens() {
    setLanchesCarrinho([]);
  }


  return (
    <div className="App">
      <Header lanches={lanches} setLanchesFiltrados={setLanchesFiltrados} />
      <main>
        <div className="containerGeral">
          <Card
            adicionarAoCarrinho={adicionarAoCarrinho}
            LanchesFiltrados={LanchesFiltrados}
          />
          <Cart
            deletarItemCarrinho={deletarItemCarrinho}
            lanchesCarrinho={lanchesCarrinho}
            deletarTodositens={deletarTodositens}
          />
        </div>
      </main>
    </div>
  );
}

export default ProductsPage;