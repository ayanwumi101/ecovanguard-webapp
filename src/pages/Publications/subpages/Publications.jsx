import React from 'react'
import PublicationCard from './PublicationCard'
import { Box, Heading, Flex } from '@chakra-ui/react'

const Publications = () => {
  const cards = [1,2, 3,4,5,6,7,8]
  return (
    <div>
        <Heading fontWeight='medium' fontSize={25}>Latest Publications</Heading>
        <Flex flexWrap='wrap' alignItems='center' justifyContent={['center', 'space-between']}>
            {cards.map((item) => <PublicationCard />)}
        </Flex>
    </div>
  )
}

export default Publications