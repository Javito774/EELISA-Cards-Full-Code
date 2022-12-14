const $ = (selector) => document.querySelector(selector)

export const renderTitle = (string) => {
  const element = $('#tarjeta .titulo')
  element.innerHTML = string
}

export const renderTags = (string) => {
  const element = $('#tarjeta .box-location')
  if(string === '')
    element.style.background = 'none'
  else {
    element.style.background = '#fff'
  }
  element.innerHTML = string
}

export const renderMoreInfo = (string) => {
  const element = $('#tarjeta .moreInfo')
  element.innerHTML= string
}

export const rederCategories = (string) => {
  const element = $('#tarjeta .categories')
  if (string === '') {
    element.innerHTML=''
    element.classList.add('hidden')
  } else {
    element.classList.remove('hidden')
    if (element.querySelector('p') === null)
      element.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 48 48" fill="#fff"><path d="m13.15 34.85 14.5-7.15 7.15-14.5-14.5 7.15ZM24 26q-.85 0-1.425-.575Q22 24.85 22 24q0-.85.575-1.425Q23.15 22 24 22q.85 0 1.425.575Q26 23.15 26 24q0 .85-.575 1.425Q24.85 26 24 26Zm0 18q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" /></svg><p></p>'
    element.querySelector('p').innerHTML = string
  }
}

export const renderPlace = (string) => {
  const element = $('#tarjeta .lugar')
  if (string === '') {
    element.innerHTML=''
    element.classList.add('hidden')
  } else {
    element.classList.remove('hidden')
    if (element.querySelector('p') === null)
      element.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="20" width="20" viewBox="0 0 48 48"><path d="M24 23.5q1.45 0 2.475-1.025Q27.5 21.45 27.5 20q0-1.45-1.025-2.475Q25.45 16.5 24 16.5q-1.45 0-2.475 1.025Q20.5 18.55 20.5 20q0 1.45 1.025 2.475Q22.55 23.5 24 23.5ZM24 44q-8.05-6.85-12.025-12.725Q8 25.4 8 20.4q0-7.5 4.825-11.95Q17.65 4 24 4q6.35 0 11.175 4.45Q40 12.9 40 20.4q0 5-3.975 10.875T24 44Z"/></svg><p></p>'
    element.querySelector('p').innerHTML = string
  }
}

export const renderLanguajes = (string) => {
  const element = $('#tarjeta .idiomas')
  if (string === '') {
    element.innerHTML=''
    element.classList.add('hidden')
  } else {
    element.classList.remove('hidden')
    if (element.querySelector('p') === null)
      element.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="20" width="20" viewBox="0 0 48 48"><path d="m23.75 44 9.05-24h4.1l9.3 24h-4.35l-2.05-6.3h-9.6L27.85 44Zm7.55-9.8h7.1l-3.5-9.7h-.1ZM8 38l-2.75-2.75 10.2-10.2q-1.9-2.2-3.375-4.425Q10.6 18.4 9.5 16h4.35q.85 1.65 1.875 3.125t2.325 3.025q2.25-2.35 3.75-4.875T24.35 12H2V8h14V4h4v4h14v4h-5.65q-1.1 3.45-2.925 6.775Q23.6 22.1 20.95 25.1l4.9 4.95-1.5 4.05L18 28Z"/></svg><p></p>'
    element.querySelector('p').innerHTML = string
  }
}

export const renderECTS = (string) => {
  const element = $('#tarjeta .ects')
  if (string === '') {
    element.innerHTML=''
    element.classList.add('hidden')
  } else {
    element.classList.remove('hidden')
    if (element.querySelector('p') === null)
      element.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="31" viewBox="0 0 20 31" fill="none"><path d="M5.5 16V27L10 24.5L14.5 27V16" stroke="white" stroke-width="2.5"/><path d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z" stroke="white" stroke-width="2.5" stroke-linejoin="bevel"/><path d="M13 9.83667C13 11.4935 11.6569 12.8367 10 12.8367C8.34315 12.8367 7 11.4935 7 9.83667C7 8.17981 8.34315 6.83667 10 6.83667C11.6569 6.83667 13 8.17981 13 9.83667Z" stroke="white" stroke-width="2.5" stroke-linejoin="bevel"/></svg><p></p>'
    element.querySelector('p').innerHTML = string
  }
}