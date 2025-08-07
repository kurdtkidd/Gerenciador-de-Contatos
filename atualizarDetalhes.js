const rl = require('./rl');
const atualizarNome = require('./atualizarNome');
const atualizarTelefone = require('./atualizarTelefone');
const atualizarEmail = require('./atualizarEmail');
const editarMais = require('./editarMais');

function atualizarDetalhes(i, exibirMenu) {
  console.log("\n1 - Atualizar nome");
  console.log("2 - Atualizar telefone");
  console.log("3 - Atualizar email");
  console.log("4 - Retornar ao menu principal");

  rl.question("\nEscolha a opção desejada: ", (opcao) => {
    opcaoFormatada = parseInt(opcao);

    switch (opcaoFormatada) {
      case 1:
        atualizarNome(i, exibirMenu, editarMais, atualizarDetalhes);
        break;
      case 2:
        atualizarTelefone(i, exibirMenu, editarMais, atualizarDetalhes);
        break;
      case 3:
        atualizarEmail(i, exibirMenu, editarMais, atualizarDetalhes);
        break;
      case 4:
        exibirMenu();
        break;
      default:
        console.log("\nInforme uma opção válida.");
        atualizarDetalhes(i, exibirMenu);
        break;
    }
  });
}

module.exports = atualizarDetalhes;
