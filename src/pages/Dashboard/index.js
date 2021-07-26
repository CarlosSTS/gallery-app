import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

import { watchSeries } from '../../store/modules/series/action'

import Background from '../../components/Background'
import Loading from '../../components/Loading';
import Input from '../../components/Input';
import SerieCart from '../../components/SerieCart';

import {
  Container,
  SeriesList,
  Form,
  ListHeader,
  ListFooter,
  ContainerOff,
  NameOff,
  UserBookIcon
} from './styles';

const isEven = number => number % 2 === 0;

const Dashboard = ({ series, watchSeries }) => {
  const { navigate } = useNavigation()
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true)

  async function loadWatchSeries() {
    setLoading(true)
    try {
      await watchSeries()
    } catch (error) {
      console.tron.log('ERROR', error)
    }
  }

  useEffect(() => {
    loadWatchSeries();
    setInterval(() => {
      setLoading(false)
    }, 3000)
  }, [])

  if (!series && loading) {
    return <Loading />
  }

   if(!series && !loading) {
    return (
      <Background>
        <ContainerOff>
          <NameOff>Você ainda não cadastrou nada.{'\n'}
            Tudo que você adicionar será salvo aqui.
          </NameOff>
          <UserBookIcon />
        </ContainerOff>
      </Background>
    )
  }

  return (
    <Background>
      <Container>

        <Form>
          <Input
            style={{ flex: 1 }}
            placeholder='Digite o nome da série'
            icon='search'
            autoCorrect={false}
            returnKeyType='send'
            value={search}
            onChangeText={setSearch}
            onSubmitEditing={() => setSearch('')}
          />
        </Form>

        <SeriesList
          data={series}
          keyExtractor={series => String(series.id)}
          ListHeaderComponent={<ListHeader />}
          ListerFooterComponent={<ListFooter />}
          renderItem={({ item: series, index }) => {
            if (search !== '' && search === series.title) {
              return <SerieCart
                series={series}
                isFirst={isEven(index)}
                onPress={() => navigate('Detail', { serie: series })}
              />
            }
            else if (search === '') {
              return <SerieCart
                series={series}
                isFirst={isEven(index)}
                onPress={() => navigate('Detail', { serie: series })}
              />
            }
          }}
        />

      </Container>
    </Background>
  )
}

const mapStateToProps = state => {
  const { series } = state;
  if (!series) {
    return { series }
  }

  const keys = Object.keys(series)
  const seriesWithKeys = keys.map(id => {
    return { ...series[id], id }
  })
  return { series: seriesWithKeys }
}
export default connect(mapStateToProps, { watchSeries })(Dashboard);