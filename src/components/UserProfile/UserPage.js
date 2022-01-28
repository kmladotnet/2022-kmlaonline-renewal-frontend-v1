import React from 'react';

import UserPageNav from '../Navigation/UserPageNav'
import UserInfo from './UserInfo';

const UserPage = () => {
    return (
        <React.Fragment>
            <UserPageNav />
            <UserInfo />
        </React.Fragment>
    );
}

export default UserPage;