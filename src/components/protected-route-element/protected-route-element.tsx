import React, { FC, ReactElement }  from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCookie } from '../../services/utils';
import { getUser } from '../../services/actions/user';

interface IProtected {
    element: ReactElement;
    notAuth?: boolean;
}

export const ProtectedRouteElement: FC<IProtected> = ({ element, notAuth = false }) => {

    const isUserAuth = useSelector((state: any) => state.user.isUserAuth);
    const isLoading = useSelector((state: any) => state.user.isLoading);

    const cookie = getCookie('token');
    const dispatch = useDispatch();

    const location = useLocation();
    const from = location.state?.from || '/';

    if (!isUserAuth && cookie && cookie !== '' && !isLoading) {
        //@ts-ignore
        dispatch(getUser('get'));
    } 

    if (isUserAuth && notAuth && !isLoading) {
        return <Navigate to={ from } />;
    }

    if (!isUserAuth && !notAuth && !isLoading) {
        return <Navigate to="/login" state={{ from: location}}/>;
    }
    

    return element;
} 
