/*  warningLogin *
 * auth/wrong-password
 * auth/user-not-found
 * auth/invalid-email
 */

function warningLogin(errorCode) {
  switch (errorCode) {
    case 'auth/wrong-password':
      return 'Senha incorreta';
    case 'auth/user-not-found':
      return 'Usuário não encontrado';
    case 'auth/invalid-email':
      return 'E-mail inválido'
    default:
      return errorCode;
  }
}
/*  warningCreateAccount *
 * auth/invalid-email
 * auth/weak-password
 * auth/email-already-in-use'
 */

function warningCreateAccount(errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'E-mail inválido';
    case 'auth/weak-password':
      return 'Senha fraca, mínimo 6 digitos';
    case 'auth/email-already-in-use':
      return 'E-mail já cadastrado';
    default:
      return errorCode;
  }
}
export { warningLogin, warningCreateAccount }