import styled from 'styled-components/native';
import { colors } from '../../common/colors';

import Button from '../../components/Button'
import ButtonDetail from '../../components/ButtonDetail';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
`;

export const Image  = styled.Image.attrs({
  aspectRatio: 1,
})`
background-color: ${colors.transparent};
`;

export const Info = styled.View`
padding: 4px;
`;

export const ButtonEdit = styled(Button)`
width: 80%;
align-self: center;
margin-top: 5px;
`;

export const ButtonDelete = styled(ButtonDetail)`
width: 80%;
align-self: center;
background-color: ${colors.red};
margin: 10px 0;
`;