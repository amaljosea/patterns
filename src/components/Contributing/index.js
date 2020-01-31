import React from "react"
import githubIcon from '../../icons/github.svg'
import styled from "styled-components"

const ContributingWrapper = styled.div`
  display: flex;
  align-items: center;
`
const Svg = styled.svg`
  margin:10px;
  width:40px;
`

const Contributing = () => (
  <ContributingWrapper>
    For contributing, clone the repo at: <a href="https://github.com/howareyouami/patterns">
      <Svg>
        <use xlinkHref={`#${githubIcon.id}`} />
      </Svg>
    </a>
  </ContributingWrapper>
)


export default Contributing
