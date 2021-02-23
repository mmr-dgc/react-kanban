function AddListButton(props) {

  return (
    <button 
      class="btn waves-effect waves-light" 
      type="submit" 
      name="action" 
      onClick={props.onClick}
      style={{width:"272px", textAlign: "left", background: "rgba(200,200,200,0.2)", marginLeft:"3px"}}
    >
      {props.label}
      <i class="material-icons right">add</i>
    </button>
  );
}

export default AddListButton;
