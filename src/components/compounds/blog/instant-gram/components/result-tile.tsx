import {
  ArticlePreface,
  Button,
  ImageMatrix,
  ImageSlider,
  Modal,
  Tile,
  Typography,
  RowTable,
} from '../../../../bash-blocks';
import {
  useShowElement,
  generateUniqueKey,
  isMobile,
} from '../../../../../utils';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Flex, Grid } from '../../../../bash-blocks/basics';
import { CompiledEvent } from '../types/refactored-event';

type ResultTileProps = {
  compiledEvent: CompiledEvent;
  funcToggleElements: (value: string) => void;
  showDescription: boolean;
  showMatrix: boolean;
};

export const ResultTile: FC<ResultTileProps> = ({
  compiledEvent,
  funcToggleElements,
  showDescription,
  showMatrix,
}) => {
  const { showElement: showModal, setShowElement: setShowModal } =
    useShowElement();

  return (
    <Tile type="solid">
      <Flex direction="vertical" gap={isMobile() ? 'xs' : 'md'}>
        {compiledEvent.prefix ? (
          <Typography variant="t1" fontFamily="instagram" textAlign="center">
            {compiledEvent.prefix}:
          </Typography>
        ) : null}

        {compiledEvent.names.length > 1 ? (
          compiledEvent.names.map((name, index) => (
            <Flex
              key={generateUniqueKey(index)}
              direction="horizontal"
              alignHorizontal="center"
              gap="xs"
            >
              <Typography
                variant="t1"
                fontFamily="instagram"
                color="mediumGrey"
                textAlign="right"
              >
                Part&nbsp;
                {index + 1}&nbsp;
              </Typography>

              <Typography variant="t1" fontFamily="instagram" textAlign="left">
                {name}
              </Typography>
            </Flex>
          ))
        ) : (
          <Typography variant="t1" fontFamily="instagram" textAlign="center">
            {compiledEvent.names[0]}
          </Typography>
        )}

        <Typography
          variant="h4"
          fontFamily="instagram"
          color="mediumGrey"
          textAlign="center"
        >
          {compiledEvent.startDate}
          {compiledEvent.endDate ? (
            <>&nbsp;&#8212;&nbsp;{compiledEvent.endDate}</>
          ) : null}
        </Typography>

        {compiledEvent.showSport ? (
          // TODO: move this to the hook
          <RowTable
            titleRow={{
              leftItem: `${compiledEvent.distance} | ${compiledEvent.elevation}`,
              rightItem: compiledEvent.time,
            }}
            rows={[
              {
                leftItem: compiledEvent.islands ? 'Islands' : undefined,
                rightItem: compiledEvent.islands
                  ? compiledEvent.islands
                  : undefined,
              },
              {
                leftItem: compiledEvent.munros ? 'Munros' : undefined,
                rightItem: compiledEvent.munros
                  ? compiledEvent.munros
                  : undefined,
              },
              {
                leftItem: compiledEvent.munroTops ? 'Munro Tops' : undefined,
                rightItem: compiledEvent.munroTops
                  ? compiledEvent.munroTops
                  : undefined,
              },
              {
                leftItem: compiledEvent.corbetts ? 'Corbetts' : undefined,
                rightItem: compiledEvent.corbetts
                  ? compiledEvent.corbetts
                  : undefined,
              },
              {
                leftItem: compiledEvent.corbettTops
                  ? 'Corbett Tops'
                  : undefined,
                rightItem: compiledEvent.corbettTops
                  ? compiledEvent.corbettTops
                  : undefined,
              },
              {
                leftItem: compiledEvent.grahams ? 'Grahams' : undefined,
                rightItem: compiledEvent.grahams
                  ? compiledEvent.grahams
                  : undefined,
              },
              {
                leftItem: compiledEvent.subTwos ? 'SubTwos' : undefined,
                rightItem: compiledEvent.subTwos
                  ? compiledEvent.subTwos
                  : undefined,
              },
              {
                leftItem: compiledEvent.donalds ? 'Donalds' : undefined,
                rightItem: compiledEvent.donalds
                  ? compiledEvent.donalds
                  : undefined,
              },
            ]}
          />
        ) : null}

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
            {compiledEvent.features ? (
              <ArticlePreface entries={compiledEvent.features} alphabetize />
            ) : null}

            <Typography variant="body" textAlign="justify" markdown>
              {compiledEvent.description}
            </Typography>
          </>
        ) : null}

        {/* TODO: hidden component */}
        {isMobile() ? (
          <ImageSlider slides={compiledEvent.images} />
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

        {showMatrix ? <ImageMatrix items={compiledEvent.images} /> : null}

        {showModal ? (
          <Modal isOpen={showModal} onClose={() => setShowModal(!showModal)}>
            <ImageSlider slides={compiledEvent.images} />
          </Modal>
        ) : null}
      </Flex>
    </Tile>
  );
};
