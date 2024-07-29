import React, { useState, useEffect } from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { getNotes, deleteNote, updateNote } from './services/api';

const theme = createTheme();

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const result = await getNotes();
      setNotes(result.data);
    };
    fetchNotes();
  }, []);

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const onDelete = async (id) => {
    await deleteNote(id);
    setNotes(notes.filter(note => note._id !== id));
  };

  const onEdit = (note) => {
    setCurrentNote(note);
  };

  const onUpdate = async (note) => {
    const updatedNote = await updateNote(note);
    setNotes(notes.map(n => (n._id === note._id ? updatedNote.data : n)));
    setCurrentNote(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Typography variant="h2" gutterBottom>Notes App</Typography>
        <NoteForm addNote={addNote} currentNote={currentNote} onUpdate={onUpdate} />
        <NoteList notes={notes} onDelete={onDelete} onEdit={onEdit} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
