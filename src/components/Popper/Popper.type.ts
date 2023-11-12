import { ReactNode } from 'react';

export interface PopperProps {
  open: boolean;
  onClose: () => void;
  anchorEl?: HTMLElement | null;
  children: ReactNode;
}
