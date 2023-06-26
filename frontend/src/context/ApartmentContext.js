import { createContext, useReducer } from 'react'

export const ApartmentContext = createContext()

export const apartmentsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_APARTMENTS':
      return {
        apartments: action.payload,
      }
    case 'CREATE_APARTMENT':
      return {
        apartments: [action.payload, ...state.apartments],
      }
    case 'DELETE_APARTMENT':
      return {
        apartments: state.apartments.filter(
          (apartment) => apartment._id !== action.payload._id
        ),
      }
    default:
      return state
  }
}

export const ApartmentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apartmentsReducer, {
    apartments: null,
  })
  return (
    <ApartmentContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ApartmentContext.Provider>
  )
}
