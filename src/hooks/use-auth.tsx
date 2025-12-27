import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("sT4fF3n"); // your stored access token
    if (!token) {
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }

    fetch("https://www.link-expert.sa/api/portal/user", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // send token in header
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn) {
          // assuming API returns { loggedIn: true/false }
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch((err) => {
        console.error("Auth check failed:", err);
        setIsAuthenticated(false);
      })
      .finally(() => setLoading(false));
  }, []);

  return { isAuthenticated, loading };
};

export default useAuth;
