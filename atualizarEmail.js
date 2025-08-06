const rl = require('./rl');
const contatos = require('./contatos');
const editarMais = require('./editarMais');

function atualizarEmail(i) {
  rl.question("\nInforme o novo e-mail: ", (novoEmail) => {
    contatos[i].email = novoEmail;
    console.log("\nEmail atualizado com sucesso!");
    editarMais(i);
  });
}

module.exports = atualizarEmail;
