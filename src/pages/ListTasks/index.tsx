import React, { useEffect, useState } from "react";
import { db, auth } from "../../services/firebase";
import { ref, onValue } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";

const ListTasks: React.FC = () => {
  const [userId, setUserId] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    onValue(ref(db, "tasks/" + userId), (snapshot) => {
      const data = snapshot.val().tasks;
      setTasks(data);
    });
  }, [userId]);

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
            <li>{task?.title}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ListTasks;
