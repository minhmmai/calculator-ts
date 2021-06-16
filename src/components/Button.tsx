import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: #e48900;
    border: none;
    font-size: 24px;
`

export interface Props {
    label: string;
    height?: number;
    position?: [x: number, y:number];
    width?: number;
}

const Button = ({label, position, width, height}: Props) => {
    const styles: React.CSSProperties = {};

    if(position){
        styles.gridColumnStart = position[0];
        styles.gridRowStart = position[1];
    }

    if(width){
        styles.gridColumnEnd = `span ${width}`;
    }

    if(height){
        styles.gridRowEnd = `span ${height}`;
    }

    return (
        <StyledButton style={styles}>{label}</StyledButton>
    )
};

export default Button;