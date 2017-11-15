import React from 'react'
import { Container, Field, Label, Control, Input, Button } from 'bloomer'

const LoginForm = ({ handleChange, handleLogin, valid }) => (
  <Container tag="form" style={{ maxWidth: '35em' }}>
    <Field>
      <Label>Email</Label>
      <Control>
        <Input
          type="email"
          name="email"
          isSize="large"
          isColor={valid.email ? '' : 'danger'}
          onChange={handleChange}
          required
        />
      </Control>
    </Field>
    <Field>
      <Label>Password</Label>
      <Control>
        <Input
          type="password"
          name="pass"
          isSize="large"
          isColor={valid.pass ? '' : 'danger'}
          onChange={handleChange}
          required
        />
      </Control>
    </Field>
    <Field isGrouped="centered">
      <Control>
        <Button
          type="submit"
          isColor="primary"
          isSize="large"
          onClick={handleLogin}
        >
          Login
        </Button>
      </Control>
      <Control>
        <Button type="reset" isSize="large">
          Clear
        </Button>
      </Control>
    </Field>
  </Container>
)

export default LoginForm
