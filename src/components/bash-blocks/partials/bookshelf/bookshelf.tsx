import { FC } from 'react';
import { generateUniqueKey, useShowElement } from '../../../../utils';
import { Spacing, Typography } from '../../basics';
import { Button } from '../button';

export type BookshelfProps = {
  heading: string;
  items: string[];
};

export const Bookshelf: FC<BookshelfProps> = ({ heading, items }) => {
  const { showElement, setShowElement } = useShowElement();

  return (
    <Spacing mY={20}>
      <Button
        variant="clear"
        typeVariant="h3"
        typeColor={showElement ? 'lightBlue' : undefined}
        transition
        func={() => setShowElement(!showElement)}
        content={heading}
        width="full"
      />

      {showElement &&
        items.map((item, index) => (
          <Spacing mY={20}>
            <Typography
              key={generateUniqueKey(index)}
              variant="body"
              textAlign="center"
              markdown
            >
              {item}
            </Typography>
          </Spacing>
        ))}
    </Spacing>
  );
};
