export class Auth {
  public loggedIn = false;

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout((() => {
        resolve(this.loggedIn);
      }), 800);
    });
  }
}
