const rl = require('./rl');
const contatos = require('./contatos');
const exibirMenu = require('./exibirMenu');

function atualizarEmail(i, exibirMenu, editarMais, atualizarDetalhes) {
  rl.question("\nInforme o novo e-mail: ", (novoEmail) => {
    contatos[i].email = novoEmail;
    console.log("\nEmail atualizado com sucesso!");
    editarMais(i, exibirMenu, atualizarDetalhes);
  });
}

module.exports = atualizarEmail;