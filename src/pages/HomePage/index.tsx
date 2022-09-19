import React, { useCallback, useState, useEffect } from "react";
import { db, auth } from "../../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ref, set } from "firebase/database";
import { toast } from "react-toastify";

interface iTaskProps {
  title: string[];
}

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<iTaskProps[]>([]);
  const [newTask, setNewTask] = useState<string>("");
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

  const handleAddTask = (title: string) => {
    setTasks((prevState) => [...prevState, { title: [title] }]);
  };

  const AddNewTask = useCallback(() => {
    set(refDb, {
      tasks,
    })
      .then(() => {
        toast.success("Tarefa adicionada com sucesso!");
      })
      .catch(() => {
        toast.error("Erro ao adicionar tarefa!");
      });
  }, [tasks, refDb]);

  return (
    <div>
      <div>
        <label htmlFor="tarefas">Tarefas</label>
        <input
          type="text"
          placeholder="Digite suas tarefas"
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
      <button onClick={() => handleAddTask(newTask)}>Adicionar a lista</button>
      <button onClick={() => AddNewTask()}>Enviar</button>
    </div>
  );
};

export default HomePage;
