import styled from 'styled-components/native';
import { colors } from '../../common/colors';
import { fonts } from '../../common/fonts';

export const Text = styled.Text`
  color: ${props => (props.message === 'Sucesso' ? colors.success : colors.error )};
  font-size: 16px;
  font-family: ${fonts.subTitle};
`;
