/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Touchable, Text } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  isDisabled?: boolean;
  color: string;
  children: string;
}

const Button: React.ElementType<ButtonProps> = ({
  isDisabled = false,
  color,
  children,
  ...props
}: ButtonProps) => {
  return (
    <Container>
      <Touchable isDisabled={isDisabled} color={color} {...props}>
        <Text isDisabled={isDisabled}>{children}</Text>
      </Touchable>
    </Container>
  );
};

export default Button;
