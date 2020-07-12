import { css } from 'styled-components';

const mediaQueries = ({ theme }) => {
  const getSizeFromBreakpoint = (breakpoint) => theme.screens[breakpoint];

  const lessThan = (breakpoint) => (...styles) => css`
        @media (max-width: ${getSizeFromBreakpoint(breakpoint)}) {
            ${css(...styles)}
        }
    `;

  const greaterThan = (breakpoint) => (...styles) => css`
        @media (min-width: ${getSizeFromBreakpoint(breakpoint)}) {
            ${css(...styles)}
        }
    `;

  const between = (minBreakpoint, maxBreakpoint) => (...styles) => css`
        @media (min-width: ${getSizeFromBreakpoint(minBreakpoint)}) and
        (max-width: ${getSizeFromBreakpoint(maxBreakpoint)}) {
        ${css(...styles)}
        }
    `;

  return {
    lessThan,
    greaterThan,
    between,
  };
}

export default mediaQueries;