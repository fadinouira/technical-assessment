import './Container.css';
import { ContainerProps } from './Container.type';

function Container({ children, className, maxWidth }: ContainerProps) {
  return (
    <div className={`${className} container-root-style`} style={{ maxWidth }}>
      {children}
    </div>
  );
}

export default Container;
