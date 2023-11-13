import { LoaderProps } from './Loader.type';
import './Loader.css';

function Loader({ size = 4, minHeight }: LoaderProps) {
  return (
    <div
      className="loader-root-style"
      style={{
        minHeight,
      }}
    >
      <span
        className="loader-style"
        style={{
          fontSize: `${size}px`,
        }}
      />
    </div>
  );
}

export default Loader;
