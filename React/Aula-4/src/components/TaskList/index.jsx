import TaskItem from "../TaskItem";
function TaskList() {
  const tasks = [
    { titulo: "Lavar Louças", concluido: true },
    { titulo: "Varrer Casa", concluido: false },
    { titulo: "Cozinhar", concluido: true },
    { titulo: "Levar cachorro pra passear", concluido: false },
  ];
  
  return (
    <div className="taskList">
      <h2>Tasks</h2>
      {tasks.map((task, i) => {
        return (
          <div
            className={`task ${task.concluido ? "concluido" : "pendente"}`}
            key={i}
          >
            <TaskItem>{task}</TaskItem>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
