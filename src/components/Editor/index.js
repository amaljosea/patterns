import React from "react"
import styled from "styled-components"

const EditorWrapper = styled.div`
`

const TextArea = styled.textarea`
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

const Editor = () => (
    <EditorWrapper>
        <TextArea/>
        <ArgumentInput placeholder="Argument goes here..."/>
        <ButtonWrapper>
            <button>Run</button>
            <button>Test</button>
            <button>View solution</button>
        </ButtonWrapper>
    </EditorWrapper>
)


export default Editor
