const rl = require('./rl');
const contatos = require('./contatos');
const exibirMenu = require('./exibirMenu');

function atualizarNome(i, exibirMenu, editarMais, atualizarDetalhes) {
  rl.question("\nInforme o novo nome: ", (novoNome) => {
    contatos[i].nome = novoNome;
    console.log("\nNome atualizado com sucesso!");
    editarMais(i, exibirMenu, atualizarDetalhes);
  });
}

module.exports = atualizarNome;