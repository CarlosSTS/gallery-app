import React from 'react';
import { useRoute } from '@react-navigation/native'
import Line from '../../components/Line';
import LongLine from '../../components/LongLine';

import Background from '../../components/Background'

import { Container, Image,Info } from './styles';

const Detail = () => {
  const {serie} = useRoute().params
  //console.tron.log(serie)
  return(
    <Background>
    <Container>
    <Image source={{uri: serie.img}}/>
    <Info>
    <Line label="Título" content={serie.title} />
    <Line label="Gênero" content={serie.gender} />
    <Line label="Nota" content={serie.rate} />
    <LongLine label="Descrição" content={serie.description} />
    </Info>
    </Container>
    </Background>
  )
}

export default Detail;