import storageService from "./storageService";

class AuthService {
  login(email, password) {
    const data = storageService.getData();
    const users = data["users"];
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.email === email && user.password === password) return true;
    }
    return false;
  }

  signup(email, password) {
    const data = storageService.getData();
    const newUser = {
      email: email,
      password: password,
    };
    data.users.push(newUser);
    storageService.saveData(data);
    return false;
  }

  isUserExists(email) {
    const data = storageService.getData();
    const users = data["users"];
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) return true;
    }
    return false;
  }
}

const authService = new AuthService();
export default authService;
