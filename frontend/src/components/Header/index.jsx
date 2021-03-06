import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import {ReactComponent as Logo} from './hotel.svg'
import { FaChevronLeft, FaMapSigns, FaBook } from 'react-icons/fa'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 10px 10px 10px;
  width: 90%;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;

  & > * + * {
    margin-left: 10px;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;
  font-weight: bold;
  
  & > * + * {
    margin-top: 10px;
  }
`

const Input = styled.input`
  background: none;
	color: inherit;
	border: 2px solid #c7b0b067;
	padding: 2px 5px;
  width: 100%;
`

const Button = styled.button`
  background: none;
  color: inherit;
  border: ${props => (props.withBorder ? '2px solid #c7b0b067' : 'none')};
  border-radius: 4px;
  font-weight: bold;
  color: grey;
  padding: 0px 10px;
`

const Text = styled.p`
  color: grey;
`

const IconWrapper = styled.div`
  padding: 2px;
`

const Header = props => (
  <Wrapper>
    <LogoWrapper>
      <Logo height="90px" fill="grey"/>
      <Text>{props.title}</Text>
    </LogoWrapper>
    <InputWrapper>
      <Button withBorder onClick={() => props.onPageChange('booked')}><IconWrapper><FaBook /></IconWrapper>SUAS RESERVAS</Button>
      <Button withBorder onClick={() => props.onPageChange('reservation')}><IconWrapper><FaMapSigns /></IconWrapper>DISPONÍVEIS</Button>
      <Button withBorder onClick={() => props.history.push('/')}><IconWrapper><FaChevronLeft /></IconWrapper>RETORNAR</Button>
      {/* <Input placeholder="Digite o endereço" />
      <Button><FaSearch color="grey"/></Button> */}
    </InputWrapper>
  </Wrapper>
)

export default withRouter(Header)
