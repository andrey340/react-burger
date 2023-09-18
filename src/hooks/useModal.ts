import { useState, useCallback } from "react";
import { useDispatch } from "../hooks/useReducer";
import { CLOSE_MODAL } from "../services/actions/modal";

export const useModal = () => {
    const dispatch = useDispatch();
    const [modalState, setModalState] = useState({
        isOpen: false,
    });
    const openModal = useCallback(() => {
        setModalState({
            isOpen: true,
        });
    }, []);

    const closeModal = useCallback(() => {
        setModalState({ isOpen: false });
        dispatch({
            type: CLOSE_MODAL
        })
    }, [dispatch]);

    return {
        modalState,
        openModal,
        closeModal,
    };
};