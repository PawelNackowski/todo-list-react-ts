import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef, FormEventHandler } from "react"
import { StyledForm, Button } from "./styled";
import { addTasks } from "../Tasks/tasksSlice";
import { Input } from "../Tasks/Input/styled";
import { useAppDispatch } from "../../../hooks";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const focusInput = (inputRef: React.RefObject<HTMLInputElement>) => {
    inputRef.current!.focus();
  };

  const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") return

    dispatch(addTasks({
      content: newTaskContent.trim(),
      done: false,
      id: nanoid(),
    }));

    setNewTaskContent("");
    focusInput(inputRef);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button className="form__button">Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;