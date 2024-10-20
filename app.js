
const names = ['Fred', 'Mary', 'Adam', 'Kasiyan', 'Kostya']

const filterName = (names) => {
  return names?.filter(name => name[0] === 'K')
}

console.log(filterName(names));
