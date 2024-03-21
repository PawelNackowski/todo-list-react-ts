import { StyledList, StyledNavLink } from "./styled"

const Navigation = () => {
  return(
    <nav>
      <StyledList>
        <li>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </li>
      </StyledList>
    </nav>
  )
}

export default Navigation;