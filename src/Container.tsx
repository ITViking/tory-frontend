import { ChangeEvent, KeyboardEvent, useCallback, useEffect, useState } from 'react';
import {
  Box,
  Input
} from '@chakra-ui/react';
import axios from "axios";
import { ContainerInventory } from "./ContainerInventory";

interface Item {
  id: number,
  name: string,
}

export function Container() {
  const [itemList, setItemList] = useState(Array<Item>);
  const [newItem, setNewItem] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setNewItem(event.target.value);
  
  const saveItem = async (item: any) => {
    const response = await axios.post("http://localhost:5000/containers/1/items", { item });
    return response.data;
  };

  const getItems = useCallback(async () => {
    const response = await axios.get("http://localhost:5000/containers/1/items");
    return response.data;
  },
  []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setItemList([...data]);
      })
      .catch((error) => {
        console.error("error gettting inventory", error);
      })
  },[]);

  const handleKeyDown = async (event: KeyboardEvent) => {
    if(event.key === "Enter") {
      const savedItem = await saveItem(newItem);
      setItemList([
        ...itemList,
        savedItem
      ])
      setNewItem("");
    }
  };

  return (
    <Box className='App' p={5}>
      <h1>Box 1</h1>
      <h2>Indholdsfortegnelse</h2>
      <ContainerInventory items={itemList} />
      <Input
        value={newItem}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder='Tilføj ting til listen'
      />
    </Box>
  );
}