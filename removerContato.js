const rl = require('./rl');
const listagemContatos = require('./listagemContatos');

function removerContato(exibirMenu, contatos) {
  listagemContatos(exibirMenu, contatos);

  rl.question(
    "\nInforme o índice do contato que deseja remover: ",
    (indice) => {
      let i = parseInt(indice) - 1;

      if (isNaN(i) || i < 0 || i >= contatos.length) {
        console.log("\nFavor informar um índice válido.");
        return removerContato(exibirMenu, contatos);
      }

      const removido = contatos.splice(i, 1)[0];
      console.log(`\nO contato ${removido.nome} foi removido com sucesso!`);
      exibirMenu();
    }
  );
}

module.exports = removerContato;
