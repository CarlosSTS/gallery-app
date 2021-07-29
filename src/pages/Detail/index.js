import React from 'react';
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux';

import { deleteSerie } from '../../store/modules/series/action'

import Background from '../../components/Background'
import Line from '../../components/Line';
import LongLine from '../../components/LongLine';

import Logo from '../../assets/logo.png'

import {
  Container,
  Image,
  Info,
  ButtonEdit,
  ButtonDelete
} from './styles';

const Detail = ({ }) => {
  const { navigate } = useNavigation();
  const { serie } = useRoute().params;
  const dispatch = useDispatch()
  //console.tron.log(serie)

  async function deletedSerie() {
    const hasDeleted = await dispatch(deleteSerie(serie))
    if (hasDeleted) {
      navigate('Dashboard', { screen: 'Dashboard' })
    }
  }

  return (
    <Background>
      <Container>
        {serie.img ? <Image source={{ uri: serie.img }} /> : <Image style={{ alignSelf: 'center' }} source={Logo} />}
        <Info>
          <Line label="Título" content={serie.title || 'Não possui título'} />
          <Line label="Gênero" content={serie.gender} />
          <Line label="Nota" content={serie.rate} />
          <LongLine label="Descrição" content={serie.description || 'Não possui descrição'} />
        </Info>
        <ButtonEdit onPress={() => {
          navigate('EditForm', { serie })
        }}>
          Editar
        </ButtonEdit>

        <ButtonDelete onPress={deletedSerie}
        >Deletar
        </ButtonDelete>
      </Container>
    </Background>
  )
}

export default Detail;