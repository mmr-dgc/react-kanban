function SantenButton(props) {

  const style = {
    marginLeft: "auto",
    color: "#333333"
  };

  return (
    <a type="submit" name="action" className="santen" style={style} onClick={props.onClick}>{props.label}</a>
  );
}

export default SantenButton;
