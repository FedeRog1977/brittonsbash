import { FC } from 'react';
import { isMobile, useShowElement } from '../../../../utils';
import {
  ArticlePreface,
  Button,
  Flex,
  Grid,
  ImageMatrix,
  ImageSlider,
  Modal,
  Tile,
  Typography,
} from '../../../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Food } from '../types/food';

type ResultTileProps = {
  food: Food;
  funcToggleElements: (value: string) => void;
  showDescription: boolean;
  showMatrix: boolean;
};

export const ResultTile: FC<ResultTileProps> = ({
  food,
  funcToggleElements,
  showDescription,
  showMatrix,
}) => {
  const { showElement: showModal, setShowElement: setShowModal } = useShowElement();

  return (
    <Tile type="solid">
      <Flex direction="vertical" gap={isMobile() ? 'xs' : 'md'}>
        <Typography variant="h1" fontFamily="calligraphy" textAlign="center">
          {food.name}
        </Typography>

        <Button
          variant="clear"
          typeColor={showDescription ? 'lightBlue' : undefined}
          content={showDescription ? 'Read less' : 'Read more'}
          icon={
            showDescription ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )
          }
          func={() => funcToggleElements('description')}
          width="full"
          transition
        />

        {showDescription ? (
          <>
            <ArticlePreface entries={food.ingredients} listStyle="itemize" />

            <Typography variant="body" textAlign="justify">
              {food.description}
            </Typography>
          </>
        ) : null}

        {/* TODO: hidden component */}
        {isMobile() ? (
          <ImageSlider slides={food.images} />
        ) : (
          <Grid justifyContent="even">
            <Button
              variant="clear"
              typeColor={showMatrix ? 'lightBlue' : undefined}
              content="Image matrix"
              func={() => funcToggleElements('matrix')}
            />

            <Button
              variant="clear"
              typeColor={showModal ? 'lightBlue' : undefined}
              content="Image slideshow"
              func={() => setShowModal(!showModal)}
            />
          </Grid>
        )}

        {showMatrix ? <ImageMatrix items={food.images} /> : null}

        {showModal ? (
          <Modal isOpen={showModal} onClose={() => setShowModal(!showModal)}>
            <ImageSlider slides={food.images} />
          </Modal>
        ) : null}
      </Flex>
    </Tile>
  );
};
