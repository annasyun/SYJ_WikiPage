import { useState } from "react";
import ListItem from "./ListItem";
import Pagination from "./Pagination";

const WikiList = ({ wikiList }) => {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  if (!wikiList) {
    // null or undefined 체크
    return null; // 렌더링하지 않음
  }

  return (
    <ul>
      {wikiList.slice(offset, offset + limit).map((v) => {
        return (
          <ListItem key={v.id} id={v.id} title={v.title} content={v.content} />
        );
      })}
      <Pagination
        total={wikiList.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </ul>
  );
};

export default WikiList;
