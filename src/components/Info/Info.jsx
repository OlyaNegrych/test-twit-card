import { UserPhoto, Text } from './Info.styled.jsx';

const Info = ({ name, tweets, followers, avatar }) => {
  return (
    <>
      <UserPhoto src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png" />
      <Text>{name}</Text>
      <Text>{tweets} tweets</Text>
      <Text style={{ marginBottom: '20px' }}>{followers} FOLLOWERS</Text>
    </>
  );
};

export default Info;
