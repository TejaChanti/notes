import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const NoteItem = ({ note, onDelete, onEdit }) => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5">{note.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {note.content}
        </Typography>
        <IconButton aria-label="edit" onClick={() => onEdit(note)}>
          <Edit />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => onDelete(note._id)}>
          <Delete />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default NoteItem;
