import styled from "styled-components";
import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      {/* header left */}
      <HeaderLeft>
        <HeaderAvatar alt="" />
        <AccessTimeIcon />
      </HeaderLeft>
      {/* header search */}

      {/* header right */}
    </HeaderContainer>
  );
};

export default Header;

// styled-components
const HeaderContainer = styled.div`
  display: flex;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
