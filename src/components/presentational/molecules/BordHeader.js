import React, {Component} from 'react';
import BordHeaderTitleLabel from '../atoms/BordHeaderTitleLabel';
import SantenButton from '../atoms/SantenButton';

class BordHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShown: false
    }
  }

  Open = () => {
    const newShown = !this.state.isShown
    this.setState({
      isShown: newShown
    });

    // document.body.addEventListener('click', e => {
    //   this.setState({
    //     isShown: false
    //   });
    //   document.body.removeEventListener('click', documentClickHandler)
    // })
  };

  Close = () => {
    this.setState({
      isShown: false
    });
  };

  render() {

    const style = {
      display: "flex",
      marginTop: "5px",
      position: "relative"
    }

    const popupStyle = {
      position: "absolute",
      top: "20px",
      right: "-184px",
      zIndex: "2",

      width: "200px",
      padding: "10px",
      backgroundColor: "#fff",
      borderRadius: "3px",
      color: "#333333",
      fontSize: "14px",

      transform: "scale(0)",
      transformOrigin: "top left",
      transition: "transform 0.05s"
    }

    return (
      <div className="bordHeader" style={style}>
        <BordHeaderTitleLabel title={this.props.title} />
        <div className="card" style={this.state.isShown ? {...popupStyle, transform: "scale(1)"} : popupStyle}>
          <div style={{fontWeight: "bolder", textAlign: "center", marginBottom: "5px"}}>リスト操作</div>
          <div><a>カードを追加</a></div>
          <div><a>リストをコピー</a></div>
          <div><a>リストを全て移動</a></div>
          <button className="btn waves-effect waves-light" onClick={this.Close.bind(this)}>close menu</button>
        </div>
        <SantenButton label="…" onClick={this.Open.bind(this)}/>
      </div>
    )
  }
}

export default BordHeader;
