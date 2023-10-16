var result = document.getElementById('result');

function calc(){
   var nome = document.getElementById('nome').value;
   var preco = Number.parseFloat(document.getElementById('preco').value);

   let novoPreco = (preco * 0.05) + preco;

   console.log('O preço de ' + nome + ' agora será R$' + novoPreco.toFixed(2) + '!!');

   result.innerHTML = 'O preço de ' + nome + ' agora será R$' + novoPreco.toFixed(2) + '!!';
}