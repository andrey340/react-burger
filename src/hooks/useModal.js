import { useState, useCallback } from "react";

export const useModal = () => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        type: 'order',
        item: '',
        title: ''
    });
    const openModal = useCallback((type = 'order', item = {}, title = '') => {
        setModalState({
            isOpen: true,
            type: type,
            item: item,
            title: title
        });
    }, []);

    const closeModal = useCallback(() => {
        setModalState({ ...modalState, isOpen: false });
    }, []);

    return {
        modalState,
        openModal,
        closeModal,
    };
};