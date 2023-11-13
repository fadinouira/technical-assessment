import { Typography } from '..';
import { NoDataFoundProps } from './NoDataFound.type';
import './NoDataFound.css';

function NoDataFound({ message, minHeight }: NoDataFoundProps) {
  return (
    <div
      className="no-data-found-root-style"
      style={{
        minHeight,
      }}
    >
      <Typography variant="body2" fontSize="0.875rem">
        {message ?? 'No data found'}
      </Typography>
    </div>
  );
}

export default NoDataFound;
