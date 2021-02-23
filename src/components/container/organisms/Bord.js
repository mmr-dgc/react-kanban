import React, { Component } from 'react';
import BordHeader from '../../presentational/molecules/BordHeader';
import {TextForm} from '../../presentational/atoms/TextForm'
import AddButton from '../../presentational/atoms/AddButton'

class Bord extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textFormShowFlg: true
    }
  }

  changeFlg = () => {
    const newFlg = !this.state.textFormShowFlg
    this.setState({
      textFormShowFlg: newFlg
    });
  };

  render () {

    const style = {
      background: "rgba(200,200,200,0.2)",
      margin: "4px",
      marginTop: "8px",
      borderRadius: "3px 3px 3px 3px",
      display: "inline-block",
      verticalAlign: "top",
      padding: "8px",
      transition: "transform 0.05s"
    }

    return (
      <div className="bord" style={style}>
        <BordHeader title={this.props.title} />
        {this.props.children}
        <AddButton label={"カードを追加"} onClick={this.changeFlg.bind(this)}/>
        <div style={{ display: this.state.textFormShowFlg ? 'none' : '' }}>
          <TextForm onSubmit={this.props.addCard} placeholder="タイトルを入力してください" />
        </div>
      </div>
    );
  }
}

export default Bord;