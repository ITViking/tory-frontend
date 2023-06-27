import './App.css';
import {
  List,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'

function App() {
  return (
    <div className='App'>
      <h1>Box 1</h1>
      <h2>Indholdsfortegnelse</h2>
      <UnorderedList spacing={2}>
        <ListItem>En ting</ListItem>
        <ListItem>En ting 2</ListItem>
        <ListItem>En ting mere</ListItem>
      </UnorderedList>
    </div>
  );
}

export default App;
