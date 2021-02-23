function CardCreateContainer(props) {

  const style = {
    width: "300px",
    height: "800px",
    margin: "10px",
    padding: "10px",
    borderRadius: "3px 3px 3px 3px",
    background: "rgba(0,0,0,0.1)",
    display: "inline-block",
    verticalAlign: "top"
  };

  return (
    <div className="cardCreateContainer" style={style}>
      <h6>タイトル</h6>
      <input type="text" name="name" size="30" maxlength="20"></input>
      <h6>概要</h6>
      <input type="text" name="name" size="30" maxlength="20"></input>
      <button>ボタン</button>
    </div>
  );
}

export default CardCreateContainer;
