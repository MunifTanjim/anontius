import React from 'react'
import { Columns, Column, Container, Content, Footer } from 'bloomer'

const StyledFooter = () => (
  <Footer>
    <Container>
      <Columns>
        <Column>
          <p>
            developed by{' '}
            <Content
              tag="a"
              hasTextColor="black"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MunifTanjim"
            >
              Munif Tanjim
            </Content>
          </p>
        </Column>
      </Columns>
      <Content isSize="small">
        <p>
          The source code is licensed under{' '}
          <Content
            tag="a"
            hasTextColor="black"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MunifTanjim/anontius/blob/master/LICENSE"
          >
            MIT
          </Content>.
        </p>
      </Content>
    </Container>
  </Footer>
)

export default StyledFooter
