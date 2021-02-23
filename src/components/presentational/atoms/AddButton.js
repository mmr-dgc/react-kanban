function AddButton(props) {

  return (
    <button class="btn waves-effect waves-light deep-purple lighten-3" type="submit" name="action" onClick={props.onClick}>{props.label}
      <i class="material-icons right">add</i>
    </button>
  );
}

export default AddButton;
