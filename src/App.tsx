import './App.css';
import {
  List,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'

function App() {
  return (
    <div className='App'>
      <h1>Tory</h1>
      <UnorderedList spacing={2}>
        <ListItem>En ting</ListItem>
        <ListItem>En ting 2</ListItem>
        <ListItem>En ting mere</ListItem>
      </UnorderedList>
    </div>
  );
}

export default App;
