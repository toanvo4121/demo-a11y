import { useCallback, useEffect } from 'react';

interface KeyboardConfig {
  key: string;
  callback: () => void;
  ctrl?: boolean;
  alt?: boolean;
  shift?: boolean;
}

export const useKeyboard = (config: KeyboardConfig[]) => {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      config.forEach(({ key, callback, ctrl, alt, shift }) => {
        if (
          event.key.toLowerCase() === key.toLowerCase() &&
          !!event.ctrlKey === !!ctrl &&
          !!event.altKey === !!alt &&
          !!event.shiftKey === !!shift
        ) {
          event.preventDefault();
          callback();
        }
      });
    },
    [config]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);
};