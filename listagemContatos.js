function listagemContatos(exibirMenu, contatos) {
  if (contatos.length === 0) {
    console.log("\nNão há contatos cadastrados.");
    return exibirMenu();
  }
  console.log("\n------- CONTATOS CADASTRADOS -------\n");
  contatos.forEach((contato, index) => {
    console.log(
      `\nÍndice: ${index + 1}\nNome: ${contato.nome}\nTelefone: ${
        contato.telefone
      }\nEmail: ${contato.email}`
    );
  });
}

module.exports = listagemContatos;
