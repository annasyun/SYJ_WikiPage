import React, { useEffect, useState } from "react";
import { getWikiAxios } from "../../api/wiki";
import WikiList from "../../components/WikiList";
import Pagination from "../../components/Pagination/Pagination";
import { WikiUl } from "./styled";

const Wiki = () => {
  const [wikiList, setWikiList] = useState("");
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const getWiki = async () => {
    const res = await getWikiAxios();
    setWikiList(res);
  };
  console.log("wikiList", wikiList);

  useEffect(() => {
    getWiki();
  }, []);

  if (!wikiList) {
    // null or undefined 체크
    return null; // 렌더링하지 않음
  }

  return (
    <>
      <WikiUl>
        {wikiList.slice(offset, offset + limit).map((item) => {
          return (
            <>
              <WikiList key={item.id} id={item.id} title={item.title} />
            </>
          );
        })}
      </WikiUl>
      <Pagination
        total={wikiList.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default Wiki;
