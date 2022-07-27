import LogoImg from '../../assets/Logo.svg'
import { Container } from './styles'
import { Content } from './styles'
import Modal from 'react-modal'
import  useState  from 'react'

interface HeaderProps{
onOpenNewTransactionModal:() => void;
}

export function Header({onOpenNewTransactionModal}:HeaderProps){
 
  return (
    <Container>
      <Content>
    <img src={LogoImg} alt="VbMoney" />
    <button type="button" onClick={onOpenNewTransactionModal}>
      Nova Transação
    </button>

    </Content>
    </Container>
    )
}