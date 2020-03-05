import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Console from '../Console/index2'
import * as monaco from 'monaco-editor';

const EditorWrapper = styled.div`
`

const ArgumentInput = styled.input`
  width: 100%;
`


const ButtonWrapper = styled.div`
  margin: 10px;
  display: flex;
  justify-content: flex-end;
`
let monacoEditor, model


const Editor = ({ solution }) => {
  const [argument, setArugment] = useState('')
  const [consoleOutput, setConsoleOutput] = useState('')
  const [isError, setIsError] = useState(false)

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

  const onArgumentChange = (e) => {
    setArugment(e.target.value)
  }

  const handleViewSolutionClick = () => {
    monacoEditor.setValue(solution)
  }

  useEffect(() => {
    if (document.getElementById("container")) {
      model = monaco.editor.createModel("");
      monacoEditor = monaco.editor.create(document.getElementById("container"), {
        value: "",
        language: "javascript",
        fontSize: 20
      });
      monacoEditor.setModel(model);
    }
  }, [])

  return (
    <EditorWrapper>
      <div id="container" style={{ height: "40vh", width: "100%", margin: "50px 0px 50px 0px", border: "2px solid" }}></div>
      {/* <ArgumentInput placeholder="Argument goes here..." onChange={onArgumentChange} value={argument} /> */}
      <ButtonWrapper>
        <button onClick={handleRunClick}>Run</button>
        {/* <button>Test</button> */}
        <button onClick={handleViewSolutionClick}>View solution</button>
      </ButtonWrapper>
      <Console
        output={consoleOutput}
        isError={isError}
      />
    </EditorWrapper>
  )
}


export default Editor;
