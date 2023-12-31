import React, { FC, ReactElement }  from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from '../../hooks/useReducer';
import { getCookie } from '../../services/utils';
import { getUser } from '../../services/actions/user';

interface IProtected {
    element: ReactElement;
    notAuth?: boolean;
}

export const ProtectedRouteElement: FC<IProtected> = ({ element, notAuth = false }) => {

    const isUserAuth = useSelector((state) => state.user.isUserAuth);
    const isLoading = useSelector((state) => state.user.isLoading);

    const cookie = getCookie('token');
    const dispatch = useDispatch();

    const location = useLocation();
    let from = location.state?.from || '/';

    if (!isUserAuth && cookie && cookie !== '' && !isLoading) {
        dispatch(getUser());
    } 

    if (isUserAuth && notAuth && !isLoading) {
        return <Navigate to={ from } />;
    }

    if (!isUserAuth && !notAuth && !isLoading) {
        return <Navigate to="/login" state={{ from: location}}/>;
    }
    

    return element;
} 
