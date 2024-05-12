'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: number) => void
  removeToCart: (productId: number) => void
}

const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (productId: number) => {
    setCartItems((state) => {
      const productInCart = state.find((item) => item.productId === productId)

      if (productInCart) {
        return state.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...state, { productId, quantity: 1 }]
      }
    })
  }

  const removeToCart = (productId: number) => {
    setCartItems((state) => {
      return state.filter((item) => item.productId !== productId)
    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart, removeToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
