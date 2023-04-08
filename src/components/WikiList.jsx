import { Link } from "react-router-dom";
import ItemTitle from "./ItemTitle";

const WikiList = ({ id, title }) => {
  return (
    <li>
      <Link to={`/wiki/${id}`}>
        <ItemTitle title={title} />
      </Link>
    </li>
  );
};

export default WikiList;
