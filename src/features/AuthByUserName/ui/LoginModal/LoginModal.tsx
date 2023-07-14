import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface ILoginModal {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = ({
    className,
    isOpen,
    onClose,
}: ILoginModal) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <LoginForm />
    </Modal>
);
