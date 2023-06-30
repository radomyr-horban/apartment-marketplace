import { createContext, useReducer } from 'react'
import actionTypes from './actionTypes'

export const ApartmentContext = createContext()

const initialState = {
  apartments: [],
  rentedApartments: [],
  aptsCounter: 0,
}

export const apartmentsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.GET_APARTMENTS:
      return {
        ...state,
        apartments: action.payload,
        aptsCounter: state.apartments.length,
      }

    case actionTypes.CREATE_APARTMENT:
      return {
        ...state,
        apartments: [action.payload, ...state.apartments],
        aptsCounter: state.aptsCounter + 1,
      }

    case actionTypes.DELETE_APARTMENT:
      return {
        ...state,
        apartments: state.apartments.filter(
          (apartment) => apartment._id !== action.payload._id
        ),
        aptsCounter: state.aptsCounter - 1,
      }

    case actionTypes.UPDATE_APARTMENT:
      const updatedApartments = state.apartments.map((apartment) =>
        apartment._id === action.payload._id ? action.payload : apartment
      )
      return {
        ...state,
        apartments: updatedApartments,
      }

    //! Rented Apartments
    case actionTypes.GET_RENTED_APARTMENTS:
      return {
        ...state,
        rentedApartments: action.payload,
      }

    case actionTypes.ADD_RENTED_APARTMENT:
      return {
        ...state,
        rentedApartments: [action.payload, ...state.rentedApartments],
      }

    case actionTypes.DELETE_RENTED_APARTMENT:
      return {
        ...state,
        rentedApartments: state.rentedApartments.filter(
          (rentedApartment) => rentedApartment._id !== action.payload._id
        ),
      }

    default:
      return state
  }
}

export const ApartmentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apartmentsReducer, initialState)

  return (
    <ApartmentContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ApartmentContext.Provider>
  )
}
