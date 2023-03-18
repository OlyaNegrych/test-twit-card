import logo from 'images/logo.png';
import quotes from 'images/quotes.png';
import rectangle from 'images/rectangle.png';
import ellipse from 'images/Ellipse.png';
import { Logo, Quotes, Rectangle, Ellipse } from './Deco.styled';

const Deco = () => {
  return (
    <>
      <Logo src={logo} alt="logo"></Logo>
      <Quotes src={quotes}></Quotes>
      <Rectangle src={rectangle} alt="rectangle"></Rectangle>
      <Ellipse src={ellipse}></Ellipse>
    </>
  );
};

export default Deco;
