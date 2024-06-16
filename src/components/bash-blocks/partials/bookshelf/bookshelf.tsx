import { FC } from 'react';
import { generateUniqueKey, useShowElement } from '../../../../utils';
import { Background, Spacing, Stack, Typography } from '../../basics';
import { Button } from '../button';

export type BookshelfProps = {
  heading: string;
  items: string[];
};

export const Bookshelf: FC<BookshelfProps> = ({ heading, items }) => {
  const { showElement, setShowElement } = useShowElement();

  return (
    <>
      <Button
        variant="clear"
        typeVariant="h3"
        typeColor={showElement ? 'lightBlue' : undefined}
        transition
        func={() => setShowElement(!showElement)}
        content={heading}
        width="full"
      />

      {showElement ? (
        <Background color="darkGrey">
          <Spacing paddingY="sm">
            <Stack direction="vertical" spacing="sm">
              {items.map((item, index) => (
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
          </Spacing>
        </Background>
      ) : null}
    </>
  );
};
