import Wiki from "../Wiki/Wiki";
import { useState } from "react";
import useInput from "../../hooks/useInput";

const Main = () => {
  const [viewModal, setViewModal] = useState(false);
  const [modalTitle] = useInput("");
  const [modalContent] = useInput("");

  const handleViewModal = () => {
    setViewModal(true);
  };

  const handleSave = () => {
    // 입력된 제목과 내용을 서버에 저장하는 로직
    // ...

    // 추가 입력창 숨기기
    setViewModal(false);
    // 입력된 제목과 내용 초기화
    modalTitle.setValue("");
    modalContent.setValue("");
  };

  return (
    <>
      Main
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
