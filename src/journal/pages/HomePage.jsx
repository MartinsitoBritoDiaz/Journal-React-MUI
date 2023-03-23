import { IconButton, Typography } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'

import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views'
import { NoteView } from '../views/NoteView'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal/thunks'

export const HomePage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal );
  

  const onCreateNewNote = () => {
    dispatch( startNewNote() );
  }
  return (
    <JournalLayout>

      {
        (!!!active) 
        ? <NothingSelectedView />
        : <NoteView />
      }


      <IconButton 
        disabled={isSaving}
        size='large'
        sx={{
          color: 'white',
          ':hover': { opacity: 0.8 },
          position: 'fixed',
          right: 25,
          bottom: 50
        }}
        onClick={onCreateNewNote}
        >
          <img
              src={"./assets/addNote.png"}
              width={50}
              alt={"note icon"}
              loading="lazy"
            />
          {/* <AddOutlined sx={{ fontSize: 30}}/> */}
      </IconButton>
    </JournalLayout>
  )
}
