import React from 'react';

import {Container,Label,Content} from './styles';

function Line({ label = '', content = "-" }) {

  return (
    <Container>
      <Label>{label}:</Label>
      <Content content={content}>{content}</Content>
    </Container>
  );
}

export default Line;