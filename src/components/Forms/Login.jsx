import React from 'react'
import { Container, Field, Label, Control, Input, Button } from 'bloomer'
import { translate } from 'react-i18next'
import { accentColor } from '../../config'

const LoginForm = ({ handleChange, handleLogin, valid, t }) => (
  <Container tag="form" style={{ maxWidth: '35em' }}>
    <Field>
      <Label>{t('form.login.email')}</Label>
      <Control>
        <Input
          type="email"
          name="email"
          isSize="large"
          isColor={valid.email ? accentColor : 'danger'}
          onChange={handleChange}
          required
        />
      </Control>
    </Field>
    <Field>
      <Label>{t('form.login.password')}</Label>
      <Control>
        <Input
          type="password"
          name="pass"
          isSize="large"
          isColor={valid.pass ? accentColor : 'danger'}
          onChange={handleChange}
          required
        />
      </Control>
    </Field>
    <Field isGrouped="centered">
      <Control>
        <Button
          type="submit"
          isColor={accentColor}
          isSize="large"
          onClick={handleLogin}
        >
          {t('form.login.button.submit')}
        </Button>
      </Control>
      <Control>
        <Button type="reset" isColor={accentColor} isSize="large">
          {t('form.login.button.reset')}
        </Button>
      </Control>
    </Field>
  </Container>
)

export default translate()(LoginForm)
