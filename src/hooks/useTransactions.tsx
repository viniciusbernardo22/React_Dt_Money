import { createContext, useEffect, useState, useContext } from 'react'
import { api } from '../services/api'

interface Transaction {
  id: string
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}
// interface TransactionInput {
//   title: string
//   amount: number
//   type: string
//   category: string
// }

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions').then(res => setTransactions(res.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const res = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })

    const { transaction } = res.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
export function useTransactions() {
  const context = useContext(TransactionsContext)
  return context
}
