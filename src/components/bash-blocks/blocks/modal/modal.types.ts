export type ModalProps = {
    isOpen: boolean
    onClose: () => void
    solid?: boolean
    children: React.ReactElement | React.ReactNode
}
