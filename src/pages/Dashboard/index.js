import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ActivityIndicator } from 'react-native';

import { colors } from '../../common/colors';

import Input from '../../components/Input';
import Background from '../../components/Background'
import SerieCart from '../../components/SerieCart';

import series from '../../../series.json';

import { Container, SeriesList, Form, SubmitButton, ListHeader, ListFooter } from './styles';

const isEven = number => number % 2 === 0;

const Dashboard = () => {
  const [search, setSearch] = useState('')
  const [loading, setLoaing] = useState(false)
  return (
    <Background>
      <Container>

        <Form>
          <Input style={{ flex: 1 }}
            placeholder='Digite o nome da série'
            icon='search'
            returnKeyType='send'
            value={search}
            onChangeText={setSearch}
          />
          {loading ? <ActivityIndicator size='large' color={colors.white} />
            : <SubmitButton>
              <MaterialCommunityIcons name='map-marker-radius' size={24} color={colors.white} />
            </SubmitButton>}
        </Form>

        <SeriesList
          data={series}
          keyExtractor={series => String(series.id)}
          ListHeaderComponent={<ListHeader />}
          ListerFooterComponent={<ListFooter />}
          renderItem={({ item: series, index }) => (
            <SerieCart series={series} isFirst={isEven(index)} />
          )}
        />

      </Container>
    </Background>
  )
}

export default Dashboard;