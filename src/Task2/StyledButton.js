import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background-color: #45a049;
    }
`;

const Button = ({ label, onClick }) => {
    return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
