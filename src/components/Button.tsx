import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`

`

export interface Props {
    label: string;
}

const Button = ({label}: Props) => {
    return (
        <StyledButton>{label}</StyledButton>
    )
};

export default Button;