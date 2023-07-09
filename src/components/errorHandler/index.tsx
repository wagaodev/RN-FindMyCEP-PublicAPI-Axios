import React from 'react';
import { serverErrorImage } from '../../resouces';
import { ErrorHandlerProps } from './types';

import * as S from './styles';

export const ErrorHandler: React.FC<ErrorHandlerProps> = ({
  error,
  onRetry,
  onClose,
}) => {
  if (error) {
    return (
      <S.Modal visible={error !== null} transparent>
        <S.ModalContainer>
          <S.ContentContainer>
            <S.ErrorText testID="error-text">
              Ocorreu um erro ao buscar{`\n`} as informações de CEP.
            </S.ErrorText>
            <S.ButtonContainer>
              <S.RetryButton onPress={onRetry} testID="retry-button">
                <S.ButtonText>Tentar novamente</S.ButtonText>
              </S.RetryButton>
              <S.CloseButton onPress={onClose} testID="close-button">
                <S.ButtonText>Fechar</S.ButtonText>
              </S.CloseButton>
            </S.ButtonContainer>
          </S.ContentContainer>
          <S.BackgroundImage
            source={{
              uri: serverErrorImage,
            }}
            testID="background-image"
          />
        </S.ModalContainer>
      </S.Modal>
    );
  }

  return null;
};
