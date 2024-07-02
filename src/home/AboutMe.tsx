import React from 'react';
import { Box, Text, List, ListItem, ListIcon, Heading } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

const AboutMe = () => {
  return (
    <Box p={6} m={4}>
      <Heading fontSize='2xl' mb={3}>About Me</Heading>

      <Heading fontSize='lg' mt={4} mb={2}>来歴</Heading>
      <List spacing={2}>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='blue.500' />
          2003年生まれ
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='blue.500' />
          開智未来高等学校卒業（令和3年3月）
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='blue.500' />
          明治大学国際日本学部入学（令和3年4月）
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='blue.500' />
          42Tokyo 受験・合格（令和4年4月）
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='blue.500' />
          プログラミングに専念するため大学を休学（令和4年5月）
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='blue.500' />
          42Tokyo 入学（令和4年7月）
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='blue.500' />
          大学に復学しながら42Tokyoで活動中（令和5年8月）
        </ListItem>
      </List>

      <Heading fontSize='lg' mt={4} mb={2}>趣味など</Heading>

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
        C, C++, Python(Django), TypeScript, △JavaScript, Docker, Go
      </Text>
      <Text mt={2}>JetBrainsのエディタやEmacsを好んで使っています</Text>
    </Box>
  );
}

export default AboutMe;