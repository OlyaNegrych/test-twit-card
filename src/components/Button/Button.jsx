import {Btn} from './Button.styled';

const Button = ({ handleClick, isFollowing }) => {
  // return <Btn onClick={handleClick}>Follow</Btn>;
  return (
    <>
      {!isFollowing ? (
        <Btn onClick={handleClick}>Follow</Btn>
      ) : (
        <Btn style={{ backgroundColor: '#5CD3A8' }} onClick={handleClick}>
          Following
        </Btn>
      )}
    </>
  );
};

export default Button;
