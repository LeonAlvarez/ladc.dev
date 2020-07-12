import React, { useRef, useState, useEffect } from "react"
import styled from 'styled-components';
import useFullscreen from "@am-hooks/use-full-screen";

const replaceCaret = (el) => {
  if (window) {
    // Place the caret at the end of the element
    const target = document.createTextNode('');
    el.appendChild(target);
    // do not move caret if element was not focused
    const isTargetFocused = document.activeElement === el;
    if (target !== null && target.nodeValue !== null && isTargetFocused) {
      var sel = window.getSelection();
      if (sel !== null) {
        var range = document.createRange();
        range.setStart(target, target.nodeValue.length);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
      if (el instanceof HTMLElement) el.focus();
    }
  }
}

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

const TerminalHeaderIcon = styled.button`
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
  z-index: 10;
  top: 30px;
  border-radius: 0 0 10px 10px;
  bottom: 0;
  opacity: .85;
  cursor: text;
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

const TerminalInput = styled.span.attrs(({ contentEditable }) => ({
  contentEditable: contentEditable !== false ? true : false,
}))`
  outline: none;
  caret-color: transparent;
`;

const TerminalLine = ({ innerRef, executeCommand }) => {
  const [html, setHtml] = useState(`ll`);
  const [lastHtml, setLastHtml] = useState();
  const handleChange = evt => {
    console.log(event)
    if (event.keyCode == 13) {
      executeCommand(evt.target.innerText)
      setHtml('');
      return;
    }
    setHtml(evt.target.innerHTML);
  };

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    if (html !== el.innerHTML) {
      el.innerHTML = html;
    }
    setLastHtml(html);
    //if (window) replaceCaret(el);
  });

  return (
    <div>
      root: $&nbsp;
      < span />
      <TerminalInput
        ref={innerRef}
        onKeyUp={handleChange}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <TerminalCursor />
    </div>
  )
}

const TerminalHistory = ({ className, history }) => {
  return (
    <div>
      {history.map((command, i) => {
        return (
          <div key={i}>{command.text}</div>
        )
      })}
    </div>
  )
};

const Terminal = ({ className, children }) => {
  const [history, setHistory] = useState([]);
  const input = useRef(null);
  const { element, triggerFull, exitFull } = useFullscreen();

  const clear = () => setHistory([]);
  const pushCommand = ({ command }) => setHistory([...history, { text: command }])

  const COMMANDS = {
    cl: clear,
    clear,
    default: ({ command }) => {
      pushCommand({ command })
    }
  }

  const executeCommand = (text) => {
    const [command, args] = text.trim().split(" ")
    console.log({ command, args })
    return (COMMANDS[command] || COMMANDS.default)({ command, args })
  }

  return (
    <TerminalWrapper onClick={_ => input.current.focus()} ref={element} className={className} >
      <TerminalHeader>
        <TerminalHeaderIcon onClick={exitFull} color="red" />
        <TerminalHeaderIcon onClick={exitFull} color="yellow" />
        <TerminalHeaderIcon onClick={triggerFull} color="green" />
      </TerminalHeader>
      <TerminalBody>
        <TerminalHistory history={history} />
        <TerminalLine innerRef={input} executeCommand={executeCommand} />
      </TerminalBody>
      {children}
    </TerminalWrapper >
  );
}

export default Terminal;