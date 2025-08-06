const rl = require('./rl');
const contatos = require('./contatos');

function adicionarContato(exibirMenu, contatos) {
  rl.question("\nInforme o nome do contato: ", (nome) => {
    rl.question("Informe o telefone do contato: ", (telefone) => {
      rl.question("Informe o e-mail do contato: ", (email) => {
        contatos.push({ nome: nome, telefone: telefone, email: email });
        console.log("\nContato adicionado com sucesso!");
        exibirMenu();
      });
    });
  });
}

module.exports = adicionarContato;
