import styled from "styled-components";
import logo from "../images/logo.png";
import { Person, Search, ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <Img src={logo} />
      </Logo>
      <Links>
        <Link to="/">Home</Link>
        <Link>Shop</Link>
        <Link>About</Link>
        <Link>Latest</Link>
        <Link>Blog</Link>
        <Link>Pages</Link>
        <Link>Contact</Link>
      </Links>
      <Icons>
        <Search />
        <Person />
        <ShoppingCart />
      </Icons>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 10;
`;
const Logo = styled.div``;
const Img = styled.img``;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Link = styled(NavLink)`
  color: #000;
  text-decoration: none;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #000;
    transition: width 0.2s linear;
  }

  &:hover::after {
    width: 50%;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
