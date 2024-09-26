import {
  ArticlePreface,
  Button,
  ImageMatrix,
  ImageSlider,
  Modal,
  Tile,
  Typography,
  RowTable,
  RowTableProps,
  Flex,
  Grid,
} from '../../../../components';
import { useShowElement, generateUniqueKey, isMobile } from '../../../../utils';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { CompiledEvent } from '../types/compiled-event';

type ResultTileProps = {
  compiledEvent: CompiledEvent;
  eventSport: RowTableProps;
  funcToggleElements: (value: string) => void;
  showDescription: boolean;
  showMatrix: boolean;
};

export const ResultTile: FC<ResultTileProps> = ({
  compiledEvent,
  eventSport,
  funcToggleElements,
  showDescription,
  showMatrix,
}) => {
  const { showElement: showModal, setShowElement: setShowModal } = useShowElement();

  return (
    <Tile type="solid">
      <Flex direction="vertical" gap={isMobile() ? 'xs' : 'md'}>
        {compiledEvent.prefix ? (
          <Typography variant="t1">{compiledEvent.prefix}:</Typography>
        ) : null}

        <Flex direction="vertical" rowGap="3xs">
          {compiledEvent.names.length > 1 ? (
            compiledEvent.names.map((name, index) => (
              <Flex key={generateUniqueKey(index)} direction="horizontal" gap="xs">
                <Typography variant="h1" color="mediumGrey" textAlign="right">
                  Part&nbsp;
                  {index + 1}
                </Typography>

                <Typography variant="h1" textAlign="left" markdown>
                  {name}
                </Typography>
              </Flex>
            ))
          ) : (
            <Typography variant="t1" markdown>
              {compiledEvent.names[0]}
            </Typography>
          )}
        </Flex>

        <Typography variant="h4" color="mediumGrey">
          {compiledEvent.startDate}
          {compiledEvent.endDate ? <>&nbsp;&#8212;&nbsp;{compiledEvent.endDate}</> : null}
        </Typography>

        {compiledEvent.showSport ? (
          <RowTable titleRow={eventSport.titleRow} rows={eventSport.rows} />
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
            {compiledEvent.features ? <ArticlePreface entries={compiledEvent.features} /> : null}

            <Typography variant="body" textAlign="justify" markdown>
              {compiledEvent.description}
            </Typography>
          </>
        ) : null}

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
