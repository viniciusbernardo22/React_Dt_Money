import { Dashboard } from './components/Dashboard'
import { Header } from './components/header'
import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'
import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal'
import {
  TransactionsContext,
  TransactionsProvider
} from './hooks/useTransactions'
//Questão de acessibilidade
Modal.setAppElement('#root')
export function App() {
  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewTransactionModal() {
    setisNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal() {
    setisNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  )
}
