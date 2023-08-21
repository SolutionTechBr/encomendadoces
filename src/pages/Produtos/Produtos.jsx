import React, { useEffect, useState } from "react";
import Card from "../../components/Cards/CardProdutos";
import Header from "../../components/Headings/Header";
import Cart from "../../components/Cards/Cart";
import produtosData from "../../data/data.json"; 

function ProductsPage() {

  document.title = 'Malimpensa Doces | Produtos';



  const [lanches, setLanches] = useState([]);
  const [lanchesCarrinho, setLanchesCarrinho] = useState([]);
  const [LanchesFiltrados, setLanchesFiltrados] = useState([]);

  function adicionarAoCarrinho(produto) {
    setLanchesCarrinho([...lanchesCarrinho, produto]);
  }

  function deletarItemCarrinho(produto) {
    setLanchesCarrinho(lanchesCarrinho.filter((item) => item !== produto));
  }

  function deletarTodositens() {
    setLanchesCarrinho([]);
  }

  useEffect(() => {
    // Usando os dados importados do JSON local
    setLanches(produtosData);
    setLanchesFiltrados(produtosData);
  }, []);

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