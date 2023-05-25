import { ChangeEvent, useState } from "react";
import { FC } from "react";
import "./App.css";
import Task from "./Task";

export type taskListType = {
  taskName: string;
  workDay: number;
};

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setworkDay] = useState<number>(0);
  const [taskList, settaskList] = useState<taskListType[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setworkDay(Number(event.target.value));
    }
  };

  const addNewTask = (): void => {
    const newTask = { taskName: task, workDay: workDay };
    settaskList([...taskList, newTask]);
    setTask("");
    setworkDay(0);
  };

  const deleteTask = (nameToDelete: string): void => {
    settaskList(
      taskList.filter((task) => {
        return task.taskName !== nameToDelete;
      })
    );
  };
  console.log(taskList);

  return (
    <>
      <div className="App">
        <div>
          <input
            value={task}
            type="text"
            placeholder="Hedef ekleyiniz."
            name="task"
            onChange={handleChange}
          />
          <input
            value={workDay}
            type="number"
            placeholder="Kaç günde tamamlamalısınız?"
            name="workDay"
            onChange={handleChange}
          />
        </div>
        <div>
          {taskList.map((task: taskListType, index: number) => {
            return <Task key={index} task={task} deleteTask={deleteTask} />;
          })}
        </div>
      </div>
      <button onClick={addNewTask}>Yeni hedef ekle.</button>
    </>
  );
};

export default App;
