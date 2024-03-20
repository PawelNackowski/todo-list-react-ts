import { useDispatch, useSelector } from "react-redux"
import { fetchExampleTasks, selectLoading } from "../../TasksPages/Tasks/tasksSlice";
import { Button, Wrapper } from "../Buttons/styled"
import Loader from "./Loader";


const ExampleTask = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Wrapper>
      <Button
        onClick={() => dispatch(fetchExampleTasks())} disabled={loading}
      >
        {loading
          ? <Loader />
          : "Pobierz przykładowe zadania"
        }

      </Button>
    </Wrapper>
  )
}

export default ExampleTask;