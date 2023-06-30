const sortByPrice = (apartmentsCopy, sortType) => {
  return apartmentsCopy.sort((a, b) =>
    sortType === 'low-to-high'
      ? a.price - b.price
      : sortType === 'high-to-low'
      ? b.price - a.price
      : 0
  )
}

export default sortByPrice
