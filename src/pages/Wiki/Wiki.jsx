import React, { useEffect, useState } from "react";
import { getWikiAxios } from "../../api/wiki";
import WikiList from "../../components/WikiList";

const Wiki = () => {
  const [wikiList, setWikiList] = useState("");

  const getWiki = async () => {
    const res = await getWikiAxios();
    setWikiList(res);
  };
  console.log("wikiList", wikiList);

  useEffect(() => {
    getWiki();
  }, []);

  return (
    <>
      <WikiList wikiList={wikiList} />
    </>
  );
};

export default Wiki;
