import React from 'react'

import Playlists from '../Playlists';

import {
  CardsWrapper,
  SubText
} from './styles'


const Categories: React.FC = () => {

  const dataCategories = [
    {
      id: 1,
      name: 'Relax',
      tagline: 'Go easy, just play and relax'
    },
    {
      id: 2,
      name: 'Mood',
      tagline: 'Playlist to match your mood'
    },
    {
      id: 3,
      name: 'Happy',
      tagline: 'Dont worry, be happy'
    },
    {
      id: 4,
      name: 'Vibes',
      tagline: ''
    },
  ]

  return (
    <>
      {dataCategories.map((category) => (
        <CardsWrapper>
          <h2>{category.name}</h2>
          <SubText>Enjoing your vibe</SubText>

          <Playlists category_id={category.id} />
  
        </CardsWrapper>
      ))}
    </>
  )
}

export default Categories