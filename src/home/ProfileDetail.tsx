import React from 'react';
import {Box, Flex, Icon, Image, Link, Text} from '@chakra-ui/react';
import profileIcon from '../static/icon.png';
import {DiGithubBadge} from 'react-icons/di';
import {FaXTwitter} from 'react-icons/fa6';
import {CiMail} from 'react-icons/ci';
import {MdLocationPin} from 'react-icons/md';

interface ProfileDetailProps {
  size: string;
}

function ProfileDetail({size}: ProfileDetailProps) {
  return(
    <Box>
      <Image
        objectFit='cover'
        borderRadius='lg'
        boxSize={size}
        bg='white'
        boxShadow='base'
        src={profileIcon}
        alt='ProfileIcon'
        objectPosition='center 65%'
        mb={4} />
      <Text fontSize='xl' fontWeight='bold'>Chanmachan</Text>
      <Text mb={1}>
        I am a student of Meiji University and 42tokyo
      </Text>
      <Flex align='center'> {/* Flex コンテナを使用し、アイテムを垂直方向に中央揃え */}
        <Icon as={MdLocationPin} color='red.500' mr={2} w={5} h={5} mt={-1} />{/* アイコンの幅、高さ、マージントップを調整 */}
        <Text mb={1}>42Tokyo, Japan</Text>
      </Flex>
      <Flex justifyContent='flex-start' align='center' gap='20px' mb={4}>
        <Link href='https://github.com/Chanmachan' isExternal>
          <Icon as={DiGithubBadge} boxSize='35px' />
        </Link>
        <Link href='https://x.com/chanma_42' isExternal>
          <Icon as={FaXTwitter} boxSize='24px' />
        </Link>
        <Icon as={CiMail} boxSize='30px' mt='-1'/>
      </Flex>
    </Box>
  );
}

export default ProfileDetail;
