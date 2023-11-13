import { useCallback, useState } from 'react';

export default function useDialog(defaultOpen = false) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // useCallback is used to prevent the function from being recreated on every render
  const openDialog = useCallback(() => setIsOpen(true), []);
  const closeDialog = useCallback(() => setIsOpen(false), []);

  return { isOpen, openDialog, closeDialog };
}
