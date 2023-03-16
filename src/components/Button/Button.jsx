import { useState } from 'react';
import {Btn} from './Button.styled';

const Button = data => {
  const [followers, setFollowers] = useState(100500);

  const handleClick = () => {
    setFollowers((followers += 1));
  };

  return <Btn>Follow</Btn>;
};

export default Button;
