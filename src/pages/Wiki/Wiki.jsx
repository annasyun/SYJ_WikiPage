import React, { useEffect, useState } from "react";
import Content from "../../components/Content";
import Title from "../../components/Title";
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
    <div>
      <WikiList wikiList={wikiList} />
    </div>
  );
};

export default Wiki;
