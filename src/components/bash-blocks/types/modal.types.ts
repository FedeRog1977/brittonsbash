export type ModalProps = {
    isOpen: boolean
    onClose: () => void
    solid?: boolean
    title?: string
    children: React.ReactElement | React.ReactNode
}
