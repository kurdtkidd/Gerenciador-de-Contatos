const rl = require('./rl');
const atualizarNome = require('./atualizarNome');
const atualizarTelefone = require('./atualizarTelefone');
const atualizarEmail = require('./atualizarEmail');
const exibirMenu = require('./exibirMenu');

function atualizarDetalhes(i) {
  console.log("\n1 - Atualizar nome");
  console.log("2 - Atualizar telefone");
  console.log("3 - Atualizar email");
  console.log("4 - Retornar ao menu principal");

  rl.question("\nEscolha a opção desejada: ", (opcao) => {
    opcaoFormatada = parseInt(opcao);

    switch (opcaoFormatada) {
      case 1:
        atualizarNome(i);
        break;
      case 2:
        atualizarTelefone(i);
        break;
      case 3:
        atualizarEmail(i);
        break;
      case 4:
        exibirMenu();
        break;
      default:
        console.log("\nInforme uma opção válida.");
    }
  });
}

module.exports = atualizarDetalhes;
