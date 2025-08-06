const rl = require('./rl');
const atualizarDetalhes = require('./atualizarDetalhes');
const exibirMenu = require('./exibirMenu');

function editarMais(i) {
  rl.question(
    "\nVocê deseja alterar mais alguma informação? (S/N): ",
    (resposta) => {
      const respostaFormatada = resposta.toLowerCase();

      if (respostaFormatada === "s") {
        return atualizarDetalhes(i);
      } else if (respostaFormatada === "n") {
        return exibirMenu();
      } else {
        console.log("\nInforme uma opção válida.");
        return editarMais(i);
      }
    }
  );
}

module.exports = editarMais;
