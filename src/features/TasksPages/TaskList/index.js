import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { List, Item, Content, Button, StyledLink } from "./styled";
import { toggleTaskDone, removeTask, selectHideDone, selectTaskByQuery } from "../Tasks/tasksSlice";
import { toTask } from "../../../routes";

const TaskList = () => {
  const location = useLocation();
  const serchParams = new URLSearchParams(location.search);
  const query = serchParams.get("szukaj");

  const tasks = useSelector(state => selectTaskByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hiden={task.done && hideDone}
        >
          <Button
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? " ✔" : ""}
          </Button>
          <Content done={task.done}>
            <StyledLink to={toTask({ id: task.id})}>{task.content}</StyledLink>
          </Content>
          <Button
            remove
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </Button>
        </Item>
      ))}
    </List>
  )
};

export default TaskList;