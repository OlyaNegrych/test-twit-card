import { useState } from 'react';
import //   SearchFormBtn,
//   SearchFormBtnLabel,
//   SearchFormInput,
'./Info.styled.jsx';

const Info = data => {
  const [followers, setFollowers] = useState(100500);

  const handleClick = () => {
    setFollowers((followers += 1));
  };

  return (
    <>
      <p>777 tweets</p>
      <p>100.500 FOLLOWERS</p>
    </>
  );
};

export default Info;
