import './MainLayout.css';
import 'styles/colors.css';
import { MainLayoutProps } from './MainLayout.type';

function MainLayout({ children }: MainLayoutProps) {
  return <div className="root-style">{children}</div>;
}

export default MainLayout;
