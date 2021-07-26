import React from 'react';
import Logo from '../../assets/logo.png'
import styles, { Container, Card, Image, Wrapper, Title } from './styles';

const SerieCart = ({ series, isFirst,onPress }) => {
  return (
    <Container style={isFirst ? styles.first : styles.last}>
      <Card onPress={onPress}>
       {series.img ? <Image source={{
          uri: series.img
        }}
        /> : (
            <Image style={styles.imageOff} source={Logo}/>
        )}
        <Wrapper>
          <Title>{series.title ? series.title : 'Não possui título' }</Title>
        </Wrapper>
      </Card>
    </Container>
  )
}

export default SerieCart;