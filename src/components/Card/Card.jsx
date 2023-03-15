import { useState } from 'react';
import Button from '../Button/Button';
import Info from 'components/Info/Info';
// import //   SearchFormBtn,
// //   SearchFormBtnLabel,
// //   SearchFormInput,
// '../Card/Card.styled';

const Card = data => {
  const [followers, setFollowers] = useState(100500);

  const handleClick = () => {
    setFollowers((followers += 1));
  };

  return (
    <>
      <section>
        <picture>
          <source src="../../images/logo.png"/>
        </picture>
        <img src="../../images/logo.png" alt="logo"></img>
              <img src="../" alt="quotes"></img>
              
        <Info />
        <Button onClick={handleClick} />
      </section>
    </>
  );
};

export default Card;
