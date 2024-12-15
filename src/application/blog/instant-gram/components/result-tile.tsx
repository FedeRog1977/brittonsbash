import {
  Button,
  ImageMatrix,
  ImageSlider,
  Modal,
  Tile,
  Typography,
  RowTable,
  Flex,
  Grid,
  Spacing,
} from '../../../../components';
import { useShowElement, generateUniqueKey, isMobile } from '../../../../utils';
import { FC } from 'react';
import { MappedEvent } from '../../../../utils/types';

type ResultTileProps = {
  mappedEvent: MappedEvent;
  funcToggleElements: (value: string) => void;
  showMatrix: boolean;
};

export const ResultTile: FC<ResultTileProps> = ({
  mappedEvent,
  funcToggleElements,
  showMatrix,
}) => {
  const { showElement: showModal, setShowElement: setShowModal } = useShowElement();

  return (
    <Tile type="clear">
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
          <RowTable
            titleRow={{
              leftItem: 'Sport',
              rightItem: [mappedEvent.distance, mappedEvent.elevation, mappedEvent.times].join(
                ', '
              ),
            }}
            rows={[
              {
                leftItem: 'Islands',
                rightItem: mappedEvent.islands,
              },
              {
                leftItem: 'Munros',
                rightItem: mappedEvent.munros,
              },
              {
                leftItem: 'Munro Tops',
                rightItem: mappedEvent.munroTops,
              },
              {
                leftItem: 'Corbetts',
                rightItem: mappedEvent.corbetts,
              },
              {
                leftItem: 'Corbett Tops',
                rightItem: mappedEvent.corbettTops,
              },
              {
                leftItem: 'Grahams',
                rightItem: mappedEvent.grahams,
              },
              {
                leftItem: 'SubTwos',
                rightItem: mappedEvent.subTwos,
              },
              {
                leftItem: 'Donalds',
                rightItem: mappedEvent.donalds,
              },
            ]}
          />
        ) : null}

        {mappedEvent.features ? (
          <RowTable
            titleRow={{
              leftItem: 'Features',
            }}
            rows={mappedEvent.features.map(({ title, content }) => ({
              leftItem: title,
              rightItem: content?.join(', '),
            }))}
          />
        ) : null}

        <Typography variant="body" textAlign="justify" markdown>
          {mappedEvent.description}
        </Typography>

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
