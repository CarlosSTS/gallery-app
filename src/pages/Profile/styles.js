import styled from 'styled-components/native';
import {colors} from '../../common/colors'

import Input from '../../components/Input';
import Button from '../../components/Button';
import { fonts } from '../../common/fonts';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 20px;
`;

export const Info = styled.Text`
    font-size: 24px;
    color: ${colors.white};
    align-self: center;
    margin: 20px 0;
    font-family: ${fonts.title};
`;

export const FormInput = styled(Input)`
margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
margin-top: 5px;
`;

export const Form = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  margin-bottom: 30px;
  `;