import React, { useState } from 'react';
import { DeleteOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { StyledNote } from '../styles/Note';
import DragCursor from '../assets/cursor-drag.png';
import DraggingCursor from '../assets/cursor-drag-clicked.png';

const DateTime = styled.span`
  position: relative;
  float: left;
  font-size: 0.6em;
  max-width: 6rem;
  margin: 0px 0px;
  padding-top: 1em;
  opacity: 0.5;
`;

function Note(props) {
    const [dragging, setDragging] = useState(false);
    const [isClicked, setClicked] = useState(false);

    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <StyledNote
            drag
            dragConstraints={props.constraintsRef}
            dragMomentum={false}
            className="note"
            onDragStart={() => setDragging(true)}
            onDragEnd={() => setDragging(false)}
            style={{
                zIndex: dragging
                    ? 99999
                    : isClicked
                        ? 999999
                        : props.idxLastClicked === props.id
                            ? 99
                            : 0,
                cursor: dragging ? `url(${DraggingCursor}), grab` : `url(${DragCursor}), grabbing`
            }}
            onClick={() => {
                setClicked(true);
                console.log('clicked');
                props.setTdxLastClicked(props.id);
                console.log(props.idxLastClicked);
            }}
            onBlur={() => {
                setClicked(false);
                console.log('blurred');
            }}
            tabIndex="1"
        >
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <DateTime>Created on {props.dateTime}</DateTime>
            <button onClick={handleClick}>
                <DeleteOutlined/>
            </button>
        </StyledNote>
    );
}

export default Note;
