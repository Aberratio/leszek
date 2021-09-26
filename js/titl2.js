  /* Store the element in el */
  let el2 = document.getElementById('tilt2')

  /* Get the height and width of the element */
  const height2 = el2.clientHeight
  const width2 = el2.clientWidth

  /*
    * Add a listener for mousemove event
    * Which will trigger function 'handleMove'
    * On mousemove
    */
  el2.addEventListener('mousemove', handleMove)

  /* Define function a */
  function handleMove(e) {
      /*
        * Get position of mouse cursor
        * With respect to the element
        * On mouseover
        */
      /* Store the x position */
      const xVal = e.layerX
      /* Store the y position */
      const yVal = e.layerY

      /*
        * Calculate rotation valuee along the Y-axis
        * Here the multiplier 20 is to
        * Control the rotation
        * You can change the value and see the results
        */
      const yRotation = 20 * ((xVal - width1 / 2) / width1)

      /* Calculate the rotation along the X-axis */
      const xRotation = -20 * ((yVal - height1 / 2) / height1)

      /* Generate string for CSS transform property */
      const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

      /* Apply the calculated transformation */
      el2.style.transform = string
  }

  /* Add listener for mouseout event, remove the rotation */
  el2.addEventListener('mouseout', function () {
      el2.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
  })

  /* Add listener for mousedown event, to simulate click */
  el2.addEventListener('mousedown', function () {
      el2.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
  })

  /* Add listener for mouseup, simulate release of mouse click */
  el2.addEventListener('mouseup', function () {
      el2.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
  })