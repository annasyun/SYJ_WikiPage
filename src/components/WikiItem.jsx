import { useNavigate, useParams } from "react-router-dom";
import { deleteWikiAxios, getWikiAxios, updateWikiAxios } from "../api/wiki";
import { useState, useEffect } from "react";
import ItemTitle from "./ItemTitle";
import ItemContent from "./ItemContent";
import useInput from "../hooks/useInput";
import styled, { css } from "styled-components";

const WikiItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [listItem, setListItem] = useState(null);

  const findListItem = async () => {
    const wikiList = await getWikiAxios();
    const foundListItem = wikiList.find((item) => item.id === Number(id));
    setListItem(foundListItem);
  };
  const [editTitle] = useInput("");
  const [editContent] = useInput("");
  const [editable, setEditable] = useState(false);

  const handleEdit = () => {
    setEditable(!editable);
  };
  console.log(editable);

  useEffect(() => {
    findListItem();
  }, [id]);

  useEffect(() => {
    if (listItem) {
      editTitle.setValue(listItem.title);
      editContent.setValue(listItem.content);
    }
  }, [listItem]);

  if (!listItem) {
    return <div>Loading...</div>;
  }

  const updateWiki = async () => {
    await updateWikiAxios(id, {
      title: editTitle.value,
      content: editContent.value,
    });
    const updatedItem = {
      ...listItem,
      title: editTitle.value,
      content: editContent.value,
    };
    setListItem(updatedItem);
    setEditable(false);
    editTitle.setValue("");
    editContent.setValue("");
  };
  const cancelUpdate = () => {
    setEditable(!editable);
    editTitle.setValue("");
    editContent.setValue("");
  };

  const handleDelete = async () => {
    await deleteWikiAxios(id);
    navigate("/");
  };
  const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    input {
      display: block;
      width: 60rem;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      color: #333;

      &:focus {
        outline: none;
        border-color: #0074d9;
      }
    }

    textarea {
      display: block;
      width: 60rem;
      height: 70vh;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      color: #333;

      &:focus {
        outline: none;
        border-color: #0074d9;
      }
    }

    button {
      display: inline-block;
      margin-top: 10px;
      margin-right: 10px;
      padding: 10px 20px;
      background-color: #0074d9;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        background-color: #0063b1;
      }
    }
  `;

  return (
    <div>
      {editable ? (
        <>
          <input
            type="text"
            value={editTitle.value}
            onChange={editTitle.onchange}
          />
          <textarea
            value={editContent.value}
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={editContent.onchange}
          ></textarea>
          <button type="button" onClick={updateWiki}>
            저장
          </button>
          <button type="button" onClick={cancelUpdate}>
            취소
          </button>
        </>
      ) : (
        <>
          <ItemContainer>
            <ItemTitle id={listItem.id} title={listItem.title} />
            <ItemContent content={listItem.content} />
            <div>
              <button type="button" onClick={handleEdit}>
                수정
              </button>
              <button onClick={handleDelete}>삭제</button>
              <button
                onClick={() => {
                  navigate(-1);
                }}
              >
                뒤로가기
              </button>
            </div>
          </ItemContainer>
        </>
      )}
    </div>
  );
};

export default WikiItem;
