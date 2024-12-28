import { FC } from 'react';
import { generateUniqueKey, useShowElement } from '../../../utils';
import { Background, Flex, Spacing, Typography } from '../../basics';
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
        variant="inverse"
        typeVariant="h3"
        typeColor={showElement ? 'lightBlue' : undefined}
        transition
        func={() => setShowElement(!showElement)}
        content={heading}
        width="full"
      />

      {showElement ? (
        <Background color="transparent">
          <Spacing paddingY="sm">
            <Flex direction="vertical" gap="sm">
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
            </Flex>
          </Spacing>
        </Background>
      ) : null}
    </>
  );
};
