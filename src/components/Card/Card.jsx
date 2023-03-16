import { useState } from 'react';
import user from '../../data/user.json';
import Button from '../Button/Button';
import Info from 'components/Info/Info';
import { CardWrapper} from '../Card/Card.styled';

const Card = data => {
  const [followers, setFollowers] = useState(100500);

  const handleClick = () => {
    setFollowers((followers += 1));
  };

  return (
    <>
      <CardWrapper>
        <img src="../../images/logo.png" alt="logo"></img>
        <img src="../images/quotes.png" alt="quotes"></img>

        <Info />
        <Button onClick={handleClick} />
      </CardWrapper>
    </>
  );
};

export default Card;
