import { useMemo } from 'react';
import { variantMap } from './Typography.constants';
import { TypographyProps } from './Typography.type';

function Typography({
  children,
  variant = 'body1',
  className,
  fontSize,
  lineHeight,
}: TypographyProps) {
  const Tag = useMemo(() => variantMap[variant] || 'div', [variant]);

  return (
    <Tag className={className} style={{ fontSize, lineHeight }}>
      {children}
    </Tag>
  );
}

export default Typography;
