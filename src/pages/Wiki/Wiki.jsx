import React from "react";
import Content from "../../components/Content";
import Title from "../../components/Title";
import { getWikiAxios } from "../../api/wiki";

const Wiki = () => {
  const getWiki = async () => {
    const res = await getWikiAxios();
    console.log(res);
  };
  getWiki();

  return (
    <div>
      <Title />
      <Content />
    </div>
  );
};

export default Wiki;
