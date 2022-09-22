import React, { useCallback, useState, useEffect } from "react";
import uuid from "react-uuid";
import { db, auth } from "../../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ref, set } from "firebase/database";
import { toast } from "react-toastify";

interface iTask {
  title: string;
  id: string;
  description: string;
  duration: string;
}

const HomePage: React.FC = () => {
  const [userTasks, setUserTasks] = useState<iTask[]>([]);
  const [tasks, setTasks] = useState({} as iTask);
  const [userId, setUserId] = useState<string>("");

  const refDb = ref(db, "tasks/" + userId);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        toast.error("Você precisa estar logado para acessar essa página!");
      }
    });
  }, []);

  const addNewTask = useCallback(() => {
    set(refDb, {
      userTasks,
    })
      .then(() => {
        toast.success("Tarefa enviada com sucesso!");
        setUserTasks([]);
        setTasks({} as iTask);
      })
      .catch(() => {
        toast.error("Erro ao adicionar tarefa!");
      });
  }, [refDb, userTasks]);

  return (
    <div>
      <div>
        <label htmlFor="tarefas">Tarefas</label>
        <input
          type="text"
          placeholder="Digite sua tarefa"
          value={tasks?.title}
          onChange={(e) =>
            setTasks({ ...tasks, title: e.target.value, id: uuid() })
          }
        />
        <input
          type="text"
          placeholder="Digite a descrição das tarefas"
          onChange={(e) => setTasks({ ...tasks, description: e.target.value })}
          value={tasks?.description}
        />
        <input
          type="text"
          placeholder="Digite a duração da tarefa"
          onChange={(e) => setTasks({ ...tasks, duration: e.target.value })}
          value={tasks?.duration}
        />
      </div>
      <button onClick={() => addNewTask()} disabled={!userTasks.length}>
        Enviar
      </button>
      <button
        onClick={() => setUserTasks((prevState) => [...prevState, tasks])}
      >
        Adicionar
      </button>
    </div>
  );
};

export default HomePage;
