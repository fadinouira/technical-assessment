import './Card.css';
import { CardProps } from './Card.type';

function Card({ children, className }: CardProps) {
  return <div className={`card-root-style ${className}`}>{children}</div>;
}

export default Card;
