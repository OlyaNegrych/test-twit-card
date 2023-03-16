import { useState } from 'react';
import {UserPhoto} from './Info.styled.jsx';

const Info = data => {
  const [followers, setFollowers] = useState(100500);

  const handleClick = () => {
    setFollowers((followers += 1));
  };

  return (
    <>
      <UserPhoto src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png" />
      <p>Elon Reeve Musk</p>
      <p>777 tweets</p>
      <p>100.500 FOLLOWERS</p>
    </>
  );
};

export default Info;
