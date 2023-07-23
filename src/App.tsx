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
  const [itemList, setItemList] = useState(Array<Item>);
  const [newItem, setNewItem] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setNewItem(event.target.value);
  
  const saveItem = async (item: any) => {
    await axios.post("http://localhost:5000/container/1/item", item);
  };
  const handleKeyDown = async (event: KeyboardEvent) => {
    if(event.key === "Enter") {
      await saveItem(newItem);
      setItemList([
        ...itemList,
        { name: newItem, id: nextId++ }
      ])
      setNewItem("");
    }
  }
  return (
    <Box className='App' p={5}>
      <h1>Box 1</h1>
      <h2>Indholdsfortegnelse</h2>
      <ContainerList items={itemList} />
      <Input
        value={newItem}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder='Tilføj ting til listen'
      />
    </Box>
  );
}

export default App;
