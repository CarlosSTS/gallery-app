import React,{useState} from 'react';
import { TouchableWithoutFeedback,LayoutAnimation,UIManager,Platform } from 'react-native';

import  styles, {Container,Label,Content} from './styles';
  
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

function LongLine({ label = '', content = "-" }) {
    const [expanded, setExpanded]= useState(false)

    return (
    <Container>
      <Label>{label}:</Label>
      <TouchableWithoutFeedback onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
          setExpanded(!expanded);
        }}
      >
        <Content style={[expanded ? styles.expanded : styles.collapsed]}>{content}</Content>
      </TouchableWithoutFeedback>
    </Container>
  );
}

export default LongLine;