import { Link } from "react-router-dom";
import ItemTitle from "./ItemTitle";
import styled from "styled-components";

const WikiListItem = styled.li`
  font-size: 1.2rem;
  list-style: none;
  margin-bottom: 1rem;
  &:hover {
    background-color: #f2f2f2;
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const WikiList = ({ id, title }) => {
  return (
    <WikiListItem>
      <StyledLink to={`/wiki/${id}`}>
        <ItemTitle title={title} />
      </StyledLink>
    </WikiListItem>
  );
};

export default WikiList;
