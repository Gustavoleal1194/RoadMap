import eventBus from "./eventBus";

export function adicionarAoCarrinho(item) {
  const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || []
  carrinhoAtual.push(item)
  localStorage.setItem('carrinho', JSON.stringify(carrinhoAtual))

  eventBus.dispatch('item-adicionado', item);
}


export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || []
}