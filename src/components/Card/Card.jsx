import { useEffect, useState } from 'react';
import Info from 'components/Info/Info';
import Deco from '../Deco/Deco';
import { Btn } from '../Button/Button.styled';
import { CardWrapper, GalleryItem } from '../Card/Card.styled';

const Card = ({ name, tweets, followers, avatar }) => {
  const [isFollowing, setIsFollowing] = useState(() => {
    return JSON.parse(localStorage.getItem(name)) ?? false;
  });

  const [correntFollowers, setCurrentFollowers] = useState(() => {
    return JSON.parse(localStorage.getItem(name + 'F')) ?? followers;
  });

  const handleClick = () => {
    if (!isFollowing) {
      setCurrentFollowers(correntFollowers + 1);
      setIsFollowing(true);
    } else {
      setCurrentFollowers(correntFollowers - 1);
      setIsFollowing(false);
    }
  };

  useEffect(() => {
    localStorage.setItem(name + 'F', JSON.stringify(correntFollowers));
    localStorage.setItem(name, JSON.stringify(isFollowing));
  }, [isFollowing, correntFollowers]);

  return (
    <GalleryItem>
      <CardWrapper>
        <Deco />
        <Info
          name={name}
          tweets={tweets}
          followers={correntFollowers}
          avatar={avatar}
        />
        {!isFollowing ? (
          <Btn onClick={handleClick}>Follow</Btn>
        ) : (
          <Btn style={{ backgroundColor: '#5CD3A8' }} onClick={handleClick}>
            Following
          </Btn>
        )}
      </CardWrapper>
    </GalleryItem>
  );
};

export default Card;
