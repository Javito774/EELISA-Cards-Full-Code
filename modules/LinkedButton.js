export default function AddToInput (input, ...botones) {
  if (input.tagName.toLowerCase() !== 'input')
    throw new Error('El parametro input no es un input')
  botones.forEach((button, index) => {
    if (button.getAttribute('data') === null)
      throw new Error(`El parametro button ${index} no tiene el atributo data`)
    button.addEventListener('click', (e) => {
      if (input.value === '' || input.value === null || input.value === undefined) {
        input.value = e.target.getAttribute('data')
      } else {
        input.value = input.value.trimEnd().concat(', ', e.target.getAttribute('data'))
      }
      input.dispatchEvent(new Event('input', {bubbles:true}))
    })
  })
}
