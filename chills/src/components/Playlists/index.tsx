import React from "react";

import { ReactComponent as Play } from '../../assets/play.svg';

import {
  Card,
  CardImage,
  CardContent,
  PlayIcon,
  SubTextSmall,
  CardWrapperInner
} from './styles';

interface CategoryID {
  category_id: string | number
}


const Playlists: React.FC<CategoryID> = (props) => {
  
  const dataPlaylists = [
    {
      id: 101,
      category_id: 4,
      name: 'Vibe playlist 1',
      img: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      des: 'Musics for each vibes and differents moments'
    },
    {
      id: 102,
      category_id: 4,
      name: 'Vibe playlist 2',
      img: 'https://images.unsplash.com/photo-1564415051543-cb73a7468103?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbGx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      des: 'Musics for each vibes and differents moments'
    },
    {
      id: 103,
      category_id: 4,
      name: 'Vibe playlist 3',
      img: 'https://images.unsplash.com/photo-1530977875151-aae9742fde19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNoaWxsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      des: 'Musics for each vibes and differents moments'
    },
    {
      id: 104,
      category_id: 1,
      name: 'Relax playlist 1',
      img: 'https://images.unsplash.com/photo-1471560090527-d1af5e4e6eb6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      des: 'Just play and relax'
    },
    {
      id: 105,
      category_id: 2,
      name: 'Mood playlist 1',
      img: 'https://images.unsplash.com/photo-1578750793486-d587f2d464f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNoaWxsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      des: 'What is your mood today?'
    },
    {
      id: 106,
      category_id: 1,
      name: 'Relax playlist 2',
      img: 'https://images.unsplash.com/photo-1529066516367-36973222c957?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNoaWxsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      des: 'Just play and relax'
    },
    {
      id: 107,
      category_id: 3,
      name: 'Happy playlist 1',
      img: 'https://images.unsplash.com/photo-1542596594-649edbc13630?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFwcHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      des: 'Dont worry be happy'
    },
  ]

  const matchedPlaylist = dataPlaylists.filter(
    (playlist) => playlist.category_id === props.category_id
  )

  return(
    <CardWrapperInner>
      { matchedPlaylist.map((playlist) => (
        <Card>
          <CardImage>
            <img src={playlist.img} alt="" />
          </CardImage>

          <CardContent>
            <h3>{playlist.name}</h3>
            <SubTextSmall>{playlist.des}</SubTextSmall>
          </CardContent>

          <PlayIcon>
            <Play />
          </PlayIcon>
        </Card>
      ))}
    </CardWrapperInner>
  )
}

export default Playlists;