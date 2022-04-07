import React from 'react'
import styled from 'styled-components'
import Intro from './Intro'
import CompanyTags from './CompanyTags'
import FlashCard from './FlashCard'
import FlashCard22 from './FlashCard22'
import Footer from './Footer'

function Home() {
  return (
    <Container>
       <Intro/>
       <CompanyTags/>
       <FlashCard/>
       <FlashCard22/>
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100vw;
`