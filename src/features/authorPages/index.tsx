import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Container } from "../../styled";

const Author = () => (
  <Container>
    <Header title="O Autorze" />
    <Section
      title="Paweł Nackowski"
      body={
        <>
          Moją pasją jest fotografia, której staram sie poświęcać jak najwięcej czasu. <br />
          Lubię grać na gitarze, słuchać dobrej muzyki, majserkować i jak starczy czasu obejrzeć dobry film.<br />
          Ta <strong>Lista zadań</strong> stworzona jest z myśłą, by ułatwiła Tobie życie. <strong>Żartuję</strong>,<br />
          jest to projekt z kursu <strong>You</strong>Code.
        </>
      }
    />
    <Footer />
  </Container>
);

export default Author;