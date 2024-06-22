import React from 'react';
import { Box, Text, List, ListItem, ListIcon, Heading } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

const AboutMe = () => {
  return (
    <Box p={6} m={4}>
      <Heading fontSize='2xl' mb={3}>About Me</Heading>

      <List spacing={2}>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          明治大学国際日本学部3年（2024年6月現在）
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          42Tokyo Level.7（最終課題取り組み中）
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          バイク（cb400sf）乗ってます
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          釣り（にわか）
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          パスタにハマってて手打ちでも作ったり作らなかったり
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          食べログで見つけたお店巡り
        </ListItem>
        {/*<ListItem>*/}
        {/*  <ListIcon as={CiCircleRemove} color='red.500' />*/}
        {/*  食べログで見つけたお店巡り*/}
        {/*</ListItem>*/}
      </List>

      <Heading fontSize='lg' mt={4} mb={2}><br/>言語・ツール</Heading>
      <Text>
        C, C++, Python(Django), TypeScript, △JavaScript, Docker
      </Text>
      <Text mt={2}>JetBrainsのエディタやEmacsを好んで使っています</Text>
    </Box>
  );
}

export default AboutMe;