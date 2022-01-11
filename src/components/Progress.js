import styled from 'styled-components';

const Progress = styled.div`
  position: fixed;
  right: 0;
  border-radius: 100%;
  background:  linear-gradient(
    to bottom,
    var(--accent2) ${props => props.scroll},
    transparent  0);
  opacity: 50%;
  width:  4px;
  height:  100%;
  z-index:  3;
  
`;

export default Progress;