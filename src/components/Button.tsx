import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: #727171;
    border: none;
    border-radius: 8px;
    font-size: 24px;
    color: #fff;
`

export enum ButtonType {
    Number,
    Operation
}

export interface Props {
    label: string;
    height?: number;
    position?: [x: number, y: number];
    width?: number;
    type?: ButtonType;
}

const Button = ({ label, position, width, height, type = ButtonType.Operation }: Props) => {
    const styles: React.CSSProperties = {};

    if (position) {
        styles.gridColumnStart = position[0];
        styles.gridRowStart = position[1];
    }

    if (width) {
        styles.gridColumnEnd = `span ${width}`;
    }

    if (height) {
        styles.gridRowEnd = `span ${height}`;
    }

    if (type === ButtonType.Number) {
        styles.color = '#000';
        styles.background = '#E48900';
    }

    return (
        <StyledButton style={styles}>{label}</StyledButton>
    )
};

export default Button;