import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Container = styled.div`
    flex: 1;
`

const Grid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: repeat(6, 80px);
`

const Calculator = () => {
    return (
        <Container>
            Calculator component
            <Grid>
                <Button label="(" position={[1, 1]}/>
                <Button label=")" position={[2, 1]}/>
                <Button label="CLR" position={[3, 1]}/>
                <Button label="DEL" position={[4, 1]}/>
                <Button label="/" position={[4, 2]}/>
                <Button label="x" position={[4, 3]}/>
                <Button label="1" position={[1, 2]}/>
                <Button label="2" position={[2, 2]}/>
                <Button label="3" position={[3, 2]}/>
                <Button label="4" position={[1, 3]}/>
                <Button label="5" position={[2, 3]}/>
                <Button label="6" position={[3, 3]}/>
                <Button label="7" position={[1, 4]}/>
                <Button label="8" position={[2, 4]}/>
                <Button label="9" position={[3, 4]}/>
                <Button label="-" position={[4, 4]}/>
                <Button label="+/-" position={[1, 5]}/>
                <Button label="0" position={[2, 5]}/>
                <Button label="." position={[3, 5]}/>
                <Button label="+" position={[4, 5]}/>
                <Button label="^2" position={[1, 6]}/>
                <Button label="SQRT" position={[2, 6]}/>
                <Button label="=" position={[3, 6]} width={2}/>
            </Grid>
        </Container>
    )
};

export default Calculator;