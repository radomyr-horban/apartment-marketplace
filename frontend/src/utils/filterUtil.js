const filterByRooms = (apartmentsCopy, filterValue) => {
  return filterValue !== 'default'
    ? apartmentsCopy.filter((apt) => apt.rooms === +filterValue)
    : apartmentsCopy
}

export default filterByRooms
