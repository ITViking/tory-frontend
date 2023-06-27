import { ChangeEvent, KeyboardEvent, useState } from 'react';
import './App.css';
import {
  ListItem,
  OrderedList,
  Box,
  Input
} from '@chakra-ui/react'

function App() {
  const [listEntry, setListEntry] = useState('');
  const [newOne, setNewOne] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setListEntry(event.target.value);
  const handleKeyDown = (event: KeyboardEvent) => {
    if(event.key === "Enter") {
      setNewOne(listEntry);
      setListEntry("")
    }
  }
  return (
    <Box className='App' p={5}>
      <h1>Box 1</h1>
      <h2>Indholdsfortegnelse</h2>
      <OrderedList spacing={2}>
        <ListItem>En ting</ListItem>
        <ListItem>En ting 2</ListItem>
        <ListItem>En ting mere</ListItem>
        <ListItem>{newOne}</ListItem>

      </OrderedList>
      <Input
        value={listEntry}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder='Tilføj ting til listen'
      />
    </Box>
  );
}

export default App;
