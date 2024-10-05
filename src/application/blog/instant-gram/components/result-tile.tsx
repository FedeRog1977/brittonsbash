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
import { MappedEvent } from '../../../../utils/types';

type ResultTileProps = {
  mappedEvent: MappedEvent;
  eventSport: RowTableProps;
  funcToggleElements: (value: string) => void;
  showDescription: boolean;
  showMatrix: boolean;
};

export const ResultTile: FC<ResultTileProps> = ({
  mappedEvent,
  eventSport,
  funcToggleElements,
  showDescription,
  showMatrix,
}) => {
  const { showElement: showModal, setShowElement: setShowModal } = useShowElement();

  return (
    <Tile type="solid">
      <Flex direction="vertical" gap={isMobile() ? 'xs' : 'md'}>
        {mappedEvent.prefix ? <Typography variant="t1">{mappedEvent.prefix}:</Typography> : null}

        <Flex direction="vertical" rowGap="3xs">
          {mappedEvent.names.length > 1 ? (
            mappedEvent.names.map((name, index) => (
              <Flex key={generateUniqueKey(index)} direction="horizontal" gap="xs">
                <Typography variant="t2" color="mediumGrey" textAlign="right">
                  Part&nbsp;
                  {index + 1}
                </Typography>

                <Typography variant="t2" textAlign="left" markdown>
                  {name}
                </Typography>
              </Flex>
            ))
          ) : (
            <Typography variant="t1" markdown>
              {mappedEvent.names[0]}
            </Typography>
          )}
        </Flex>

        <Typography variant="h4" color="mediumGrey">
          {mappedEvent.startDate}
          {mappedEvent.endDate ? <>&nbsp;&#8212;&nbsp;{mappedEvent.endDate}</> : null}
        </Typography>

        {mappedEvent.showSport ? (
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
            {mappedEvent.features ? <ArticlePreface entries={mappedEvent.features} /> : null}

            <Typography variant="body" textAlign="justify" markdown>
              {mappedEvent.description}
            </Typography>
          </>
        ) : null}

        {isMobile() ? (
          <ImageSlider slides={mappedEvent.images} />
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

        {showMatrix ? <ImageMatrix items={mappedEvent.images} /> : null}

        {showModal ? (
          <Modal isOpen={showModal} onClose={() => setShowModal(!showModal)}>
            <ImageSlider slides={mappedEvent.images} />
          </Modal>
        ) : null}
      </Flex>
    </Tile>
  );
};
