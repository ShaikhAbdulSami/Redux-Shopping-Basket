import { createSlice, configureStore } from "@reduxjs/toolkit"
import { InitialState } from './state'

const BasketSlice = createSlice({
    name: 'cart',
    initialState: InitialState,
    reducers: {
        addProd: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }
                return {
                    ...item,
                    added: true,
                    quantity: item.quantity + 1
                }
            })
        },
        removeProd: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }
                else if (item.quantity <= 1) {
                    return {
                        ...item,
                        quantity: 0,
                        added: false,
                    }
                }
                return {
                    ...item,
                    quantity: item.quantity - 1
                }

            })
        },

        clearCart: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }

                return {
                    ...item,
                    quantity: 0,
                    added: false,
                }
            })
        },
        incProd: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }

                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            })
        }
    }
})

const store = configureStore({ reducer: BasketSlice.reducer })

export const { addProd, removeProd, clearCart, incProd } = BasketSlice.actions

export { BasketSlice, store }