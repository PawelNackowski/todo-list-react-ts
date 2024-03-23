import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";
import Footer from "../../../../common/Footer";
import Header from "../../../../common/Header";
import Section from "../../../../common/Section";
import { Container } from "../../../../styled";
import { Task } from "../../../types";
import { RootState } from "../../../../store";


const TaskPages = () => {
  const { id } = useParams<{ id: string }>();
  const task = useSelector((state: RootState) => getTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania"}
        body={task && (
          <>
            <strong>Ukończono:</strong>
            {task.done ? "Tak" : "Nie"}
          </>
        )}
      />
      <Footer />
    </Container>
  )
        };