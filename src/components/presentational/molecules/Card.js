import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import _ from 'lodash';
import TitleLabel from '../atoms/TitleLabel';
import ContentLabel from '../atoms/ContentLabel';
import RemoveBotton from '../atoms/RemoveButton';

export function Card(props) {
  const { isDragging, isSpacer } = props

  const style = { 
    opacity: isDragging || isSpacer ? 0.0 : 1,
    width: "272px",
    height: isSpacer ? "0px" : "",
    color: "#333333",
    margin: ".5rem 0 .6rem 0"
  }

  return _.flowRight(props.connectDragSource, props.connectDropTarget)(
    <div className="card" style={style} >
      <div className="card-content" style={{padding:"9px"}}>
        <TitleLabel title={props.title} />
        <RemoveBotton onClick={() => props.removeCard(props.id)} />
      </div>
    </div>
  );
}

export const DraggableCard = _.flowRight([
  DropTarget(
    'Card',
    {
      hover(props, monitor) {
        const {columnId, columnIndex} = props;
        const draggingItem = monitor.getItem();
        if (draggingItem.id !== props.id) {
          props.moveCard(draggingItem.id, columnId, columnIndex);
        }
      },
    },
    connect => ({
      connectDropTarget: connect.dropTarget(),
    })
  ),
  DragSource(
    'Card',
    {
      beginDrag(props) {
        return {id: props.id};
      },

      isDragging(props, monitor) {
        return props.id === monitor.getItem().id;
      },
    },
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    })
  ),
])(Card);