function calculateTriangleArea(){
  const triangleBase = getInputFieldValue('triangle-base')
  const triangleHeight = getInputFieldValue('triangle-height')

  if(isNaN(triangleBase) || isNaN(triangleHeight)){
    alert('Please insert a number')
    return;
  }

  const Area = 0.5 * triangleBase * triangleHeight

  const triangleArea = setElementValue('triangle-area',Area)
}

function calculateRectangleArea(){
  const rectangleWidth = getInputFieldValue('rectangle-width')
  const rectangleLength = getInputFieldValue('rectangle-length')

  if(isNaN(rectangleWidth) || isNaN(rectangleLength)){
    alert('Please insert a number')
    return;
  }

  const Area = rectangleWidth * rectangleLength

  const rectangleArea = setElementValue('rectangle-area',Area)
}

function calculateParallelogramArea(){
  const parallelogramBase = getInputFieldValue('parallelogram-base')
  const parallelogramHeight = getInputFieldValue('parallelogram-height')

  if(isNaN(parallelogramBase) || isNaN(parallelogramHeight)){
    alert('Please insert a number')
    return;
  }

  const Area = parallelogramBase * parallelogramHeight

  const parallelogramArea = setElementValue('parallelogram-area',Area)
}

function calculateRhombusArea(){
  const firstAngle = getInputFieldValue('first-angle')
  const secondAngle = getInputFieldValue('second-angle')

  if(isNaN(firstAngle) || isNaN(secondAngle)){
    alert('Please insert a number')
    return;
  }

  const Area = 0.5 * firstAngle * secondAngle

  const rhombusArea = setElementValue('rhombus-area',Area)
}

function calculatePentagonArea(){
  const pentagon_p = getInputFieldValue('pentagon-p')
  const pentagon_B = getInputFieldValue('pentagon-b')

  if(isNaN(pentagon_p) || isNaN(pentagon_B)){
    alert('Please insert a number')
    return;
  }

  const Area = 0.5 * pentagon_p * pentagon_B

  const pentagonArea = setElementValue('pentagon-area',Area)
}

function calculateEllipseArea(){
  const ellipseFirstRadius = getInputFieldValue('ellipse-first-radius')
  const ellipseSecondRadius = getInputFieldValue('ellipse-second-radius')

  if(isNaN(ellipseFirstRadius) || isNaN(ellipseSecondRadius)){
    alert('Please insert a number')
    return;
  }

  const Area = 3.14 * ellipseFirstRadius * ellipseSecondRadius

  const ellipseArea = setElementValue('ellipse-area',Area)

  
}