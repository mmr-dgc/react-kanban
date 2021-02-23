function ContentLabel(props) {
  const style = {
    fontSize: "12px"
  };

  return (
      <span style={style}>{props.content}</span>
  );
}

export default ContentLabel;
