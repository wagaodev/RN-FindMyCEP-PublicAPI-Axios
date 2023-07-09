import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ErrorHandler } from '../errorHandler';
import { TProps } from './types';

import * as S from './styles';

export const ZipForm: React.FC<TProps> = ({
  isValid,
  inputtedValue,
  handleInput,
  handleZipLocation,
  loading,
  data,
  error,
  onRetry,
  onClose,
}) => (
  <>
    <ErrorHandler error={error} onRetry={onRetry} onClose={onClose} />
    <S.Container>
      <S.GenericText>Onde você mora?{`\n`}</S.GenericText>
      <S.GenericText>Coloque seu CEP 🌍</S.GenericText>
      <S.Input
        isValid={isValid}
        value={inputtedValue}
        onChangeText={handleInput}
        testID="zip-input"
      />
      <S.StyledButton
        onPress={() => handleZipLocation(inputtedValue)}
        testID="submit-button"
      >
        <S.ButtonText>Busque as informações</S.ButtonText>
      </S.StyledButton>
      {loading ? (
        <ActivityIndicator testID="loading-indicator" />
      ) : (
        data && (
          <S.InfoView>
            <S.InfoText testID="street">Rua: {data.logradouro}</S.InfoText>
            <S.InfoText testID="district">Bairro: {data.bairro}</S.InfoText>
            <S.InfoText testID="city">Cidade: {data.localidade}</S.InfoText>
            <S.InfoText testID="state">Estado: {data.uf}</S.InfoText>
          </S.InfoView>
        )
      )}
    </S.Container>
  </>
);
