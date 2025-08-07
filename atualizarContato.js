const rl = require('./rl');
const contatos = require('./contatos');
const listagemContatos = require('./listagemContatos');
const atualizarDetalhes = require('./atualizarDetalhes');

function atualizarContato(exibirMenu, contatos) {
  listagemContatos(exibirMenu, contatos);

  rl.question(
    "\nInforme o índice do contato que você deseja atualizar: ",
    (indice) => {
      let i = parseInt(indice) - 1;

      if (isNaN(i) || i < 0 || i >= contatos.length) {
        console.log("\nInforme um índice válido.");
        return atualizarContato(exibirMenu, contatos);
      }

      atualizarDetalhes(i, exibirMenu);
    }
  );
}

module.exports = atualizarContato;