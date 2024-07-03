function getInputFieldValue(inputId){
  const inputField = document.getElementById(inputId) 
  const inputValueText = inputField.value
  const inputValue = parseFloat(inputValueText)
  inputField.value = ''
  return inputValue
}

function setElementValue(elementId,area){
  const element = document.getElementById(elementId)
  element.innerText = area
}

function addToDynamicCalculationEntry(areaType,area){
  const calculationEntry = document.getElementById('calculation-entry')

  const count = calculationEntry.childElementCount
  const p = document.createElement('p')
  p.classList.add('pl-5')
  p.innerHTML =`${count+1}. ${areaType} ${area} cm<sup>2</sup> <button class = "btn btn-sm btn-accent gap-2 text-white mt-2">Convert to metre</button>`
  calculationEntry.appendChild(p)
}