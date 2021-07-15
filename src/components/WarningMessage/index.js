import React from 'react';

 import { Text } from './styles';

const WarningMessage = ({message}) => {
  return <Text message={message}>{message}</Text>
}

export default WarningMessage;