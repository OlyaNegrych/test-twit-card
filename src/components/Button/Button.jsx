import { Btn } from './Button.styled';

const Button = ({ handleClick, isFollowing }) => {
  return (
    <>
   
      <Btn
        onClick={handleClick}
        style={{ backgroundColor: isFollowing ? '#5CD3A8' : '#ebd8ff' }}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </Btn>

    </>
  );
};

export default Button;
