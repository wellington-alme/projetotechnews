//Wellington Almeida
function fazerPedido() {
  const nome = document.querySelector("input[type='text']").value;
  const sabor = document.querySelector("input[name='sabor']:checked");
  const tamanho = document.querySelector("input[name='tamanho']:checked");
  const adicionais = document.querySelectorAll("input[name='adicionais']:checked");

  if (!nome || !sabor || !tamanho) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
  }

  let precoPizza = 0;
  if (tamanho.value === "Pequena") {
      precoPizza = 25.00;
  } else if (tamanho.value === "Média") {
      precoPizza = 35.00;
  } else if (tamanho.value === "Grande") {
      precoPizza = 50.00;
  }

  let precoAdicionais = 0;
  adicionais.forEach(adicional => {
      precoAdicionais += 5.00;
  });

  const valorTotal = precoPizza + precoAdicionais;

''
  let valorFormatado = valorTotal.toFixed(1).replace('.', ',');


  if (valorTotal % 1 === 0) {
      valorFormatado = valorFormatado.replace(',0', '');
  }


  const totalElement = document.querySelector("#total h2 strong");
  totalElement.textContent = valorFormatado;
  alert(`Pedido de ${nome}\nSabor: ${sabor.value}\nTamanho: ${tamanho.value}\nAdicionais: ${[...adicionais].map(a => a.value).join(', ') || 'Nenhum'}\nValor Total: R$ ${valorFormatado}`);
}
