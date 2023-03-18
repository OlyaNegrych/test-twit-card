import { UserPhoto, Text } from './Info.styled.jsx';

const Info = ({ name, tweets, followers, avatar }) => {

function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const editedFollowers = numberWithCommas(followers);

  return (
    <>
      <UserPhoto src={avatar} />
      <Text>{name}</Text>
      <Text>{tweets} tweets</Text>
      <Text style={{ marginBottom: '20px' }}>{editedFollowers} FOLLOWERS</Text>
    </>
  );
};

export default Info;
