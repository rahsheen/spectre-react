import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  small: PropTypes.bool,
  large: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  iconWrapper: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const defaultProps = {
  type: 'radio',
  label: '',
  large: false,
  small: false,
  renderAs: 'input'
}

const Radio = ({ children, ...props }) => {
  const {
    className,
    name,
    label,
    type,
    small,
    large,
    renderAs: Element,
    ...attributes
  } = props

  const classNames = classnames(
    'form-radio',
    {
      'input-sm': small,
      'input-lg': large
    },
    className
  )

  const radio = (
    <label className={classNames}>
      <Element
        {...attributes}
        name={name}
        type='radio'
        className={classNames}
      />
      <i className='form-icon' />
      {label}
    </label>
  )

  return radio
}

Radio.propTypes = propTypes
Radio.defaultProps = defaultProps

export default Radio
