const Navbar = (props) => {

  const style = {
    background: "rgba(0,0,0,0.1)",
    height: "48px",
  }
  
  return (
    <nav className="nav-wrapper" style={style}>
      <div className="container">
        <a className="brand-logo center" style={{fontSize: "24px", lineHeight: "48px"}}>kanban</a>
      </div>
    </nav>
  )
}

export default Navbar;