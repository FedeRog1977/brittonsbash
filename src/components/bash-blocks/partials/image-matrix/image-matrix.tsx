import {
  formatItems,
  generateUniqueKey,
  useShowElement,
} from '../../../../utils';
import styles from './image-matrix.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Flex, Image, Spacing, Typography } from '../../basics';
import { Img } from '../../reference';
import { Modal } from '../../blocks';
import { FC, useState } from 'react';

export type ImageMatrixProps = {
  items: Img[];
  columns?: number;
};

export const ImageMatrix: FC<ImageMatrixProps> = ({ items, columns }) => {
  const formattedItems = formatItems(columns ? columns : 3, items) as Img[][];

  const { showElement: showModal, setShowElement: setShowModal } =
    useShowElement();

  const [image, setImage] = useState<Img>();

  return (
    <>
      {formattedItems.map((row) => (
        <Flex>
          {row.map(({ url, alt, description }, index) => (
            <Flex item key={generateUniqueKey(index)}>
              <a
                onClick={() => {
                  setImage({ url, alt, description });
                  setShowModal(!showModal);
                }}
              >
                <LazyLoadImage className={styles.image} src={url} alt={alt} />
              </a>

              {description ? (
                <Spacing mY={15}>
                  <Typography variant="body" markdown>
                    {description}
                  </Typography>
                </Spacing>
              ) : null}
            </Flex>
          ))}
        </Flex>
      ))}

      <Modal isOpen={showModal} onClose={() => setShowModal(!showModal)}>
        <Image {...(image as Img)} />
      </Modal>
    </>
  );
};
