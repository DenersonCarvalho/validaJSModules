import { obterConteudoCampos } from './formularioContent.js';
import { validarCredenciais } from './validarCredenciais.js';

document.getElementById('submitButton').addEventListener('click', () => {
  const { usuario, senha } = obterConteudoCampos();
  const mensagemErroElemento = document.getElementById('errorMessage');

  if (validarCredenciais(usuario, senha)) {
    mensagemErroElemento.textContent = '';
    alert(`Bem vindo ${usuario}, login realizado com sucesso!!`);
  } else {
    mensagemErroElemento.textContent = 'Falha ao realizar o login. Tente novamente.';
  }
});
