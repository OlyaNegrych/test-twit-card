import { useEffect, useState } from 'react';
import user from '../../data/user.json';
import Info from 'components/Info/Info';
import Deco from '../Deco/Deco';
import { Btn } from '../Button/Button.styled';
import { CardWrapper } from '../Card/Card.styled';
// import Button from '../Button/Button';

const Card = data => {
  const [user, setUser] = useState('Mango Polly');
  const [tweets, setTweets] = useState(999);
  const [followers, setFollowers] = useState(() => {
    return JSON.parse(localStorage.getItem(user + 'F')) ?? 100500;
  });
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
    localStorage.setItem(user + 'F', JSON.stringify(followers));
    localStorage.setItem(user, JSON.stringify(isFollowing));
  }, [isFollowing, followers]);

  return (
    <>
      <CardWrapper>
        <Deco/>
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
