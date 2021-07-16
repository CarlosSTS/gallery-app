import React from 'react';

import styles, { Container, Card, Image, Wrapper, Title } from './styles';

const SerieCart = ({ series, isFirst,onPress }) => {
  return (
    <Container style={isFirst ? styles.first : styles.last}>
      <Card onPress={onPress}>
        <Image source={{
          uri: series.img
        }}
        />
        <Wrapper>
          <Title>{series.title}</Title>
        </Wrapper>
      </Card>
    </Container>
  )
}

export default SerieCart;