import React, { useState, useCallback } from 'react';
import { api } from '../../services';
import { TProps } from './types';
import { validateZipCode, formatZipCode } from '../../helpers';

import * as S from './styles';

export const Home = () => {
  const [data, setData] = useState<TProps | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [inputtedValue, setInputtedValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const handleZipLocation = useCallback(async (cep: string) => {
    if (cep.length < 9) return;
    try {
      setLoading(true);
      const response = await api.get(`/${cep}/json`);
      setData(response.data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleInput = useCallback((text: string) => {
    const formatted = formatZipCode(text);
    setInputtedValue(formatted);
    if (validateZipCode(formatted)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, []);

  const handleRetry = useCallback(() => {
    setError(null);
    handleZipLocation(inputtedValue);
  }, [inputtedValue, handleZipLocation]);

  const handleClose = useCallback(() => {
    setError(null);
  }, []);

  return (
    <S.Template
      error={error}
      onRetry={handleRetry}
      onClose={handleClose}
      isValid={isValid}
      inputtedValue={inputtedValue}
      handleInput={handleInput}
      handleZipLocation={handleZipLocation}
      loading={loading}
      data={data}
    />
  );
};
