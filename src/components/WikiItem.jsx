import { useParams } from "react-router-dom";
import { getWikiAxios } from "../api/wiki";
import { useState, useEffect } from "react";
import ItemTitle from "./ItemTitle";
import ItemContent from "./ItemContent";
import EditWikiItem from "./EditWikiItem";

const WikiItem = () => {
  const { id } = useParams();
  const [listItem, setListItem] = useState(null);

  const findListItem = async () => {
    const wikiList = await getWikiAxios();
    const foundListItem = wikiList.find((item) => item.id === Number(id));
    setListItem(foundListItem);
  };

  const [editable, setEditable] = useState(false);
  const handleEdit = () => {
    setEditable(!editable);
  };
  console.log(editable);

  useEffect(() => {
    findListItem();
  }, [id]);

  if (!listItem) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {editable ? (
        <>
          <EditWikiItem
            id={listItem.id}
            title={listItem.title}
            content={listItem.content}
          />
          <button type="button" onClick={handleEdit}>
            수정
          </button>
        </>
      ) : (
        <>
          <ItemTitle id={listItem.id} title={listItem.title} />
          <ItemContent content={listItem.content} />
          <button type="button" onClick={handleEdit}>
            수정
          </button>
        </>
      )}
    </div>
  );
};

export default WikiItem;
