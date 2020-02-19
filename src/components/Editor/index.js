import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Console from '../Console/index2'
import * as monaco from 'monaco-editor';

const EditorWrapper = styled.div`
`

const UserCodeArea = styled.textarea`
  width: 100%;
  height: 40vh;
`

const ArgumentInput = styled.input`
  width: 100%;
`


const ButtonWrapper = styled.div`
  margin: 10px;
  display: flex;
  justify-content: flex-end;
`

const Editor = ({ solution }) => {
  const [argument, setArugment] = useState('')
  const [userCode, setUserCode] = useState('')
  const [consoleOutput, setConsoleOutput] = useState('')
  const [isError, setIsError] = useState(false)

  const handleRunClick = () => {
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

  const onUserCodeChange = (e) => {
    setUserCode(e.target.value)
  }

  const handleViewSolutionClick = () => {
    setUserCode(solution)
  }

  useEffect(()=>{
    if(document.getElementById("container")){
      monaco.editor.create(document.getElementById("container"), {
        value: solution,
        language: "javascript",
        fontSize: 20
      });
    }
  },[])
  
  return (
    <EditorWrapper>
      <div id="container" style={{height:"40vh", width:"100%", margin:"50px 0px 50px 0px", border: "2px solid" }}></div>
      {/* <UserCodeArea value={userCode} onChange={onUserCodeChange} /> */}
      <ArgumentInput placeholder="Argument goes here..." onChange={onArgumentChange} value={argument} />
      <ButtonWrapper>
        <button onClick={handleRunClick}>Run</button>
        <button>Test</button>
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
