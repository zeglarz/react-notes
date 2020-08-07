import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateNote from './components/CreateNote';
import { ThemeProvider } from 'styled-components';
import useTheme from './utils/useTheme';
import { light, dark } from './styles/theme';
import { GlobalStyle } from './styles/globalStyle';

const App = () => {
    const storage = window.localStorage;
    const initialState = JSON.parse(storage.getItem('notes')) || [];
    const [theme, toggleTheme] = useTheme();

    const [notes, setNotes] = useState(initialState);
    const [idxLastClicked, setTdxLastClicked] = useState(0);

    useEffect(() => {
        storage.setItem('notes', JSON.stringify(notes));
    }, [storage, notes]);

    const constraintsRef = useRef(null);

    const addNote = newNote => {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    };

    const deleteNote = id => {
        setNotes(prevNotes => {
            return prevNotes.filter((_, index) => {
                return index !== id;
            });
        });
    };

    const editNoteTitle = (id, newText) => {
        let copy = JSON.parse(JSON.stringify(notes));
        copy[id].title = newText;
        setNotes(copy);
    };

    return (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
            <GlobalStyle/>
            <div ref={constraintsRef} style={{ width: '100vw', height: '100vh' }}>
                <Header toggleSwitch={toggleTheme} isOn={theme === 'dark'}/>
                <CreateNote onAdd={addNote}/>
                {notes.map((noteItem, index) => {
                    return (
                        <Note
                            key={index}
                            id={index}
                            title={noteItem.title}
                            content={noteItem.content}
                            onDelete={deleteNote}
                            dateTime={noteItem.createdAt}
                            idxLastClicked={idxLastClicked}
                            setTdxLastClicked={setTdxLastClicked}
                            constraintsRef={constraintsRef}
                            editNoteTitle={editNoteTitle}
                        />
                    );
                })}
                <Footer/>
            </div>
        </ThemeProvider>
    );
};

export default App;
