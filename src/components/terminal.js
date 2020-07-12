import React from "react"
import styled from 'styled-components';

const TerminalWrapper = styled.section`
  text-align: left;
  width: 600px;
  height: 360px;
  z-index: 1;
  border-radius: 10px;
  margin: auto;
  position: relative;
`;

const TerminalHeader = styled.header`
  background: #e0e8f0;
  height: 6rem;
  border-radius: .5rem .5rem 0 0;
  padding-left: .8rem;
`;
const iconsColors = {
  green: '#51d88a',
  yellow: '#fff382',
  red: '#ef5753',
};

const TerminalHeaderIcon = styled.div`
  width: .8rem;
  height: .8rem;
  margin: .5rem .4rem 0 0;
  display: inline-block;
  border-radius: 8px;
  background-color: ${props => iconsColors[props.color] || iconsColors.red};
`;

const TerminalBody = styled.section`
  color: #fff;
  font-family: Operator Mono,Fira Code,Menlo,Consolas,Monaco,Andale Mono,Courier New,Courier;
  font-size: 1rem;
  background: #30353a;
  padding: 1rem;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  top: 30px;
  bottom: 0;
  opacity: .85;
  overflow: auto;
`;

const TerminalCursor = styled.span`
  font-size: 1.2em;
  &:after {
    content:"_";
    opacity: 0;
    animation: terminal-cursor 1s infinite;
    @keyframes terminal-cursor {
      0% {
      opacity: 0;
      }
      50% {
        opacity: 1;
      }
    } 
  }
`;

const Terminal = () => (
  <TerminalWrapper>
    <TerminalHeader>
      <TerminalHeaderIcon color="green" />
      <TerminalHeaderIcon color="yellow" />
      <TerminalHeaderIcon color="red" />
    </TerminalHeader>
    <TerminalBody>
      <div>
        root: $&nbsp;
        <span />
        <TerminalCursor />
      </div>
    </TerminalBody>
  </TerminalWrapper>
)

export default Terminal;