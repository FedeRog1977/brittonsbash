import {
  formatItems,
  generateUniqueKey,
  useShowElement,
} from '../../../../utils';
import styles from './image-matrix.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Image, Spacing, Typography } from '../../basics';
import { Img } from '../../reference';
import { Modal } from '../../blocks';
import { FC, useState } from 'react';
import { FlexTemp } from '../../basics/flex-temp/flex';
import { FlexItemTemp } from '../../basics/flex-temp/flex-item';
import { SpacingTemp } from '../../basics/spacing-temp';

export type ImageMatrixProps = {
  items: Img[];
};

export const ImageMatrix: FC<ImageMatrixProps> = ({ items }) => {
  const { showElement: showModal, setShowElement: setShowModal } =
    useShowElement();

  const [image, setImage] = useState<Img>();

  return (
    <>
      <FlexTemp
        direction="horizontal"
        alignHorizontal="center"
        alignVertical="center"
        gap="xs"
      >
        {items.map(({ url, alt, description }, index) => (
          <FlexItemTemp
            key={generateUniqueKey(index)}
            basis={{ xs: 12, lg: 2 }}
          >
            <a
              onClick={() => {
                setImage({ url, alt, description });
                setShowModal(!showModal);
              }}
            >
              <LazyLoadImage className={styles.image} src={url} alt={alt} />
            </a>

            {description ? (
              <SpacingTemp marginY="xs">
                <Typography variant="footnote" textAlign="center" markdown>
                  {description}
                </Typography>
              </SpacingTemp>
            ) : null}
          </FlexItemTemp>
        ))}
      </FlexTemp>

      <Modal isOpen={showModal} onClose={() => setShowModal(!showModal)}>
        <Image {...(image as Img)} />
      </Modal>
    </>
  );
};
