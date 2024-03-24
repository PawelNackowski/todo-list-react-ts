import { fetchExampleTasks, selectLoading } from "../Tasks/tasksSlice";
import { Button, Wrapper } from "../Buttons/styled"
import Loader from "./Loader";
import { useAppDispatch, useAppSelector } from "../../../hooks";


const ExampleTask = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);

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