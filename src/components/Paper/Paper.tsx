import './Paper.css';
import { PaperProps } from './Paper.type';

function Paper({ children, className }: PaperProps) {
  return <div className={`paper-root-style ${className}`}>{children}</div>;
}

export default Paper;
