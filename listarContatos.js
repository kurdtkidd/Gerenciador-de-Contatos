const contatos = require("./contatos");
const listagemContatos = require("./listagemContatos");

function listarContatos(exibirMenu) {
  listagemContatos(exibirMenu, contatos);
}

module.exports = listarContatos;
