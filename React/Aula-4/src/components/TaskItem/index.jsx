function TaskItem(props) {
    console.log(props.children);
    function onTaskComplete() {
      alert(props.children.titulo)
    }
    return (
      <>
        <h3>{props.children.titulo}</h3>
        <span onClick={onTaskComplete}>{props.children.concluido ? "Concluído" : "Pendente"}</span>
      </>
    );
  }

export default TaskItem;
