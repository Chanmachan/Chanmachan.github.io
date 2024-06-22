import React, { useState } from 'react';
import { Box, Button, Flex, VStack } from '@chakra-ui/react';
import ProfileDetail from './ProfileDetail';
import AboutMe from './AboutMe';
import Works from './Works';

function HomePage() {
  const tmp : string = '200px';
  const [activeView, setActiveView] = useState('aboutMe');  // 状態として現在のビューを保持

  const renderContent = () => {
    if (activeView === 'aboutMe') {
      return <AboutMe />;
    } else if (activeView === 'works') {
      return <Works />;
    }
  };

  return (
    <Flex justifyContent='flex-start' pl={['10px', '30px', '50px']} py={10}>
      <VStack spacing={4} align='start' width={tmp}>
        <ProfileDetail size={tmp}/>
        <Button variant='outline' borderColor='black' width={tmp} onClick={() => setActiveView('aboutMe')}>
          About Me
        </Button>
        <Button variant='outline' borderColor='black' width={tmp} onClick={() => setActiveView('works')}>
          Works
        </Button>
      </VStack>
      <Box flex='1' pl={5}>
        {renderContent()}
      </Box>
    </Flex>
  );
}

export default HomePage;