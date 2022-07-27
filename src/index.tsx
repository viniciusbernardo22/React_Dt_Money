import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { createServer, Model } from 'miragejs'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1000,
          createdAt: new Date('2021-02-15 10:00:00')
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
