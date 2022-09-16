import React, { useCallback, useState } from "react";
import { auth } from "../../services/firebase";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = useCallback(() => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Usuário cadastrado com sucesso!");
        window.location.href = "/";
      })
      .catch(() => {
        toast.error("Erro ao cadastrar usuário!");
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
      <button onClick={handleRegister}>Cadastrar</button>
      <Link to="/">Já tem conta? </Link>
    </div>
  );
};

export default RegisterPage;
