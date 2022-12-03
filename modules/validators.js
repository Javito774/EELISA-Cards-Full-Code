export const isEmpty = (string) => {
  string = string.trim();
  return (string === '' || string === null || string === undefined) 
    ? ''
    : string
}

export const toEELISASeparator = (string) => {
  return string.includes(',')
    ? string.split(',').map((x) => x.trim()).join(' / ')
    : string.trim()
}

export const wordLimit = (string) => {
  const infoSplitted = string.split(' ');
  return infoSplitted.length >= 18
    ? infoSplitted.slice(0, 18).join(' ').concat(' ...')
    : string
}