import ReactModal from 'react-modal'
import { Spacing, Tile } from '.'
import styles from '../styles/modal.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useScreenWidth } from '../../../scripts'

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    solid?: boolean
    title?: string
    children: React.ReactElement | React.ReactNode
}

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
