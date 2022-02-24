import React from 'react';

import UserPageNav from '../components/Navigation/UserPageNav'
import UserInfo from '../components/UserProfile/UserInfo';

const UserPage = () => {
    const USER = [
        {
            id: '1',
            name_en: 'Keam Sol',
            name_kr: '김솔',
            image: 'https://scontent.ficn1-1.fna.fbcdn.net/v/t1.15752-9/p1080x2048/271895656_627839525165482_1508341237685053032_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=sR4pKAeVA6kAX-am7NS&tn=WldP2aJvz5l8FTT1&_nc_ht=scontent.ficn1-1.fna&oh=03_AVJhFuanJnttP9kd6oAY1xpHva39s6uktPtB6MFP_HV2rQ&oe=621951DE',
            birthday: '2006-09-23',
            email: 'solkeam@gmail.com',
            schoolid: '211023',
            gender: 'male',
            phone: '010-0000-0000',
            comments: 0,
            intro: '안녕하세요! 국내 정시입니다.',
        }
    ];

    return (
        <React.Fragment>
            <UserPageNav />
            <UserInfo userList = {USER}/>
        </React.Fragment>
    );
}

export default UserPage;