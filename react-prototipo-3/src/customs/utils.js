export function formataValorMoedaReal(number_) {
  return number_.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  });
}
