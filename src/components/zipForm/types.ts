export type TProps = {
  isValid: boolean;
  inputtedValue: string;
  handleInput: (text: string) => void;
  handleZipLocation: (cep: string) => Promise<void>;
  loading: boolean;
  data: any;
  error: Error | null;
  onRetry: () => void;
  onClose: () => void;
};
