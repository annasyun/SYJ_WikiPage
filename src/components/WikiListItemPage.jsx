import { useParams } from "react-router-dom";
import { getWikiAxios } from "../api/wiki";
import { useState, useEffect } from "react";
import ItemTitle from "./ItemTitle";
import ItemContent from "./ItemContent";

const WikiListItemPage = () => {
  const { id } = useParams();
  const [listItem, setListItem] = useState(null);

  const fetchListItem = async () => {
    const wikiList = await getWikiAxios();
    const foundListItem = wikiList.find((item) => item.id === Number(id));
    setListItem(foundListItem);
  };

  useEffect(() => {
    fetchListItem();
  }, [id]);

  if (!listItem) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ItemTitle id={listItem.id} title={listItem.title} />
      <ItemContent content={listItem.content} />
    </div>
  );
};

export default WikiListItemPage;
