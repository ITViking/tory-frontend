import './App.css';
import {
  ListItem,
  OrderedList,
  Box
} from '@chakra-ui/react'

function App() {
  return (
    <Box className='App' p={5}>
      <h1>Box 1</h1>
      <h2>Indholdsfortegnelse</h2>
      <OrderedList spacing={2}>
        <ListItem>En ting</ListItem>
        <ListItem>En ting 2</ListItem>
        <ListItem>En ting mere</ListItem>
      </OrderedList>
    </Box>
  );
}

export default App;
