import {
  Article,
  ArticlePreface,
  Button,
  ImageMatrix,
  ImageSlider,
  Modal,
  Tile,
  Typography,
  RowTable,
  Stack,
} from '../../../../bash-blocks';
import {
  useShowElement,
  generateUniqueKey,
  isMobile,
} from '../../../../../utils';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Grid } from '../../../../bash-blocks/basics';
import { RefactoredEvent } from '../types/refactored-event';

type ResultTileProps = {
  refactoredEvent: RefactoredEvent;
  funcToggleElements: (value: string) => void;
  showDescription: boolean;
  showMatrix: boolean;
};

export const ResultTile: FC<ResultTileProps> = ({
  refactoredEvent,
  funcToggleElements,
  showDescription,
  showMatrix,
}) => {
  const { showElement: showModal, setShowElement: setShowModal } =
    useShowElement();

  return (
    <Tile type="solid">
      <Stack direction="vertical" spacing={isMobile() ? 'xs' : 'md'}>
        {refactoredEvent.prefix ? (
          <Typography variant="t1" fontFamily="instagram" textAlign="center">
            {refactoredEvent.prefix}:
          </Typography>
        ) : null}

        {refactoredEvent.names.length > 1 ? (
          refactoredEvent.names.map((name, index) => (
            <Stack
              key={generateUniqueKey(index)}
              direction="horizontal"
              alignHorizontal="center"
              spacing="xs"
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
            </Stack>
          ))
        ) : (
          <Typography variant="t1" fontFamily="instagram" textAlign="center">
            {refactoredEvent.names[0]}
          </Typography>
        )}

        <Typography
          variant="h4"
          fontFamily="instagram"
          color="mediumGrey"
          textAlign="center"
        >
          {refactoredEvent.startDate}
          {refactoredEvent.endDate ? (
            <>&nbsp;&#8212;&nbsp;{refactoredEvent.endDate}</>
          ) : null}
        </Typography>

        {refactoredEvent.showSport ? (
          // TODO: move this to the hook
          <RowTable
            titleRow={{
              leftItem: `${refactoredEvent.distance} | ${refactoredEvent.elevation}`,
              rightItem: refactoredEvent.time,
            }}
            rows={[
              {
                leftItem: refactoredEvent.islands ? 'Islands' : undefined,
                rightItem: refactoredEvent.islands
                  ? refactoredEvent.islands
                  : undefined,
              },
              {
                leftItem: refactoredEvent.munros ? 'Munros' : undefined,
                rightItem: refactoredEvent.munros
                  ? refactoredEvent.munros
                  : undefined,
              },
              {
                leftItem: refactoredEvent.munroTops ? 'Munro Tops' : undefined,
                rightItem: refactoredEvent.munroTops
                  ? refactoredEvent.munroTops
                  : undefined,
              },
              {
                leftItem: refactoredEvent.corbetts ? 'Corbetts' : undefined,
                rightItem: refactoredEvent.corbetts
                  ? refactoredEvent.corbetts
                  : undefined,
              },
              {
                leftItem: refactoredEvent.corbettTops
                  ? 'Corbett Tops'
                  : undefined,
                rightItem: refactoredEvent.corbettTops
                  ? refactoredEvent.corbettTops
                  : undefined,
              },
              {
                leftItem: refactoredEvent.grahams ? 'Grahams' : undefined,
                rightItem: refactoredEvent.grahams
                  ? refactoredEvent.grahams
                  : undefined,
              },
              {
                leftItem: refactoredEvent.subTwos ? 'SubTwos' : undefined,
                rightItem: refactoredEvent.subTwos
                  ? refactoredEvent.subTwos
                  : undefined,
              },
              {
                leftItem: refactoredEvent.donalds ? 'Donalds' : undefined,
                rightItem: refactoredEvent.donalds
                  ? refactoredEvent.donalds
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
            {refactoredEvent.features ? (
              <ArticlePreface entries={refactoredEvent.features} />
            ) : null}

            <Typography variant="body" textAlign="justify" markdown>
              {refactoredEvent.description}
            </Typography>
          </>
        ) : null}

        {/* TODO: hidden component */}
        {isMobile() ? (
          <ImageSlider slides={refactoredEvent.images} />
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

        {showMatrix ? <ImageMatrix items={refactoredEvent.images} /> : null}

        {showModal ? (
          <Modal isOpen={showModal} onClose={() => setShowModal(!showModal)}>
            <ImageSlider slides={refactoredEvent.images} />
          </Modal>
        ) : null}
      </Stack>
    </Tile>
  );
};
