import React, { useRef, useState, useEffect } from "react"
import styled from 'styled-components';
import useFullscreen from "@am-hooks/use-full-screen";

import { version } from '../../package.json';


const replaceCaret = (el) => {
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

export const COMMANDS = ({ clear } = {}) => {
  const showVersion = ({ command, args }) => ({ command, args, res: version });
  const showHelp = ({ command, args }) => {
    const res = `
cl, clear         clear terminal history
h, help           display list of avalible commands
v, version        print project version
      `
    return { command, args, res };
  };

  return {
    cl: clear,
    clear,
    v: showVersion,
    version: showVersion,
    help: showHelp,
    h: showHelp,
    default: ({ command, args }) => ({ command, args })
  }
}

const TerminalLine = ({ innerRef, executeCommand, initalState }) => {
  const [html, setHtml] = useState(initalState);
  const [lastHtml, setLastHtml] = useState();

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    if (html !== el.innerHTML) {
      el.innerHTML = html;
    }
    setLastHtml(html);
    replaceCaret(el);
  });

  const handleChange = evt => {
    if (event.keyCode == 13) {
      executeCommand(evt.target.innerText)
      setHtml('');
      return;
    }
    setHtml(evt.target.innerHTML);
  };

  return (
    <div>
      <span>
        root: $&nbsp;
      </span>
      <TerminalInput
        ref={innerRef}
        onKeyUp={handleChange}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <TerminalCursor />
    </div>
  )
}

const Command = ({ command, className }) => {
  const { command: commandName, res, at, args } = command;
  return (
    <div className={className}>
      <div>
        <span>
          root: $&nbsp;
        </span>
        {commandName} {args && args.join('')}
      </div>
      <pre>{res}</pre>
    </div>
  )
}
const TerminalHistory = ({ className, history }) => {
  return (
    <div className={className}>
      {
        history.map(command => (
          <Command
            command={command}
            key={`${command.command}-${command.at.getTime()}`}
          />
        ))
      }
    </div>
  )
};

const Terminal = ({ className, children, initialHistory, initalState }) => {
  const [history, setHistory] = useState(initialHistory);
  const input = useRef(null);
  const { element, triggerFull, exitFull } = useFullscreen();

  const pushCommand = (command) => {
    setHistory([...history, { ...command, at: new Date }])
  }

  const executeCommand = (text) => {
    const [command, ...args] = text.trim().split(" ")
    const clear = () => setHistory([])
    const result = (COMMANDS({ clear })[command] || COMMANDS({ clear }).default)({ command, args })
    if (result) {
      pushCommand(result)
    }
  }

  const focusTerminal = evt => {
    evt.stopPropagation();
    evt.nativeEvent.stopImmediatePropagation();
    replaceCaret(input.current);
    input.current.focus();
  }

  return (
    <TerminalWrapper onClick={focusTerminal} ref={element} className={className} >
      <TerminalHeader>
        <TerminalHeaderIcon onClick={exitFull} color="red" />
        <TerminalHeaderIcon onClick={exitFull} color="yellow" />
        <TerminalHeaderIcon onClick={triggerFull} color="green" />
      </TerminalHeader>
      <TerminalBody onClick={focusTerminal} >
        <TerminalHistory history={history} />
        <TerminalLine innerRef={input} initalState={initalState} executeCommand={executeCommand} />
      </TerminalBody>
      {children}
    </TerminalWrapper >
  );
}

export default Terminal;