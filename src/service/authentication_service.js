export default class AuthenticationService {
  constructor(token) {
    this.token = token;
  }

  createToken() {
    // code
  }

  refreshToken(newtoken) {
    this.token = newtoken
    // code
  }

  deleteToken() {
    // code
  }
}
