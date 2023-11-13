import ReactDOM from 'react-dom';
import { Paper } from '..';
import './Popper.css';
import { PopperProps } from './Popper.type';
import usePopper from './usePopper';

function Popper({ open, anchorEl, children, onClose }: PopperProps) {
  const { position } = usePopper(open, onClose, anchorEl);

  return (
    open &&
    ReactDOM.createPortal(
      <div
        className="popper-content"
        style={{
          top: `${position.top + 2}px`,
          left: `${position.left}px`,
          width: `${position.width}px`,
        }}
      >
        <Paper>{children}</Paper>
      </div>,
      document.body,
    )
  );
}

export default Popper;
