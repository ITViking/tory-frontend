import {
  ListItem,
  OrderedList,
} from '@chakra-ui/react';

export function ContainerList({ items }: { items: Array<any>}) {
  return (
    <OrderedList spacing={2}>
      { 
        items.map((item: any)=> 
          <ListItem key={item.id}>{ item.name }</ListItem>
      )}
    </OrderedList>
  )
}