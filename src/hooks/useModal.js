import { useState, useCallback } from "react";

export const useModal = () => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        type: 'error',
        item: '',
        errorText: '' 
    });
    const openModal = useCallback(() => {
        setModalState({...modalState, isOpen: true});
    }, []);

    const closeModal = useCallback(() => {
        setModalState({...modalState, isOpen: false});
        console.log('close')
    }, []);

    return {
        modalState,
        openModal,
        closeModal,
    };
};