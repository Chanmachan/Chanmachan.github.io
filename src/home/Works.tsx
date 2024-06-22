import React from 'react';
import { Box, Text, Heading, VStack, Divider, Link } from '@chakra-ui/react';

interface ProjectProps {
  title: string;
  language: string;
  description: string;
  githubUrl: string;
}

const Works = () => {
  return (
    <Box p={5}>
      <Heading fontSize='2xl' mb={4}>Works</Heading>
      <VStack divider={<Divider borderColor='gray.200' />} spacing={4} align='stretch'>

        <Project
          title='ft_printf'
          language='C'
          description='printfを再実装する課題。'
          githubUrl='https://github.com/Chanmachan/ft_printf'
        />

        <Project
          title='so_long'
          language='C'
          description='簡単な2Dゲームの実装をする課題。'
          githubUrl='https://github.com/Chanmachan/so_long'
        />

        <Project
          title='minishell'
          language='C'
          description='bashを再実装する課題。二人チームで開発。初めての共同開発で、レキサー、パーサーの処理を担当。'
          githubUrl='https://github.com/Chanmachan/Minishell'
        />

        <Project
          title='miniRT'
          language='C'
          description='レイトレーシングプログラムの実装をする課題。二人チームでの共同開発。高校以来のベクトルとの対面で手こずった。'
          githubUrl='https://github.com/Chanmachan/miniRT'
        />

        <Project
          title='Inception'
          language='Docker, Wordpress, MySQL, Nginx'
          description='Wordpress, MySQL, Nginx の3つのコンテナの設計からdocker-composeを用いて起動。外部から接続できるのはNginxのみ。'
          githubUrl='https://github.com/Chanmachan/Inception'
        />

        <Project
          title='webserv'
          language='C++'
          description='nginxライクなwebサーバーの再実装をする課題。3人チームで開発し、主にリクエストとテストを担当。issue駆動開発を行い、IO多重化について学んだ。'
          githubUrl='https://github.com/NaoyaFukuma/webserv'
        />

        <Project
          title='ft_transcendence (現在実装中)'
          language='バックエンド-> Django, フロントエンド-> JavaScript'
          description='フレンド機能等が付いたpongゲームができるアプリケーションを実装する課題。4人チームを組んで実装中。担当は主にゲーム部分。'
          githubUrl='https://github.com/scandamus'
        />

      </VStack>
    </Box>
  );
}

const Project: React.FC<ProjectProps> = ({ title, language, description, githubUrl }) => (
  <Box p={3} borderWidth='1px' borderRadius='lg' overflow='hidden'>
    <Link href={githubUrl} isExternal>
      <Heading fontSize='lg' mb={1}>{title}</Heading>
    </Link>
    <Text fontSize='sm' mb={1}><strong>使用言語・技術:</strong> {language}</Text>
    <Text mb={2}>{description}</Text>
  </Box>
);

export default Works;