import authService from "../services/authService";
import { createContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    function login(email, password) {
        const status = authService.login(email, password);
        if (status) {
            setIsLoggedIn(true);
            setUser(email);
            return true;
        } else {
            setIsLoggedIn(false);
            return false;
        }
    }

    function signUp(email, password) {
        const isExists = authService.isUserExists(email);
        if (!isExists) {
            authService.signup(email, password);
            return true;
        }
        return false;
    }

    function logout() {
        setIsLoggedIn(false);
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{
            user,
            isLoggedIn,
            login,
            logout,
            signUp
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
export { AuthProvider };
