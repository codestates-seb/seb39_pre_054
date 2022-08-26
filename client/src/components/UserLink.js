import styled from 'styled-components';
import { Link } from 'react-router-dom';

function UserLink(props) {
  return <StyledUserLink to={`/users/${props.id}`} {...props} />;
}

export default UserLink;

const StyledUserLink = styled(Link)`
  color: #0074cc;
  text-decoration: none;
  &:hover {
    color: #0a95ff;
  }
`;
