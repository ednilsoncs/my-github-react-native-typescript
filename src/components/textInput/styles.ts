import styled from 'styled-components/native';
import { TextProps } from 'react-native';

interface LabelProps extends TextProps {
  isActive: boolean;
}

export const Container = styled.View`
  height: 50px;
  position: relative;
  margin: 15px 0px;
`;

export const Label = styled.Text<LabelProps>`
  position: absolute;
  bottom: ${({ isActive }) => (isActive ? '45px' : '17px')};
  font-weight: ${({ isActive }) => (isActive ? 700 : 500)};
`;

export const TextInput = styled.TextInput`
  height: 50px;
  border-bottom-width: 0.5px;
  font-size: 14px;
  color: #24272b;
`;
