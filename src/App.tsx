import { ChangeEvent, KeyboardEvent, useState } from 'react';
import './App.css';
import {
  Box,
  Input
} from '@chakra-ui/react';
import axios from "axios";
import { ContainerList } from "./ContainerList";

let nextId = 0;

interface Item {
  id: number,
  name: string,
}

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
      <ContainerList items={itemList} />
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
