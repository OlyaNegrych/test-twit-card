import { useEffect, useState } from 'react';
// import user from '../../data/user.json';
// import Button from '../Button/Button';
import { Btn } from '../Button/Button.styled';
import Info from 'components/Info/Info';
import { CardWrapper, BG } from '../Card/Card.styled';

const Card = data => {
  const [user, setUser] = useState('Mango Polly');
  const [tweets, setTweets] = useState(777);
  const [followers, setFollowers] = useState(100500);
  const [isFollowing, setIsFollowing] = useState(() => {
     return JSON.parse(localStorage.getItem(user)) ?? false;
   });

  const handleClick = () => {
    if (!isFollowing) {
      setFollowers(followers + 1);
      setIsFollowing(true);
    } else {
      setFollowers(followers - 1);
      setIsFollowing(false);
    }
  };

  useEffect(() => {
    localStorage.setItem(user, JSON.stringify(isFollowing));
  }, [isFollowing]);

  // в локалстореджі треба запамятати ще кількість фоловерів, 
  // бо при перезавантаж збивається на поч.знач

  return (
    <>
      <CardWrapper>
        <BG></BG>
        <img src="../../images/logo.png" alt="logo"></img>
        <img src="../../images/quotes.png" alt="quotes"></img>
        <img src="../images/rectangle.png" alt="rectangle"></img>
        <img src="../images/ellipse.png" alt="ellipse"></img>
        <Info user={user} tweets={tweets} followers={followers} />
        {!isFollowing ? (
          <Btn onClick={handleClick}>Follow</Btn>
        ) : (
          <Btn style={{ backgroundColor: '#5CD3A8' }} onClick={handleClick}>
            Following
          </Btn>
        )}
        {/* <Button onClick={handleClick} isFollowing={isFollowing} />; */}
      </CardWrapper>
    </>
  );
};

export default Card;
