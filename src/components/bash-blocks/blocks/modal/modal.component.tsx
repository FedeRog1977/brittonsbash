import ReactModal from 'react-modal'
import styles from './modal.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'
import { FC } from 'react'

export type ModalProps = {
    isOpen: boolean
    onClose: () => void
    solid?: boolean
    children: React.ReactElement | React.ReactNode
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, solid, children }) => (
    <ReactModal
        className={cx(styles.modal, { [styles.modalSolid]: solid })}
        overlayClassName={styles.overlay}
        isOpen={isOpen}
        onRequestClose={onClose}
    >
        <div className={styles.closeContainer}>
            <FontAwesomeIcon
                icon={faTimes}
                className={styles.closeIcon}
                onClick={onClose}
            />
        </div>
        {children}
    </ReactModal>
)
