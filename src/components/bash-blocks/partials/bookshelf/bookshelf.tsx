import { FC } from 'react';
import { generateUniqueKey, useShowElement } from '../../../../utils';
import { Stack, Typography } from '../../basics';
import { Button } from '../button';

export type BookshelfProps = {
  heading: string;
  items: string[];
};

export const Bookshelf: FC<BookshelfProps> = ({ heading, items }) => {
  const { showElement, setShowElement } = useShowElement();

  return (
    <Stack direction="vertical" spacing="md">
      <Button
        variant="clear"
        typeVariant="h3"
        typeColor={showElement ? 'lightBlue' : undefined}
        transition
        func={() => setShowElement(!showElement)}
        content={heading}
        width="full"
      />

      <Stack direction="vertical" spacing="sm">
        {showElement &&
          items.map((item, index) => (
            <Typography
              key={generateUniqueKey(index)}
              variant="body"
              textAlign="center"
              markdown
            >
              {item}
            </Typography>
          ))}
      </Stack>
    </Stack>
  );
};
