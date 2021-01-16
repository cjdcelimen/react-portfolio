import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Button = styled(LinkS)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#2a3d45' : ' #2a3d45')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#f0edee' : '#f0edee')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#ff5a5f' : '#ff5a5f')};
        transform: scale(1.1);
    }
`