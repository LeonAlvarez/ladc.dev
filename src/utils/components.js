import React from "react"
import styled from 'styled-components';

import media from "../utils/mediaQueries"

export const Container = styled.div`
    width: 100%;
    ${props => media(props).lessThan("sm")`
        padding: 1rem;
    `}
    ${props => media(props).greaterThan("sm")`
        max-width: 640px;
    `}
    ${props => media(props).greaterThan("md")`
        max-width: 768px;
    `}
    ${props => media(props).greaterThan("lg")`
        max-width: 1024px;
    `}
    ${props => media(props).greaterThan("xl")`
        max-width: 1280px;
    `}
`;

const StyledHeading = styled.div`
    color: ${({ color, theme }) => color || theme.textColor};
    font-size: ${({ fontSize, theme, level }) => fontSize || theme.headings[level].fontSize};
    font-weight: ${({ fontWeight, theme, level }) => fontWeight || theme.headings[level].fontWeight};
    margin: 0;
`;

export const Heading = ({ level = 1, children, color, fontSize, fontWeight, className }) =>
    <StyledHeading
        className={className}
        as={`h${level}`}
        level={level}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
    >
        {children}
    </StyledHeading>

export const Button = styled.button.attrs(({ type, secondary, size, rounded }) => ({
    type: type || "button",
    size: size || "normal",
    rounded: rounded === true
        ? 'rounded'
        : rounded,
    stylesTheme: secondary
        ? 'secondary'
        : 'primary',
}))`
    ${({ rounded, theme }) => rounded && `
        border-radius: ${theme.borderRadius[rounded]};
    `};
    background-color: ${({ bgColor, theme, stylesTheme }) => bgColor || theme.buttons[stylesTheme].bgColor};
    color: ${({ color, theme, stylesTheme }) => color || theme.buttons[stylesTheme].color};
    font-size: ${({ fontSize, theme, size }) => fontSize || theme.buttonsSize[size].fontSize};
    font-weight: ${({ fontWeight, theme, size }) => fontWeight || theme.buttonsSize[size].fontWeight};
    padding: ${({ padding, theme, size }) => padding || theme.buttonsSize[size].padding};
    margin: ${({ margin }) => margin || 0};
`;
