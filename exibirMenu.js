const rl = require('./rl');
const contatos = require('./contatos');
const adicionarContato = require('./adicionarContato');
const listarContatos = require('./listarContatos')
const atualizarContato = require('./atualizarContato');
const removerContato = require('./removerContato');

function exibirMenu() {
  console.log("\n------- GERENCIADOR DE CONTATOS -------\n");
  console.log("1 - ADICIONAR CONTATO");
  console.log("2 - LISTAR CONTATOS");
  console.log("3 - ATUALIZAR CONTATO");
  console.log("4 - REMOVER CONTATO");
  console.log("5 - SAIR");

  rl.question("Informe a opção desejada: ", (opcao) => {
    opcaoFormatada = parseInt(opcao);

    switch (opcaoFormatada) {
      case 1:
        adicionarContato(exibirMenu, contatos);
        break;
      case 2:
        listarContatos(exibirMenu);
        break;
      case 3:
        atualizarContato(contatos);
        break;
      case 4:
        removerContato(exibirMenu, contatos);
        break;
      case 5:
        console.log("\nSaindo do sistema...");
        rl.close();
        break;
      default:
        console.log("\nInforme uma opção válida.");
        exibirMenu();
    }
  });
}

module.exports = exibirMenu;
