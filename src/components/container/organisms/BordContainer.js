import React, { Component } from 'react';
import {DraggableCard} from '../../presentational/molecules/Card';
import Bord from './Bord';
import {TextForm} from '../../presentational/atoms/TextForm'
import AddListButton from '../../presentational/atoms/AddListButton'

class BordContainer extends Component {

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
      background: "rgba(0,0,0,0.0)",
      display: "inline-block",
      verticalAlign: "top",
    }
    
    return (
    <div className="bordContainer" style={style}>
        {this.props.columns.map(column => (
          <Bord key={column.id} title={column.title} addCard={this.props.addCard.bind(null, column.id)} >
            {/* カードが存在する時 */}
            {column.cardIds
              .map(cardId => this.props.cards.find(card => card.id === cardId))
              .map((card, index) => (
                <DraggableCard
                  key={card.id}
                  id={card.id}
                  columnId={column.id}
                  columnIndex={index}
                  title={card.title}
                  content={card.content}
                  moveCard={this.props.moveCard}
                  removeCard={this.props.removeCard}
                />
            ))}
            {/* カードが存在しない時 */}
            {column.cardIds.length === 0 && (
              <DraggableCard
                isSpacer
                moveCard={cardId => this.props.moveCard(cardId, column.id, 0)}
              />
            )}
          </Bord>
        ))}
        <div className="col s4 m4" style={{...style, marginTop: "9px"}}>
          <AddListButton label={"リストを追加"} onClick={this.changeFlg.bind(this)}/>
          <div style={{ display: this.state.textFormShowFlg ? 'none' : '' }}>
            <TextForm onSubmit={this.props.addColumn} placeholder="リスト名を入力してください" />
          </div>
        </div>
    </div>
    )
  }
}

export default BordContainer;
