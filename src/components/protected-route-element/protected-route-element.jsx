import React  from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCookie } from '../../services/utils';
import { getUser } from '../../services/actions/user';



export const ProtectedRouteElement = ({ element, notAuth = false }) => {

    const { isUserAuth } = useSelector((state) => state.user);
    const { isLoading } = useSelector((state) => state.user);

    const cookie = getCookie('token');
    const dispatch = useDispatch();
    if (!isUserAuth && cookie && cookie !== '' && !isLoading) {
        dispatch(getUser('get'));
    } 


    if (isUserAuth && notAuth && !isLoading) {
        return <Navigate to="/" replace />
    }

    if (!isUserAuth && !notAuth && !isLoading) {
        return <Navigate to="/login" replace />
    }

    return element;
} 

ProtectedRouteElement.propTypes = {
    element: PropTypes.elementType.isRequired,
    notAuth: PropTypes.bool.isRequired
}
