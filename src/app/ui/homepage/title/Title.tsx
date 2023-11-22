import React from "react";
import {Container} from './Title.styles.tsx';

interface Props {

}

const Title: React.FC<Props> = ({}) => {

    return (
        <Container>
            <h1>We sell stuff</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
            </p>
        </Container>
    );
}


export default Title;