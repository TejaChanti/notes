import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { createNote } from '../services/api';

const NoteForm = ({ addNote, currentNote, onUpdate }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [currentNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentNote) {
      onUpdate({ ...currentNote, title, content });
    } else {
      const newNote = { title, content };
      const savedNote = await createNote(newNote);
      addNote(savedNote.data);
    }
    setTitle('');
    setContent('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mb={2}>
      <TextField
        label="Title"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Content"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        {currentNote ? 'Update Note' : 'Add Note'}
      </Button>
    </Box>
  );
};

export default NoteForm;
