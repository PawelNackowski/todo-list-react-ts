import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { List, Item, Content, Button, StyledLink } from "./styled";
import { toggleTaskDone, removeTask, selectHideDone, selectTaskByQuery} from "../Tasks/tasksSlice";
import { toTask } from "../../../routes";
import { Task} from "../../../types";

const TaskList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("szukaj");

  const tasks = useSelector(state => selectTaskByQuery(state, query));
  const hideDone = useSelector(state => selectHideDone(state));

  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map((task: Task) => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? " ✔" : ""}
          </Button>
          <Content done={!!task.done}>
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