import Wiki from "../Wiki/Wiki";
import { useState } from "react";
import useInput from "../../hooks/useInput";
import { postWikiAxios } from "../../api/wiki";
import { Header, WikiTitle } from "./styled";

const Main = () => {
  const [viewModal, setViewModal] = useState(false);
  const [modalTitle] = useInput("");
  const [modalContent] = useInput("");

  const handleViewModal = () => {
    setViewModal(true);
  };

  const handleSave = async () => {
    const postItem = await postWikiAxios({
      title: modalTitle.value,
      content: modalContent.value,
    });
    setViewModal(!viewModal);
    // 입력된 제목과 내용 초기화
    modalTitle.setValue("");
    modalContent.setValue("");
  };

  return (
    <>
      <Header>
        <WikiTitle>위키백과</WikiTitle>
      </Header>
      <Wiki />
      <button onClick={handleViewModal}>add</button>
      {viewModal && (
        <div>
          <input
            type="text"
            value={modalTitle.value}
            onChange={modalTitle.onchange}
          />
          <textarea
            value={modalContent.value}
            onChange={modalContent.onchange}
          ></textarea>
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </>
  );
};

export default Main;
