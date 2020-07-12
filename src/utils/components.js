import React from "react"
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    @media (min-width: 576px) {
        max-width: 576px;
    }
    @media (min-width: 768px) {
        max-width: 768px;
    }
    @media (min-width: 992) {
        max-width: 992px;
    }
    @media (min-width: 1200px) {
        max-width: 1200px;
    }
`;

const StyledHeading = styled.div`
    color: ${({ color, theme }) => color || theme.textColor};
    font-size: ${({ fontSize, theme, level }) => fontSize || theme.headings[level].fontSize};
    font-weight: ${({ fontWeight, theme, level }) => fontWeight || theme.headings[level].fontWeight};
    margin: 0;
`;

export const Heading = ({ level = 1, children, color, fontSize, fontWeight }) =>
    <StyledHeading
        as={`h${level}`}
        level={level}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
    >
        {children}
    </StyledHeading>
