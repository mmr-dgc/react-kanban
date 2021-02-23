function BordHeaderTitleLabel(props) {

  const style = {
    fontWeight: "bolder",
    color: "#333333"
  };

  return (
    <div>
      <span className="bordTitle" style={style}>{props.title}</span>
    </div>
  );
}

export default BordHeaderTitleLabel;
