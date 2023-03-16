import { UserPhoto, Text } from './Info.styled.jsx';

const Info = ({ user, tweets, followers }) => {
  return (
    <>
      <UserPhoto src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png" />
      <Text>{user}</Text>
      <Text>{tweets} tweets</Text>
      <Text style={{ marginBottom: '26px' }}>{followers} FOLLOWERS</Text>
    </>
  );
};

export default Info;
