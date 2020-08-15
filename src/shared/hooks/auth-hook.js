import { useState, useCallback, useEffect } from "react";

let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(false);
  const [tokenExp, setTokenExp] = useState();
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token, expDate) => {
    setToken(token);
    setUserId(uid);

    const tokenExp = expDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExp(tokenExp);

    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExp.toISOString(),
      })
    );

    console.log(tokenExp);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExp(null);
    setUserId(null);
    localStorage.removeItem("userData");
  });

  useEffect(() => {
    if (token && tokenExp) {
      const remainingTime = tokenExp.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExp]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);
};
