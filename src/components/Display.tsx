import React from 'react';
import styled from 'styled-components';

const StyledDisplay = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: #fff;
    border-radius: 8px;
    font-size: 48px;
    padding: 0 24px;
`

export interface Props {
    width?: number,
    children?: string
}

const Display = ({ width, children }: Props) => {
    const styles: React.CSSProperties = {}

    if (width) {
        styles.gridColumnEnd = `span ${width}`
    }
    return (
        <StyledDisplay style={styles}>{children}</StyledDisplay>
    )
};

export default Display;