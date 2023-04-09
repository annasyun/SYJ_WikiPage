import Wiki from "../Wiki/Wiki";
import { useState } from "react";
import useInput from "../../hooks/useInput";
import { postWikiAxios } from "../../api/wiki";
import {
  Header,
  WikiTitle,
  AddBtn,
  ModalContainer,
  ModalContent,
} from "./styled";

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
  const cancelSave = async () => {
    setViewModal(!viewModal);
    modalTitle.setValue("");
    modalContent.setValue("");
  };

  return (
    <>
      <Header>
        <WikiTitle>위키백과</WikiTitle>
      </Header>
      <AddBtn onClick={handleViewModal}>위키 페이지 추가</AddBtn>
      <Wiki />
      {viewModal && (
        <ModalContainer>
          <ModalContent>
            <input
              type="text"
              value={modalTitle.value}
              onChange={modalTitle.onchange}
              placeholder={"제목을 입력하세요."}
            />
            <textarea
              value={modalContent.value}
              onChange={modalContent.onchange}
              placeholder={"내용을 입력하세요."}
            ></textarea>
            <button onClick={handleSave}>저장</button>
            <button onClick={cancelSave}>취소</button>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default Main;
