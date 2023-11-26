import React from "react";
import {Container} from './Title.styles';
import Link from "next/link";

interface Props {

}

const Title: React.FC<Props> = ({}) => {

    return (
        <Container>
            <Link href="/home">
                <h1>We sell stuff</h1>
            </Link>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
            </p>
        </Container>
    );
}


export default Title;