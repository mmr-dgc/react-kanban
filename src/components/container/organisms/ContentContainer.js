import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import _ from 'lodash';
import BordContainer from './BordContainer';

let _columnId = 0;
let _cardId = 0;

// カード初期化
const initialCards = Array.from({length: 9}).map(() => ({
  id: ++_cardId,
  title: `Card ${_cardId}`,
  content: "内容"
}));

// ボード初期化
const initialColumns = ['TODO', '作業中', '完了'].map((title, i) => ({
  id: _columnId++,
  title,
  cardIds: initialCards.slice(i * 3, i * 3 + 3).map(card => card.id),
}));

class ContentContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: initialCards,
      columns: initialColumns,
    }
  }

  // ボード追加
  addColumn = _title => {
    const title = _title.trim();
    if (!title) return;

    const newColumn = {
      id: ++_columnId,
      title,
      cardIds: [],
    };
    this.setState(state => ({
      columns: [...state.columns, newColumn],
    }));
  };

  // カード追加
  addCard = (columnId, _title) => {
    const title = _title.trim();
    if (!title) return;

    const newCard = {id: ++_cardId, title, content: "内容"};
    this.setState(state => ({
      cards: [...state.cards, newCard],
      columns: state.columns.map(
        column =>
          column.id === columnId
            ? {...column, cardIds: [...column.cardIds, newCard.id]}
            : column
      ),
    }));
  };

  // カード削除
  removeCard = (cardId) => {
    this.setState(state => ({
      columns: state.columns.map(column => ({
        ...column,
        cardIds: _.flowRight(
          ids => ids.filter(id => id !== cardId)
        )(column.cardIds),
      })),
    }));
  };

  // カード移動
  moveCard = (cardId, destColumnId, index) => {
    this.setState(state => ({
      columns: state.columns.map(column => ({
        ...column,
        cardIds: _.flowRight(
          // 2) If this is the destination column, insert the cardId.
          ids =>
            column.id === destColumnId
              ? [...ids.slice(0, index), cardId, ...ids.slice(index)]
              : ids,
          // 1) Remove the cardId for all columns
          ids => ids.filter(id => id !== cardId)
        )(column.cardIds),
      })),
    }));
  };

  render() {
    const style = {
      width: "100%",
      height: "90%",
      background: "rgba(0,0,0,0.0)"
    }
    return (
      <div className="contentContainer" style={style}>
        <BordContainer
          cards={this.state.cards}
          columns={this.state.columns}
          moveCard={this.moveCard}
          addCard={this.addCard}
          removeCard={this.removeCard}
          addColumn={this.addColumn}
        />
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(ContentContainer);
