import styled from 'styled-components/native';
import { TouchableOpacityProps, TextProps } from 'react-native';

interface TouchableType extends TouchableOpacityProps {
  color?: string;
  isDisabled: boolean;
}

interface TextType extends TextProps {
  isDisabled: boolean;
}

export const Container = styled.View`
  height: 50px;
  background: transparent;
  position: relative;
  margin: 5px 0;
  opacity: 1;
`;

export const Touchable = styled.TouchableOpacity<TouchableType>`
  height: 50px;
  background: ${(props) => props.color || '#fff'};
  opacity: ${(props) => (props.isDisabled ? '0.2' : '1')};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 6px;
`;

export const Text = styled.Text<TextType>`
  color: ${(props) => (props.isDisabled ? '#CCC' : '#FFF')};
  font-size: 12px;
  font-family: bold;
`;
