function RemoveButton(props) {

  const style = {
    background: "rgba(0,0,0,0.0)",
    color: "#333333"
  };

  return (
    <a type="submit" name="action" onClick={props.onClick} style={style}>
      <i class="tiny material-icons">remove</i>
    </a>
  );
}

export default RemoveButton;
