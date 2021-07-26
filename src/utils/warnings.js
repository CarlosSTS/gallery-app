/*  warningLogin *
 * auth/wrong-password
 * auth/user-not-found
 * auth/invalid-email
 * auth/unknown
 */

function warningAccount(errorCode) {
  switch (errorCode) {
    case 'auth/wrong-password':
      return 'Senha incorreta';
    case 'auth/user-not-found':
      return 'Usuário não encontrado';
    case 'auth/invalid-email':
      return 'E-mail inválido';
    case 'auth/too-many-requests':
      return 'Limite de requisições atingido';
    case 'auth/weak-password':
      return 'Senha fraca, mínimo 6 digitos';
    case 'auth/email-already-in-use':
      return 'E-mail já cadastrado';
    case'auth/unknown':
      return 'Erro de autenticação, tente novamente';
    default:
      return errorCode;
  }
}
/*  warningCreateAccount *
 * auth/invalid-email
 * auth/weak-password
 * auth/email-already-in-use'
 */
export { warningAccount }