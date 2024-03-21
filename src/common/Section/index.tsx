import { ReactNode } from "react";
import { StyledSection, Header, Title, Body } from "./styled";

interface SectionProps {
  title: ReactNode;
  body: ReactNode;
  extraHeaderContent?: ReactNode;
}

const Section = ({ title, body, extraHeaderContent }: SectionProps) => (

  <StyledSection>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <Body>
      {body}
    </Body>
  </StyledSection>
);

export default Section;