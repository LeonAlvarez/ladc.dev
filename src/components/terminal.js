import React from "react"
import styled from 'styled-components';
import useFullscreen from "@am-hooks/use-full-screen";

const TerminalWrapper = styled.section`
  text-align: left;
  width: 600px;
  max-width: calc(100vw - 1rem);
  height: 360px;
  z-index: 1;
  border-radius: 10px;
  margin: auto;
  position: relative;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const TerminalHeader = styled.div`
  background: #e0e8f0;
  height: 100%;
  z-index: 1;
  border-radius: .5rem .5rem 0 0;
  padding-left: .8rem;
`;
const iconsColors = {
  green: '#48bb78',
  yellow: '#fbd38d',
  red: '#f56565',
};

const TerminalHeaderIcon = styled.div`
  width: .8rem;
  height: .8rem;
  margin: .5rem .4rem 0 0;
  display: inline-block;
  border-radius: 8px;
  background-color: ${props => iconsColors[props.color] || iconsColors.red};
`;

export const TerminalBody = styled.section`
  color: #fff;
  font-family: Operator Mono,Fira Code,Menlo,Consolas,Monaco,Andale Mono,Courier New,Courier;
  font-size: 1rem;
  background: #151c23;
  padding: 1rem;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  top: 30px;
  border-radius: 0 0 10px 10px;
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

const Terminal = ({ className, children }) => {
  const { element, triggerFull, exitFull } = useFullscreen();

  return (
    <TerminalWrapper ref={element} className={className}>
      <TerminalHeader>
        <TerminalHeaderIcon onClick={exitFull} color="red" />
        <TerminalHeaderIcon onClick={exitFull} color="yellow" />
        <TerminalHeaderIcon onClick={triggerFull} color="green" />
      </TerminalHeader>
      <TerminalBody className="terminal__body">
        <div>
          root: $&nbsp;
        <span />
          <TerminalCursor />
        </div>
      </TerminalBody>
      {children}
    </TerminalWrapper>
  );
}

export default Terminal;