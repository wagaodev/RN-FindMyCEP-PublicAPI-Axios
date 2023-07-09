import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const GenericText = styled.Text`
  font-size: 18px;
`;

export const Input = styled.TextInput.attrs({
  placeholder: ' CEP: 12345000',
})<{ isValid: boolean }>`
  border: 2px solid ${({ isValid }) => (isValid ? 'green' : 'red')};
  border-radius: 8px;
  width: 150px;
  height: 36px;
  margin-top: 20px;
  text-align: center;
`;

export const StyledButton = styled.TouchableOpacity`
  margin-top: 20px;
  margin-bottom: 50px;
  justify-content: center;
  height: 50px;
  width: 200px;
  border-radius: 8px;
  background-color: #309099;
`;

export const ButtonText = styled.Text`
  align-content: center;
  align-self: center;
  text-align: center;
  color: #fff;
  font-size: 16px;
`;

export const InfoView = styled.View``;

export const InfoText = styled.Text``;
