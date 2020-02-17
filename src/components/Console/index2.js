import React from "react"
import styled from "styled-components"

const Console = ({ output, isError }) => {
  const Pre = styled.pre`
  color:${isError ? "red" : ''};
`
  return (
    <>
      <h3>Output</h3>
      <Pre>{output}</Pre>
    </>
  )
};


export default Console


