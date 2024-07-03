function calculateTriangleArea(){
  const triangleBase = getInputFieldValue('triangle-base')
  const triangleHeight = getInputFieldValue('triangle-height')

  const Area = 0.5 * triangleBase * triangleHeight

  const triangleArea = setElementValue('triangle-area',Area)
}

function calculateRectangleArea(){
  const rectangleWidth = getInputFieldValue('rectangle-width')
  const rectangleLength = getInputFieldValue('rectangle-length')

  const Area = rectangleWidth * rectangleLength

  const rectangleArea = setElementValue('rectangle-area',Area)
}

function calculateParallelogramArea(){
  const parallelogramBase = getInputFieldValue('parallelogram-base')
  const parallelogramHeight = getInputFieldValue('parallelogram-height')

  const Area = parallelogramBase * parallelogramHeight

  const parallelogramArea = setElementValue('parallelogram-area',Area)
}

function calculateRhombusArea(){
  const firstAngle = getInputFieldValue('first-angle')
  const secondAngle = getInputFieldValue('second-angle')

  const Area = 0.5 * firstAngle * secondAngle

  const rhombusArea = setElementValue('rhombus-area',Area)
}

function calculatePentagonArea(){
  const pentagon_p = getInputFieldValue('pentagon-p')
  const pentagon_B = getInputFieldValue('pentagon-b')

  const Area = 0.5 * pentagon_p * pentagon_B

  const pentagonArea = setElementValue('pentagon-area',Area)
}

function calculateEllipseArea(){
  const ellipseFirstRadius = getInputFieldValue('ellipse-first-radius')
  const ellipseSecondRadius = getInputFieldValue('ellipse-second-radius')

  const Area = 3.14 * ellipseFirstRadius * ellipseSecondRadius

  const ellipseArea = setElementValue('ellipse-area',Area)
}