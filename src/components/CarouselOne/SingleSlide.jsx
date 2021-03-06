import React from 'react'
import { Box, Chef } from './styles'
import { SlideTitle } from '../MainStyles'
import theme from '../../theme'
import Back from '../../assets/Image4.jpg'
import { Image } from '@chakra-ui/react'

const SingleSlide = ({ mode, titleSlide, img }) => {

  return (
    <>
      <Box mobile={mode}>
        <SlideTitle color={theme.colors.slide}>{titleSlide}</SlideTitle>
        <Image
          boxSize='100%'
          objectFit='cover'
          src={img}
          alt={titleSlide}
          position='absolute'
          zIndex='-1'
          borderRadius='2rem'
        />
      </Box>
    </>
  )
}

export default SingleSlide
