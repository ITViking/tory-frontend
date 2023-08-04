import { Box, ListItem, UnorderedList } from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react"

interface Container {
  id: string,
  name: string
}

export function ContainerList() {
  const [containers, setContainers] = useState(Array<Container>);

  useEffect(()=> {
    getContainers()
      .then((data) => setContainers([...data]))
      .catch((error) => console.error("failed while getting containers", error))
  }, []);

  const containerList = containers.map((container: Container) => {
    return <ListItem key={container.id}>{ container.name }</ListItem>
  });

  return (
    <Box>
      <h1>Container List</h1>
      <UnorderedList>
        { containerList }
      </UnorderedList>
    </Box>
  )
}

async function getContainers(){
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/containers`);
  return response.data;
}
