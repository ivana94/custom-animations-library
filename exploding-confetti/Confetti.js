import React, { useState } from "react";
import styled, { css } from "styled-components";

const generateConfettiExplosionAnimation = () => {
    let styles = "";

    for (let i = 0; i < 100; i += 1) {
        styles += `i:nth-of-type(${i}) {
            transform: translate3d(
                ${generateRandomNumber(800) - 100}px,
                ${generateRandomNumber(500) - 100}px,
                0
            )
            rotate(${generateRandomNumber(360)}deg);
            background: hsla(${generateRandomNumber(360)}, 100%, 50%, 1);
            animation: confetti-explosion 700ms ease-in-out;
            opacity: 0;
        }
     `;
    }
    return css`
        ${styles}
    `;
};

const generateRandomNumber = (max) => Math.floor(Math.random() * max);

const ConfettiStyles = styled.span`
    position: absolute;

    i {
        position: absolute;
        display: block;
        left: -75px;
        margin-left: 15%;
        width: 7px;
        height: 9px;
        opacity: 1;
    }

    ${generateConfettiExplosionAnimation()};
`;
const Confetti = () => {
    const [confettiActive, setConfettiActive] = useState(false);
    const triggerConfetti = () => {
        setConfettiActive(true);
    };
    return (
        <>
            <h1 onMouseOver={triggerConfetti}>hover over me :)</h1>
            {confettiActive && (
                <ConfettiStyles onAnimationEnd={() => setConfettiActive(false)}>
                    {[...new Array(100)].map((_, index) => (
                        <i key={index}></i>
                    ))}
                </ConfettiStyles>
            )}
        </>
    );
};

export default Confetti;
