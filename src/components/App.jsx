import styled from 'styled-components';
import Card from '../components/Card/Card';
import users from '../data/users.json';

export const App = () => {
  return (
    <Gallery>
      {users.map(user => (
        <Card
          key={user.id}
          name={user.name}
          tweets={user.tweets}
          followers={user.followers}
          avatar={user.avatar}
        />
      ))}
    </Gallery>
  );
};

const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
