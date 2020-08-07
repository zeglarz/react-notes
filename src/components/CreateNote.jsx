import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import getDate from '../utils/dateTime';
import { StyledForm } from '../styles/Form';

function CreateNote(props) {
    const [note, setNote] = useState({
        title: '',
        content: '',
        createdAt: '',
        coords: {
            x: 0,
            y: 0
        }
    });

    const [isExpanded, SetExpanded] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value,
                createdAt: getDate()
            };
        });
    };

    const submitNote = e => {
        props.onAdd(note);
        setNote({
            title: '',
            content: ''
        });
        e.preventDefault();
        SetExpanded(false);
        console.log(note);
    };

    const expandNote = () => SetExpanded(true);

    return (
        <StyledForm>
            <form className="create-note">
                {isExpanded && (
                    <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                        autoFocus
                        onBlur={
                            note.title === '' && note.content === ''
                                ? () => setTimeout(() => SetExpanded(false), 300)
                                : null
                        }
                    />
                )}
                <textarea
                    onClick={expandNote}
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpanded ? '3' : '1'}
                />
                <Zoom in={isExpanded}>
                    <Fab
                        disabled={note.title === '' || note.content === '' ? true : false}
                        onClick={submitNote}
                    >
                        <AddIcon fontSize="large"/>
                    </Fab>
                </Zoom>
            </form>
        </StyledForm>
    );
}

export default CreateNote;
