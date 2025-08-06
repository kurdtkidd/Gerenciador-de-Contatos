const rl = require('./rl');
const contatos = require('./contatos');
const editarMais = require('./editarMais');

function atualizarNome(i) {
  rl.question("\nInforme o novo nome: ", (novoNome) => {
    contatos[i].nome = novoNome;
    console.log("\nNome atualizado com sucesso!");
    editarMais(i);
  });
}

module.exports = atualizarNome;
