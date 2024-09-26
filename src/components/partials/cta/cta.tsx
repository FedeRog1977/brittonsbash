import { FC } from 'react';
import { Button } from '../button';

export type CtaProps = {
  content: string;
  href: string;
  invert?: boolean;
};

export const Cta: FC<CtaProps> = ({ content, href, invert = false }) => {
  const invertedButtonVariant = invert ? 'inverse' : 'solid';

  return (
    <Button
      variant={invertedButtonVariant}
      typeVariant="h3"
      content={content}
      func={() => (window.location.href = href)}
    />
  );
};
