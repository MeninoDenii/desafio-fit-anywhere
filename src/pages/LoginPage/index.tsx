import React, { useCallback, useState } from "react";
import { auth } from "../../services/firebase";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(() => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Usuário logado com sucesso!");
        window.location.href = "/home";
      })
      .catch(() => {
        toast.error("Erro ao logar usuário!");
      });
  }, [email, password]);

  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        placeholder="digite seu e-mail"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        placeholder="Digite sua senha"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleLogin}>Entrar</button>
      <Link to="/register">Cadastre-se</Link>
    </div>
  );
};

export default LoginPage;
