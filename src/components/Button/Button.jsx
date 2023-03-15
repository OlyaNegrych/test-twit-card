import { useState } from 'react';
import { Btn } from './Button';
import //   SearchFormBtn,
//   SearchFormBtnLabel,
//   SearchFormInput,
'./Button.styled';

const Button = data => {
  const [followers, setFollowers] = useState(100500);

  const handleClick = () => {
    setFollowers((followers += 1));
  };

  return <button>Follow</button>;
};

export default Button;
