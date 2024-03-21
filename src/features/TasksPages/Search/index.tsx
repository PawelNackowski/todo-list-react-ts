import { useHistory, useLocation } from "react-router-dom";
import { Input } from "../Tasks/Input/styled";
import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";

const Search = () => {
  const history = useHistory();
  const location = useLocation();

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchQueryParamName, target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadanie"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};

export default Search;