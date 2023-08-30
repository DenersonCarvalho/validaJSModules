export function obterConteudoCampos() {
    const nomeDeUsuario = document.getElementById('loginInput').value;
    const senha = document.getElementById('passwordInput').value;
    return { usuario: nomeDeUsuario, senha: senha };
  }
  