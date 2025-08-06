const rl = require('./rl');
const contatos = require('./contatos');
const listagemContatos = require('./listagemContatos');
const atualizarDetalhes = require('./atualizarDetalhes')
const exibirMenu = require("../exibirMenu");

function atualizarContato(contatos) {
  listagemContatos(exibirMenu, contatos);

  rl.question(
    "\nInforme o índice do contato que você deseja atualizar: ",
    (indice) => {
      let i = parseInt(indice) - 1;

      if (isNaN(i) || i < 0 || i >= contatos.length) {
        console.log("\nInforme um índice válido.");
        return atualizarContato(contatos);
      }

      atualizarDetalhes(i);
    }
  );
}

module.exports = atualizarContato;
