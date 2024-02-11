import ReactModal from 'react-modal'
import styles from './modal.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useScreenWidth } from '../../../../scripts'
import { Tile, Spacing } from '../../basics'
import { ModalProps } from './modal.types'

export const Modal: React.FC<ModalProps> = ({ ...props }: ModalProps) => {
    const { isMobile } = useScreenWidth()

    const content: React.ReactElement = (
        <>
            <div className={styles.closeContainer}>
                <FontAwesomeIcon
                    icon={faTimes}
                    className={styles.close}
                    onClick={props.onClose}
                />
            </div>
            {props.children}
        </>
    )

    return (
        <ReactModal
            className={styles.modal}
            overlayClassName={styles.overlay}
            isOpen={props.isOpen}
            onRequestClose={props.onClose}
        >
            {props.solid ? (
                <Tile type="solid">{content}</Tile>
            ) : (
                <Spacing
                    pL={isMobile ? 0 : 150}
                    pR={isMobile ? 0 : 150}
                    pT={24}
                    pB={24}
                >
                    {content}
                </Spacing>
            )}
        </ReactModal>
    )
}