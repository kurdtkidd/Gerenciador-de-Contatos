const rl = require('./rl');
const contatos = require('./contatos');
const editarMais = require('./editarMais');

function atualizarTelefone(i) {
  rl.question("\nInforme o novo número de telefone: ", (novoTelefone) => {
    contatos[i].telefone = novoTelefone;
    console.log("\nNúmero de telefone atualizado com sucesso!");
    editarMais(i);
  });
}

module.exports = atualizarTelefone;
