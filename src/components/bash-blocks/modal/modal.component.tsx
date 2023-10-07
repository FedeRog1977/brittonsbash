import ReactModal from 'react-modal'
import styles from './modal.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useScreenWidth } from '../../../scripts'
import { ModalProps, Spacing, Tile } from '..'

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
            <Tile type={props.solid ? 'solid' : 'clear'} dense noShadow>
                {props.solid ? (
                    <Spacing
                        pL={isMobile ? 0 : 70}
                        pR={isMobile ? 0 : 70}
                        pT={isMobile ? 7.5 : 15}
                        pB={isMobile ? 7.5 : 15}
                    >
                        {content}
                    </Spacing>
                ) : (
                    content
                )}
            </Tile>
        </ReactModal>
    )
}
