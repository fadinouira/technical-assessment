import { useEffect, useState } from 'react';

export default function usePopper(
  open: boolean,
  onClose?: () => void,
  anchorEl?: HTMLElement | null,
) {
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  const updatePosition = () => {
    if (anchorEl) {
      const rect = anchorEl.getBoundingClientRect();
      setPosition({ top: rect.bottom, left: rect.left, width: rect.width });
    }
  };

  const handleClose = () => {
    onClose?.();
  };

  useEffect(() => {
    updatePosition();
    if (open) {
      window.addEventListener('resize', updatePosition);
      document.getElementById('root')?.addEventListener('mousedown', handleClose);
    } else {
      window.removeEventListener('resize', updatePosition);
    }

    return () => {
      window.removeEventListener('resize', updatePosition);
      document.getElementById('root')?.removeEventListener('mousedown', handleClose);
    };
  }, [open, anchorEl]);

  return { position };
}
