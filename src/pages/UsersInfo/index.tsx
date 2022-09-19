import React, { useState } from "react";
import { firestore } from "../../services/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

interface iUser {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  cep: string;
}

const UsersInfo: React.FC = () => {
  const [user, setUser] = useState({} as iUser);
  const [usersInfo, setUsersInfo] = useState<iUser[]>([]);

  const docRef = collection(firestore, "users");

  const handleAddUser = async (user: iUser) => {
    try {
      await addDoc(docRef, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        city: user.city,
        cep: user.cep,
      });
      toast.success("Usuário adicionado com sucesso!");
    } catch (e) {
      console.log("erro", e);
      toast.error("Erro ao adicionar usuário!");
    }
  };

  const handleGetUsersById = async () => {
    const docSnap = await getDocs(docRef);
    docSnap.forEach((doc) => {
      setUsersInfo((prevState) => [...prevState, doc.data() as iUser]);
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          value={user.firstName}
        />
        <input
          type="text"
          placeholder="Digite seu sobrenome"
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          value={user.lastName}
        />
        <input
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          value={user.email}
        />
        <input
          type="text"
          placeholder="Digite sua cidade"
          onChange={(e) => setUser({ ...user, city: e.target.value })}
          value={user.city}
        />
        <input
          type="text"
          placeholder="Digite seu CEP"
          onChange={(e) => setUser({ ...user, cep: e.target.value })}
          value={user.cep}
        />
      </div>
      <button onClick={() => handleAddUser(user)}>Enviar</button>

      <h1>Listando os dados com o firestore</h1>
      <button onClick={() => handleGetUsersById()}>Listar</button>
      <div>
        {usersInfo.map((user) => (
          <div key={user.email} style={{ marginBottom: "10px" }}>
            <p>Nome: {user.firstName}</p>
            <p>Sobrenome: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Cidade: {user.city}</p>
            <p>CEP: {user.cep}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersInfo;
