import React from 'react';
import styled from 'styled-components';

import Button, { ButtonType } from './Button';
import Display from './Display';

const Container = styled.div`
`

const Grid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: 120px repeat(6, 80px);
`

const Calculator = () => {
    return (
        <Container>
            Calculator component
            <Grid>
                <Display width={4}>43543</Display>
                <Button label="(" type={ButtonType.Operation} position={[1, 2]} />
                <Button label=")" type={ButtonType.Operation} position={[2, 2]} />
                <Button label="CLR" type={ButtonType.Operation} position={[3, 2]} />
                <Button label="DEL" type={ButtonType.Operation} position={[4, 2]} />
                <Button label="/" type={ButtonType.Operation} position={[4, 3]} />
                <Button label="x" type={ButtonType.Operation} position={[4, 4]} />
                <Button label="1" type={ButtonType.Number} position={[1, 3]} />
                <Button label="2" type={ButtonType.Number} position={[2, 3]} />
                <Button label="3" type={ButtonType.Number} position={[3, 3]} />
                <Button label="4" type={ButtonType.Number} position={[1, 4]} />
                <Button label="5" type={ButtonType.Number} position={[2, 4]} />
                <Button label="6" type={ButtonType.Number} position={[3, 4]} />
                <Button label="7" type={ButtonType.Number} position={[1, 5]} />
                <Button label="8" type={ButtonType.Number} position={[2, 5]} />
                <Button label="9" type={ButtonType.Number} position={[3, 5]} />
                <Button label="-" type={ButtonType.Operation} position={[4, 5]} />
                <Button label="+/-" type={ButtonType.Operation} position={[1, 6]} />
                <Button label="0" type={ButtonType.Number} position={[2, 6]} />
                <Button label="." type={ButtonType.Operation} position={[3, 6]} />
                <Button label="+" type={ButtonType.Operation} position={[4, 6]} />
                <Button label="^2" type={ButtonType.Operation} position={[1, 7]} />
                <Button label="SQRT" type={ButtonType.Operation} position={[2, 7]} />
                <Button label="=" type={ButtonType.Operation} position={[3, 7]} width={2} />
            </Grid>
        </Container>
    )
};

export default Calculator;