import React, { useEffect, useState } from "react";
import { db, auth } from "../../services/firebase";
import { ref, child, get } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";

const ListTasks: React.FC = () => {
  const [userId, setUserId] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const dbRef = ref(db);

  useEffect(() => {
    get(child(dbRef, `tasks/${userId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setTasks(snapshot.val().userTasks);
        } else {
          toast.error("Não há tarefas cadastradas!");
        }
      })
      .catch(() => {
        toast.error("Erro ao listar tarefas!");
      });
  }, [dbRef, userId]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        toast.error("Você precisa estar logado para acessar essa página!");
      }
    });
  }, []);

  return (
    <div>
      <div>
        <h2>{`Tarefas do usuário: ${userId}`}</h2>
        <ol>
          {tasks?.map((task: any) => (
            <div style={{ marginBottom: "20px" }}>
              <li>{task?.title}</li>
              <li>{task?.description}</li>
              <li>{task?.duration}</li>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ListTasks;
