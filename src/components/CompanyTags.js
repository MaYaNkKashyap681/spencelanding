import React from 'react'
import styled from 'styled-components'

function CompanyTags() {
  return (
    <Container>
        <Wrapper>
         <Grid>
              <GridItem>
                  <img src = '../Assets/Facebook Logo.png'/>
              </GridItem>
              <GridItem>
              <img src = '../Assets/Dribbble Logo.png'/>
              </GridItem>
              <GridItem>
              <img src = '../Assets/Youtube Logo.png'/>
              </GridItem>
              <GridItem>
              <img src = '../Assets/Pinterest Logo.png'/>
              </GridItem>
              <GridItem>
              <img src = '../Assets/Twitter Logo.png'/>
              </GridItem>
              <GridItem>
              <img src = '../Assets/Reddit Logo.png'/>
              </GridItem>
              <GridItem>
              <img src = '../Assets/Google Logo.png'/>
              </GridItem>
              <GridItem>
              <img src = '../Assets/Slack Logo.png'/>
              </GridItem>
         </Grid>
        </Wrapper>
    </Container>
  )
}

export default CompanyTags

const Container = styled.div`
  widht: 100vw;
  background-color: #ffffff;
  height: 200px;
`;

const Wrapper = styled.div`
  width: 86vw;
  margin: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(8,minmax(0,1fr));
  grid-gap: 10px;
  margin-top: 30px;
`
const GridItem = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 10px;
  img {
      width: 100%;
      height: 100%;
  }
`