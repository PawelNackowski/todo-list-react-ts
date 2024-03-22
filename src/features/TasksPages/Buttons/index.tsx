import { Wrapper, Button } from "./styled";
import {
  toggleHideDone,
  setAllDone,
  selectHideDone,
  selectAreEmptyTask,
  selectIsEveryTaskDone,
} from "../Tasks/tasksSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";

const Buttons = () => {
  const hideDone = useAppSelector(selectHideDone);
  const areTaskEmpty = useAppSelector(selectAreEmptyTask);
  const isEveryTaskDone = useAppSelector(selectIsEveryTaskDone);

  const dispatch = useAppDispatch();
  return (
    <Wrapper>
      {
        !areTaskEmpty && (
          <>
            <Button onClick={() => dispatch(toggleHideDone())}>
              {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
              onClick={() => dispatch(setAllDone())}
              disabled={isEveryTaskDone}
            >
              Ukończ wszystkie
            </Button>
          </>
        )
      }
    </Wrapper>
  );
}

export default Buttons;