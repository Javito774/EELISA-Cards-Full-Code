export default function LinkedInput (input, renderer, ...validators) {
  input.addEventListener('input', (e) => {
    const message = validators.reduce((value, validator) => validator(value), e.target.value)
    renderer(message)
  })
}