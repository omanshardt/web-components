# omanshardt/web-components
This is a collection of web-components.

**native**

**uic-clock**

Tiny little but full-working icon-clock made with svg and js. This is perfect for adding it to a menue bar. The icon shows current time and can be configured to display an additional digital time with hours, minutes and seconds. Although the clock is svg, it adapts some font-css-styles such as size and color.

**uic-colorcube**

The uic-colorcube is a component that shows the colors of the  rgb-color-space in a 3-dimensional cube. The cube can be rotated on desktop and mobile devices and it's visual appearance can be configured by element attributes and with javascript.

The initial appearance can be configured with element attributes:

  - **rotatable** [true | false | no value]: if the cube is rotatable or not
  - **rotation-x** [number]: rotation around x-axis
  - **rotation-y** [number]: rotation around y-axis
  - **opacity** [number,  0 - +1]: opacity of surfaces
  - **shrink** [number,  0 - +1]: relative size of surfaces
  - **explode** [number,  0 - +1]: distance of surfaces
  - **perspective** [number,  -1 - +1]: perspective view of the cube
  - **border-width** [number,  0 - +1]: width of the borders
  - **border-rafius** [number,  0 - +1]: radius of the borders


With the 'bind'-method it's possible to bind input-elements (best would be range-inputs) to the cube to control these attributes.

**Example:**

```
<input data-property="borderRadius" type="range" min="0" max="1" step="0.01" value="0">

<script>
  let colorCube = document.querySelector('uic-colorcube');
  colorCube.bind(document.querySelector('input[data-property="borderRadius"]'), 'borderRadius');
</script>
```
This applies all event listeners necessary to give smooth dynamic control on the cube's appearance on desktop and mobile devices and uses animations where this makes sense.

In addition the cube allows to select a surface by double clicking or double tapping. The front surface is selected by default. You can move the selected surface throughout the cube the same way as you set the other properties with javascript by using the bind()-method. Setting a value with an attribute is not possible in this case. The method takes a value between -1 and +1. when selecting a surface, the previously selected surface moves smoothly back to its default position, so it's not possible to overlap multiple surfaces in the middle of the cube. In addition a callback-method is invoked that can be used to reset the value of the input field to be ready for the newly selected surface.

**Example:**

```
<input data-property="moveSurface" type="range" value="1" min="-1" max="1" step="0.01">

<script>
  let colorCube = document.querySelector('uic-colorcube');
  colorCube.bind(document.querySelector('input[data-property="moveSurface"]'), 'moveSurface');

  colorCube.surfaceSelectionCallback = function(elm, id) {
    document.querySelector('#selectedSurface').innerHTML = id;
    document.querySelector('input[data-property="moveSurface"]').value = 1;
  }
</script>
```

When moving the surface thorough the cube it changes it's color gradient with respect of the color value on the surface's z-axis. For example, moving the front surface what consists of a combination of a red gradient (y-axis) and a green gradient (x-axis) backwards, the surface gets blue (z-axis) mixed in from 0 - 255, so if you have moved the front completely backwards it shows the same gradient as the surface on the back. This property also has applied a nice transition whenever this is useful.

Current Version: 1.1

**Compatibility:**

As this component uses some really new javascript API's and technologies, it is compatible only with the latest releases of all mainstream browsers. Please check it out on your target device and browser.

**How to use the colorcube on your web page**

- Import the uic-colorcube.js file into your page
- use the `<uic-colorcube></uic-colorcube>` within your html.

```
<html>
  <head>
    <script src="components/uic-colorcube.js"></script>
  </head>
  <body>
    <!-- with no attributes, default appearance and not rotatable -->
    <uic-colorcube></uic-colorcube>

    <!-- with custom attributes, custom appearance and rotatable -->
    <uic-colorcube
        rotatable
        rotation-x="-15"
        rotation-y="35"
        opacity="0.5"
        shrink="0"
        explode="0"
        perspective="0"
        border-width="0.2"
        border-radius="0"
    ></uic-colorcube>
  </body>
</html>
```

The cube automatically adapts the size of the wrapping element.

**History:**

Version 1.1
  - changed css of surface labels now using mix-blend-mode.