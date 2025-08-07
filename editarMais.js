const rl = require('./rl');

function editarMais(i, exibirMenu, atualizarDetalhes) {
  rl.question(
    "\nVocê deseja alterar mais alguma informação? (S/N): ",
    (resposta) => {
      const respostaFormatada = resposta.toLowerCase();

      if (respostaFormatada === "s") {
        return atualizarDetalhes(i, exibirMenu);
      } else if (respostaFormatada === "n") {
        return exibirMenu();
      } else {
        console.log("\nInforme uma opção válida.");
        return editarMais(i, exibirMenu, atualizarDetalhes);
      }
    }
  );
}

module.exports = editarMais;