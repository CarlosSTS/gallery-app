import { Platform } from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../common/colors'
import {fonts} from '../../common/fonts'

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  `;

  export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
  `;

  export const FormInput = styled(Input)`
  margin-bottom: 10px;
  `;

  export const SubmitButton = styled(Button)`
  margin-top: 5px;
  `;

  export const SignLink = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
  })`
  width: 50%;
  border-radius: 4px;
  margin-top: 20px;
  height: 46px;
  background-color: green;

  align-items: center;
  justify-content: center;
  `;

  export const SignLinkText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 16px;
  font-family: ${fonts.subTitle};
  `;