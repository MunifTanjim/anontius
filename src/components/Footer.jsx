import React from 'react'

import { Columns, Column, Container, Content, Footer } from 'bloomer'

const StyledFooter = () => (
  <Footer>
    <Container>
      <Columns>
        <Column>
          <p>
            developed by{' '}
            <a
              href="https://github.com/MunifTanjim"
              target="_blank"
              rel="noopener noreferrer"
            >
              Munif Tanjim
            </a>
          </p>
        </Column>
      </Columns>
      <Content isSize="small">
        <p>
          The source code is licensed under{' '}
          <a
            target="_blank"
            href="https://github.com/MunifTanjim/anontius/blob/master/LICENSE"
          >
            MIT
          </a>.
        </p>
      </Content>
    </Container>
  </Footer>
)

export default StyledFooter
