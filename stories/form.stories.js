import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

import {
  Icon, Button, Label,
  FormGroup, Input, Checkbox, Radio,
  Container, Col, Row
} from '../src'

storiesOf('Forms', module)
  .add('Default', () => (
    <Container>
      <Row>
        <Col all={6} xs={12}>
          <form>
            <FormGroup>
              <Label form htmlFor='input-example-1'>Name</Label>
              <Input placeholder='username' id='input-example-1' />
            </FormGroup>

            <FormGroup>
              <Label form htmlFor='input-example-2'>Password</Label>
              <Input type='password' id='input-example-2' placeholder='password' />
            </FormGroup>

            <FormGroup>
              <Label form htmlFor='input-example-3'>Email</Label>
              <Input id='input-example-3' type='email' placeholder='email'
                iconLeft={boolean('iconLeft', true)}
                iconRight={boolean('iconRight', false)}
              >
                <Icon formIcon icon={text('Icon', 'mail')} />
              </Input>
            </FormGroup>

            <Button type='submit'>
              Create Account
              <Icon icon='check' />
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  )).add('Checkbox', () => (
    <Container>
      <Row>
        <Col all={6} xs={12}>
          <form>
            <Checkbox label='Basic Checkbox' />
            <Checkbox label='Disabled Checkbox' disabled />
            <Checkbox label='Indeterminate Checkbox' indeterminate />
            <Checkbox label='Small'
              small={boolean('small', true)}
              large={boolean('large', false)} />
          </form>
        </Col>
      </Row>
    </Container>
  )).add('Radio', () => (
    <Container>
      <Row>
        <Col all={6} xs={12}>
          <form>
            <Radio label='Basic Radio' />
            <Radio label='Disabled Radio' disabled />
            <Radio label='Indeterminate Radio' indeterminate />
            <Radio label='Small'
              small={boolean('small', true)}
              large={boolean('large', false)} />
          </form>
        </Col>
      </Row>
    </Container>
  ))
