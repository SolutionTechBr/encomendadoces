import React from "react";
import {
  Aside,
  DivCardCarrinho,
  DivNomeCarrinho,
  DivSacolaVazia,
  Sectionn,
} from "./StyleCart.js";

function Cart({ deletarItemCarrinho, lanchesCarrinho, deletarTodositens }) {
  let total = lanchesCarrinho.reduce(
    (valorInicial, valoresDosProdutos) =>
      valorInicial + valoresDosProdutos.price,
    0
  );

  function construirPedidoTexto(lanchesCarrinho) {
    const pedidoLinhas = lanchesCarrinho.map(item => {
      return `${item.name} - ${item.category} - R$ ${item.price.toFixed(2)}`;
    });
  
    const pedidoTexto = `Pedido:%0A${pedidoLinhas.join('%0A')}`;
    return pedidoTexto;
  }

  function enviarPedidoPorWhatsApp() {
    const pedidoTexto = construirPedidoTexto(lanchesCarrinho);
    const linkWhatsApp = `https://wa.me/+5519998133186?text=${encodeURIComponent(pedidoTexto)}`;
    window.open(linkWhatsApp, '_blank');
  }

  return (
    <Aside>
      <DivNomeCarrinho>
        <h3>Carrinho de compras</h3>
      </DivNomeCarrinho>
      <Sectionn>
        {lanchesCarrinho.length === 0 ? (
          <DivSacolaVazia>
            <h3>Sua sacola está vazia</h3>
            <span>Adicione itens</span>
          </DivSacolaVazia>
        ) : (
          lanchesCarrinho.map((item) => (
            <DivCardCarrinho key={item.id}>
              <div className="imgCart">
                <img src={item.img} alt="imagem do produto" />
              </div>
              <div>
                <h4>{item.name}</h4>
                <p>{item.category}</p>
              </div>
              <button
                className="btnRemoverCardCarrinho"
                onClick={() => deletarItemCarrinho(item)}
              >
                Remover
              </button>
            </DivCardCarrinho>
          ))
        )}
      </Sectionn>
      {lanchesCarrinho.length !== 0 && (
        <>
          <div className="divTotal">
            <span>Total</span>
            <p>R$ {total.toFixed(2)}</p>
          </div>
          <button onClick={enviarPedidoPorWhatsApp}>Enviar pedido por WhatsApp</button>
        </>
      )}
    </Aside>
  );
}

export default Cart;
