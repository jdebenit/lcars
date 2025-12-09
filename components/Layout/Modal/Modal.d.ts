import { default as React } from '../../../../node_modules/react';
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}
export declare const Modal: React.FC<ModalProps>;
