import { useState } from "react";
import WikiListItem from "./WikiListItem";
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
    <>
      <ul>
        {wikiList.slice(offset, offset + limit).map((item) => {
          return <WikiListItem key={item.id} id={item.id} title={item.title} />;
        })}
      </ul>
      <Pagination
        total={wikiList.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default WikiList;
