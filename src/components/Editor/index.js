import React, { useState } from "react"
import styled from "styled-components"
import Console from '../Console'

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

const Editor = ({solution}) => {
  const [argument,setArugment]=useState('')
  const [userCode,setUserCode]=useState('')

  const onArgumentChange=(e)=>{
    setArugment(e.target.value)
  }

  const onUserCodeChange=(e)=>{
    setUserCode(e.target.value)
  }

  return (
    <EditorWrapper>
        <UserCodeArea value={userCode} onChange={onUserCodeChange}/>
        <ArgumentInput placeholder="Argument goes here..." onChange={onArgumentChange} value={argument}/>
        <ButtonWrapper>
            <button>Run</button>
            <button>Test</button>
            <button>View solution</button>
        </ButtonWrapper>
        <Console
        //  solution={solution} 
         solution={userCode}/>
    </EditorWrapper>
)}


export default Editor
