import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import Console from '../Console/index2'

const EditorWrapper = styled.div`
`

// const ArgumentInput = styled.input`
//   width: 100%;
// `

const EditorButton = styled.button`
    background-color: ${props => props.primary ? '#9c251e' : 'white'};
    color: ${props => props.primary ? 'white' : '#9c251e'};
    padding: 10px;
    margin-left: 10px;
    width: 150px;
`


const ButtonWrapper = styled.div`
  margin: 10px;
  display: flex;
  justify-content: flex-end;
`

const MonacoEditor = styled.div`
  height: 40vh;
  width: 100%;
  justify-content: flex-end;
  margin: 50px 0px 50px 0px;
  border: 2px solid;
`

let monacoEditor, model


const Editor = ({ solution }) => {
  // const [argument, setArugment] = useState('')
  const [consoleOutput, setConsoleOutput] = useState('')
  const [isError, setIsError] = useState(false)
  const monacoEditorRef = useRef();

  const handleRunClick = () => {
    const userCode = model.getValue()
    setConsoleOutput("");
    let tempConsoleOut = ''
    let tempConsole = console.log
    console.log = function func1(...args) {
      args && args.length && args.forEach((item) => {
        tempConsoleOut += item.toString() + "\n"
      })
    }
    try {
      Function(userCode)()
      setIsError(false)
      setConsoleOutput(tempConsoleOut)
    }
    catch (err) {
      debugger;
      setIsError(true)
      setConsoleOutput(JSON.stringify(err.message))
    }
    console.log = tempConsole
  }

  // const onArgumentChange = (e) => {
  //   setArugment(e.target.value)
  // }

  const handleViewSolutionClick = () => {
    monacoEditor.setValue(solution)
  }

  useEffect(() => {
    if (monacoEditorRef.current) {
      import("monaco-editor").then(monaco => {     
        model = monaco.editor.createModel("");
        monacoEditor = monaco.editor.create(monacoEditorRef.current, {
          value: "",
          language: "javascript",
          fontSize: 20
        });
        monacoEditor.setModel(model);
    });
    }
  }, [])

  return (
    <EditorWrapper>
      <MonacoEditor ref={monacoEditorRef} />
      {/* <ArgumentInput placeholder="Argument goes here..." onChange={onArgumentChange} value={argument} /> */}
      <ButtonWrapper>
        {/* <button>Test</button> */}
        <EditorButton onClick={handleViewSolutionClick}>View solution</EditorButton>
        <EditorButton primary onClick={handleRunClick}>Run</EditorButton>
      </ButtonWrapper>
      <Console
        output={consoleOutput}
        isError={isError}
      />
    </EditorWrapper>
  )
}


export default Editor;
