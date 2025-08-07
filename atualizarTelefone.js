const rl = require('./rl');
const contatos = require('./contatos');
const exibirMenu = require('./exibirMenu');

function atualizarTelefone(i, exibirMenu, editarMais, atualizarDetalhes) {
  rl.question("\nInforme o novo número de telefone: ", (novoTelefone) => {
    contatos[i].telefone = novoTelefone;
    console.log("\nNúmero de telefone atualizado com sucesso!");
    editarMais(i, exibirMenu, atualizarDetalhes);
  });
}

module.exports = atualizarTelefone;
