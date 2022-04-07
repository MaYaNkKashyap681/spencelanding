import React from 'react'
import styled from 'styled-components'
import Intro from './Intro'
import CompanyTags from './CompanyTags'

function Home() {
  return (
    <Container>
       <Intro/>
       <CompanyTags/>
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 16vh);
`