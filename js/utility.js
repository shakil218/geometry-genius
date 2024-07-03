function getInputFieldValue(inputId){
  const inputField = document.getElementById(inputId) 
  const inputValueText = inputField.value
  const inputValue = parseFloat(inputValueText)
  inputField.value = ''
  return inputValue
}

function getTextElement(elementId){
  const elementField = document.getElementById(elementId)
  const elementFieldText = elementField.innerText
  const element = parseFloat(elementFieldText)
  elementField.value = ''
  return element
}

function setElementValue(elementId,area){
  const element = document.getElementById(elementId)
  element.innerText = area
}