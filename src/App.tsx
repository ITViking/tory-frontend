import { ChangeEvent, KeyboardEvent, useState } from 'react';
import './App.css';
import {
  ListItem,
  OrderedList,
  Box,
  Input
} from '@chakra-ui/react';
import axios from "axios";

function App() {
  const [listEntry, setListEntry] = useState('');
  const [newOne, setNewOne] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setListEntry(event.target.value);
  
  const saveItem = async (item: any) => {
    await axios.post("http://localhost:5000/item", item);
  };
  const handleKeyDown = async (event: KeyboardEvent) => {
    if(event.key === "Enter") {
      setNewOne(listEntry);
      setListEntry("");
      await saveItem(listEntry);
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
