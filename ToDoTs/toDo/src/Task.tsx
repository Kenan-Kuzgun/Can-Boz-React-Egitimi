import { taskListType } from "./App";

type PropsType = {
  task: taskListType;
  deleteTask(nameToDelete: string): void;
};

function Task({ task, deleteTask }: PropsType) {
  return (
    <div className="taskItem">
      <p>{task.taskName}</p>
      <p>{task.workDay}</p>
      <button onClick={() => deleteTask(task.taskName)}>Sil</button>
    </div>
  );
}

export default Task;
