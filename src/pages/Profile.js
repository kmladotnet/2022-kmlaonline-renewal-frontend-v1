import React from "react";
import UserPage from "../components/UserProfile/UserPage";

const Profile = () => {
    const USER = [
        {
            id: '1',
            name: 'Keam Sol',
            image: 'https://scontent.ficn1-1.fna.fbcdn.net/v/t1.15752-9/p1080x2048/271895656_627839525165482_1508341237685053032_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=sR4pKAeVA6kAX-am7NS&tn=WldP2aJvz5l8FTT1&_nc_ht=scontent.ficn1-1.fna&oh=03_AVJhFuanJnttP9kd6oAY1xpHva39s6uktPtB6MFP_HV2rQ&oe=621951DE',
            birthday: '2006-09-23',
            email: 'solkeam@gmail.com',
            schoolid: '211023',
            gender: 'male'
        }
    ];
    return <UserPage item = {USER}/>;    
}

export default Profile