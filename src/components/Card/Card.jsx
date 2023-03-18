import { useEffect, useState } from 'react';
import Info from 'components/Info/Info';
import Deco from '../Deco/Deco';
import Button from 'components/Button/Button';
import { CardWrapper, GalleryItem } from '../Card/Card.styled';

const Card = ({ name, tweets, followers, avatar }) => {
  const [isFollowing, setIsFollowing] = useState(() => {
    return JSON.parse(localStorage.getItem(name)) ?? false;
  });

  const [currentFollowers, setCurrentFollowers] = useState(() => {
    return JSON.parse(localStorage.getItem(name + 'F')) ?? followers;
  });

  const handleClick = () => {
    if (!isFollowing) {
      setCurrentFollowers(currentFollowers + 1);
      setIsFollowing(true);
    } else {
      setCurrentFollowers(currentFollowers - 1);
      setIsFollowing(false);
    }
  };

  useEffect(() => {
    localStorage.setItem(name + 'F', JSON.stringify(currentFollowers));
    localStorage.setItem(name, JSON.stringify(isFollowing));
  }, [isFollowing, currentFollowers, name]);

  return (
    <GalleryItem>
      <CardWrapper>
        <Deco />
        <Info
          name={name}
          tweets={tweets}
          followers={currentFollowers}
          avatar={avatar}
        />
        <Button
          handleClick={handleClick}
          isFollowing={isFollowing}
          currentFollowers={currentFollowers}
        />
      </CardWrapper>
    </GalleryItem>
  );
};

export default Card;
