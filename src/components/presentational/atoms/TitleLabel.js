function TitleLabel(props) {

  const style = {
    fontSize: "16px"
  };

  return (
      <p className="card-title" style={style}>{props.title}</p>
  );
}
export default TitleLabel;
