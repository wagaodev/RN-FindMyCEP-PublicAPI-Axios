import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

export const Modal = styled.Modal`
  background-color: #ccc;
`;

export const ModalContainer = styled.View`
  position: absolute;
  bottom: 20%;
  left: 0;
  right: 0;
  height: 40%;
`;

export const ContentContainer = styled.View`
  flex: 1;
  align-self: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
  border-color: red;
`;

export const BackgroundImage = styled(ImageBackground).attrs({
  resizeMode: 'contain',
})`
  flex: 1;
  height: 180%;
`;

export const ErrorText = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #309099;
  padding: 10px 20px;
  border-radius: 8px;
`;

export const RetryButton = styled.TouchableOpacity`
  background-color: #309099;
  padding: 10px 20px;
  border-radius: 8px;
  margin-right: 10px;
`;

export const CloseButton = styled.TouchableOpacity`
  background-color: #ff3333;
  padding: 10px 20px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;
