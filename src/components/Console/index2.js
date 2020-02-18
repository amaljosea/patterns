import React from "react"
import styled from "styled-components"

const Console = ({ output, isError }) => {
  const Pre = styled.pre`
  height: 40vh;
  overflow: scroll;
  width: 100%;
  color:${isError ? "red" : ''};
`
  return (
    <div>
      <h3>Output</h3>
      <Pre>{output}</Pre>
    </div>
  )
};


export default Console


