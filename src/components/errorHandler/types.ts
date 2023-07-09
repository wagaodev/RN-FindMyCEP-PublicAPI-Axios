export type ErrorHandlerProps = {
  error: Error | null;
  onRetry: () => void;
  onClose: () => void;
};
