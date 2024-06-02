import {
  Article,
  ArticlePreface,
  Button,
  ImageMatrix,
  ImageSlider,
  Modal,
  Spacing,
  Tile,
  Typography,
  RowTable,
  Grid,
  Anchor,
} from '../../../../bash-blocks';
import {
  compileEvent,
  useShowElement,
  useScreenWidth,
} from '../../../../../utils';
import { FC, useEffect } from 'react';
import { CompiledEventProps } from '../../../../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  prefix,
} from '@fortawesome/free-solid-svg-icons';

interface ResultTileProps extends CompiledEventProps {
  url: string;
}

export const ResultTile: FC<ResultTileProps> = ({
  url,
  event,
  sport,
  showSport,
}) => {
  const { isMobile } = useScreenWidth();

  const { showElement: showDescription, setShowElement: setShowDescription } =
    useShowElement();
  const { showElement: showMatrix, setShowElement: setShowMatrix } =
    useShowElement();
  const { showElement: showModal, setShowElement: setShowModal } =
    useShowElement();

  const refactoredEvent = compileEvent({ event, sport, showSport });

  useEffect(() => {
    setShowMatrix(!isMobile && true);
  }, []);

  return (
    <Tile type="solid">
      <Anchor id="#result" />
      <Spacing mB={isMobile ? 7.5 : 15}>
        {refactoredEvent.prefix ? (
          <Typography variant="t1" fontFamily="instagram" textAlign="center">
            {refactoredEvent.prefix}:
          </Typography>
        ) : null}
        {refactoredEvent.names.length > 1 ? (
          <Grid alignColumns="auto auto">
            {refactoredEvent.names.map((name, index) => (
              <>
                <Grid
                  columnItem={[1, 2]}
                  rowItem={[index + 1, refactoredEvent.names.length + 1]}
                  textAlign="right"
                >
                  <Typography
                    variant="t1"
                    fontFamily="instagram"
                    color="mediumGrey"
                  >
                    Part&nbsp;
                    {index + 1}&nbsp;
                  </Typography>
                </Grid>
                <Grid
                  columnItem={[2, 2]}
                  rowItem={[index + 1, refactoredEvent.names.length + 1]}
                  textAlign="left"
                >
                  <Typography variant="t1" fontFamily="instagram">
                    {name}
                  </Typography>
                </Grid>
              </>
            ))}
          </Grid>
        ) : (
          <Typography variant="t1" fontFamily="instagram" textAlign="center">
            {refactoredEvent.names[0]}
          </Typography>
        )}
      </Spacing>
      <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
        <Typography
          variant="h4"
          color="mediumGrey"
          textAlign="center"
          paragraphMargins
        >
          {refactoredEvent.startDate}
          {refactoredEvent.endDate ? (
            <>&nbsp;&#8212;&nbsp;{refactoredEvent.endDate}</>
          ) : null}
        </Typography>
      </Spacing>
      {refactoredEvent.showSport ? (
        <Spacing
          mX={isMobile ? -20 : 0}
          mT={isMobile ? 7.5 : 15}
          mB={isMobile ? 7.5 : 15}
        >
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
        </Spacing>
      ) : null}
      <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
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
          func={() => setShowDescription(!showDescription)}
          space
          width="full"
          transition
        />
      </Spacing>
      {showDescription ? (
        <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
          {refactoredEvent.features ? (
            <Spacing mL={isMobile ? 0 : 280} mR={isMobile ? 0 : 280}>
              <ArticlePreface
                entries={[
                  ...(refactoredEvent.features.cities
                    ? [
                        {
                          title: 'Cities:',
                          content: refactoredEvent.features.cities,
                        },
                      ]
                    : [{}]),
                  ...(refactoredEvent.features.districts
                    ? [
                        {
                          title: 'Districts:',
                          content: refactoredEvent.features.districts,
                        },
                      ]
                    : [{}]),
                  ...(refactoredEvent.features.attractions
                    ? [
                        {
                          title: 'Attractions:',
                          content: refactoredEvent.features.attractions,
                        },
                      ]
                    : [{}]),
                  ...(refactoredEvent.features.youthHostels
                    ? [
                        {
                          title: 'Youth Hostels:',
                          content: refactoredEvent.features.youthHostels,
                        },
                      ]
                    : [{}]),
                  ...(refactoredEvent.features.supermarkets
                    ? [
                        {
                          title: 'Supermarkets:',
                          content: refactoredEvent.features.supermarkets,
                        },
                      ]
                    : [{}]),
                  ...(refactoredEvent.features.shops
                    ? [
                        {
                          title: 'Shops:',
                          content: refactoredEvent.features.shops,
                        },
                      ]
                    : [{}]),
                  ...(refactoredEvent.features.foodstuffs
                    ? [
                        {
                          title: 'Foodstuffs:',
                          content: refactoredEvent.features.foodstuffs,
                        },
                      ]
                    : [{}]),
                  ...(refactoredEvent.features.cafes
                    ? [
                        {
                          title: 'Cafés:',
                          content: refactoredEvent.features.cafes,
                        },
                      ]
                    : [{}]),
                  ...(refactoredEvent.features.bakeries
                    ? [
                        {
                          title: 'Bakeries:',
                          content: refactoredEvent.features.bakeries,
                        },
                      ]
                    : [{}]),
                  ...(refactoredEvent.features.gelaterias
                    ? [
                        {
                          title: 'Gelaterias:',
                          content: refactoredEvent.features.gelaterias,
                        },
                      ]
                    : [{}]),
                  ...(refactoredEvent.features.restaurants
                    ? [
                        {
                          title: 'Restaurants:',
                          content: refactoredEvent.features.restaurants,
                        },
                      ]
                    : [{}]),
                  ...(refactoredEvent.features.bars
                    ? [
                        {
                          title: 'Bars:',
                          content: refactoredEvent.features.bars,
                        },
                      ]
                    : [{}]),
                  ...(refactoredEvent.features.filmingLocations
                    ? [
                        {
                          title: 'Filming Locations:',
                          content: refactoredEvent.features.filmingLocations,
                        },
                      ]
                    : [{}]),
                ]}
              />
            </Spacing>
          ) : null}
          {Array.isArray(refactoredEvent.description) ? (
            <Article
              sections={refactoredEvent.description}
              textAlign="justify"
            />
          ) : (
            <Typography variant="body" textAlign="justify">
              {refactoredEvent.description}
            </Typography>
          )}
        </Spacing>
      ) : null}
      {isMobile ? (
        <Spacing
          mX={isMobile ? -20 : 0}
          mT={isMobile ? 7.5 : 15}
          mB={isMobile ? 7.5 : 15}
        >
          <ImageSlider slides={refactoredEvent.images} />
        </Spacing>
      ) : (
        <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
          <Grid alignColumns="auto auto" justifyItems="center">
            <Grid columnItem={[1, 2]}>
              <Button
                variant="clear"
                typeColor={showMatrix ? 'lightBlue' : undefined}
                content="Image matrix"
                func={() => setShowMatrix(!showMatrix)}
              />
            </Grid>
            <Grid columnItem={[2, 2]}>
              <Button
                variant="clear"
                typeColor={showModal ? 'lightBlue' : undefined}
                content="Image slideshow"
                func={() => setShowModal(!showModal)}
              />
            </Grid>
          </Grid>
        </Spacing>
      )}
      {showMatrix ? (
        <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
          <ImageMatrix items={refactoredEvent.images} columns={4} />
        </Spacing>
      ) : null}
      {showModal ? (
        <Modal isOpen={showModal} onClose={() => setShowModal(!showModal)}>
          <ImageSlider slides={refactoredEvent.images} />
        </Modal>
      ) : null}
    </Tile>
  );
};
