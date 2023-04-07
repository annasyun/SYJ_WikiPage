import ListItem from "./ListItem";

const WikiList = ({ wikiList }) => {
  if (!wikiList) {
    // null or undefined 체크
    return null; // 렌더링하지 않음
  }
  return (
    <ul>
      {wikiList.map((v) => {
        return <ListItem key={v.id} title={v.title} content={v.content} />;
      })}
    </ul>
  );
};

export default WikiList;
