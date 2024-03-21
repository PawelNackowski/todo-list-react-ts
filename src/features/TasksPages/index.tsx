import Form from "./Form";
import Buttons from "./Buttons";
import TaskList from "./TaskList";
import { Container } from "../../styled";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Search from "./Search";
import ExampleTask from "./ExampleTask";
import Footer from "../../common/Footer";

function TasksPages() {

  return (
    <Container>
      <Header title="Lista zadań" /> 
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />} 
        extraHeaderContent={<ExampleTask/>}       
      />

      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
      <Footer />
    </Container>
  );
}

export default TasksPages;