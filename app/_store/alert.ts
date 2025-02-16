import {ReactNode} from "react";
import {create} from "zustand/react";

type OpenModalProps = {
    type: 'alert' | 'confirm',
    titleContent: string | ReactNode
    bodyContent: string | ReactNode
    onClickConfirmButton?: () => void
    onClickCancelButton?: () => void
}

interface UseAlertStoreType{
    type: 'alert' | 'confirm',
    isOpen: boolean;
    titleContent: string | ReactNode;
    bodyContent: string | ReactNode;
    onClickConfirmButton: (() => void) | null
    onClickCancelButton: (() => void) | null
    actions: {
        openModal: (openModalProps: OpenModalProps) => void;
        resetState: () => void;
    }
}

export const useAlertStore = create<UseAlertStoreType>((set) => ({
    type: 'alert',
    isOpen: false,
    titleContent: '',
    bodyContent: '',
    onClickConfirmButton: null,
    onClickCancelButton: null,
    actions: {
        resetState: () => {
            set({
                isOpen: false,
                titleContent: '',
                bodyContent: '',
                onClickConfirmButton: null,
                onClickCancelButton: null
            })
        },
        openModal: ({type, titleContent, bodyContent, onClickConfirmButton, onClickCancelButton}: OpenModalProps) => {
            set({
                type: type,
                isOpen: true,
                titleContent,
                bodyContent,
                onClickConfirmButton: onClickConfirmButton,
                onClickCancelButton: onClickCancelButton
            })
        }
    }
}))

export const useAlertActions = () => useAlertStore((store) => store.actions);