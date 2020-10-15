(function () {
    const template = document.createElement('template');
    template.innerHTML = `
        <style id="css-colorcube">
            .cubeWrapper {
                --red-min: 0;
                --red-max: 255;
                --green-min: 0;
                --green-max: 255;
                --blue-min: 0;
                --blue-max: 255;
                --transform-local-z: 128px;
                --perspective: 1280px;
                --generalTransitionTime: 0.75s;
                --opacityTransitionTime: 0.75s;
                --movingTransitionTime: 0.75s;
                box-sizing: border-box;
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                /*border:1px solid yellow;*/
            }

            .zoomWrapper {
                box-sizing: border-box;
                width: 256px;
                height: 256px;
                transform-style: preserve-3d;
                transform: scale(1, 1);
                /* zoom / transform: scale() is set via javascript */

                /*border:1px solid red;*/
            }

            .perspectiveWrapper {
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                transform-style: preserve-3d;
                transform: perspective(var(--perspective));
                transition: transform var(--generalTransitionTime);
                /* zoom / transform: scale() is set via javascript */

                /*border:1px solid red;*/
            }

            .rotationWrapper_1 {
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                /* This is for future versions where we possibly want to auto-rotate the cube */
                transform-style: preserve-3d;
                transform: rotate3d(0, 0, 0, 0deg);
            }

            .rotationWrapper_2 {
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                /* This is for future versions where we possibly want to auto-rotate the cube */
                transform-style: preserve-3d;
                /* This is different than on  rotationWrapper_1 only to show that we have different ways to define rotations */
                transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            }

            /* This is the innermost container element for the cube */
            .cube {
                box-sizing: border-box;
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                transform-style: preserve-3d;
                transform: rotateX(-15deg) rotateY(35deg) rotateZ(0deg);

                /*border:1px solid blue;*/
            }

            .surface {
                box-sizing: border-box;
                position: absolute;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-blend-mode: screen;
                background-repeat: no-repeat;
                border-width: 8px;
                border-style: solid;
                border-color: #fff;
                opacity: 1;
                transition: opacity var(--opacityTransitionTime), border-radius var(--generalTransitionTime), transform var(--generalTransitionTime), width var(--generalTransitionTime), height var(--generalTransitionTime), border-width var(--generalTransitionTime);
            }
            
            .surface.surface {
            
            }

            .surface.left {
                transform: rotateX(0deg) rotateY(-90deg) translateZ(var(--transform-local-z));
                background-image: linear-gradient(0deg, rgba(var(--red-min), var(--green-min), var(--blue-min), 1) 0%, rgba(var(--red-max), var(--green-min), var(--blue-min), 1) 100%),
                linear-gradient(90deg, rgba(var(--red-min), var(--green-min), var(--blue-max), 1) 0%, rgba(var(--red-min), var(--green-min), var(--blue-min), 1) 100%);
            }

            .surface.front {
                transform: rotateX(0deg) rotateY(0deg) translateZ(var(--transform-local-z));
                background-image: linear-gradient(0deg, rgba(var(--red-min), var(--green-min), var(--blue-min), 1) 0%, rgba(var(--red-max), var(--green-min), var(--blue-min), 1) 100%),
                linear-gradient(90deg, rgba(var(--red-min), var(--green-min), var(--blue-min), 1) 0%, rgba(var(--red-min), var(--green-max), var(--blue-min), 1) 100%);
            }

            .surface.right {
                transform: rotateX(0deg) rotateY(90deg) translateZ(var(--transform-local-z));
                background-image: linear-gradient(0deg, rgba(var(--red-min), var(--green-min), var(--blue-min), 1) 0%, rgba(var(--red-max), var(--green-min), var(--blue-min), 1) 100%),
                linear-gradient(90deg, rgba(var(--red-min), var(--green-max), var(--blue-min), 1) 0%, rgba(var(--red-min), var(--green-max), var(--blue-max), 1) 100%);
            }

            .surface.back {
                transform: rotateX(0deg) rotateY(180deg) translateZ(var(--transform-local-z));
                background-image: linear-gradient(0deg, rgba(var(--red-min), var(--green-min), var(--blue-min), 1) 0%, rgba(var(--red-max), var(--green-min), var(--blue-min), 1) 100%),
                linear-gradient(90deg, rgba(var(--red-min), var(--green-max), var(--blue-max), 1) 0%, rgba(var(--red-min), var(--green-min), var(--blue-max), 1) 100%);
            }

            .surface.top {
                transform: rotateX(90deg) rotateY(0deg) translateZ(var(--transform-local-z));
                background-image: linear-gradient(0deg, rgba(var(--red-min), var(--green-min), var(--blue-min), 1) 0%, rgba(var(--red-min), var(--green-min), var(--blue-max), 1) 100%),
                linear-gradient(90deg, rgba(var(--red-max), var(--green-min), var(--blue-min), 1) 0%, rgba(var(--red-max), var(--green-max), var(--blue-min), 1) 100%);
            }

            .surface.bottom {
                transform: rotateX(-90deg) rotateY(0deg) translateZ(var(--transform-local-z));
                background-image: linear-gradient(90deg, rgba(var(--red-min), var(--green-min), var(--blue-min), 1) 0%, rgba(var(--red-min), var(--green-max), var(--blue-min), 1) 100%),
                linear-gradient(180deg, rgba(var(--red-min), var(--green-min), var(--blue-min), 1) 0%, rgba(var(--red-min), var(--green-min), var(--blue-max), 1) 100%);
            }

            .surface > span {
                font-size: 32px;
                color: #ffffff44;
                text-shadow: -1px -1px 0px #00000011;
                user-select: none;
            }

        </style>
        <div class="cubeWrapper">
            <div class="zoomWrapper">
                <div class="perspectiveWrapper">
                    <div class="rotationWrapper_1">
                        <div class="rotationWrapper_2">
                            <div class="cube">
                                <div class="surface left"><span>left</span></div>
                                <div class="surface front"><span>front</span></div>
                                <div class="surface right"><span>right</span></div>
                                <div class="surface back"><span>back</span></div>
                                <div class="surface top"><span>top</span></div>
                                <div class="surface bottom"><span>bottom</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    `;

    customElements.define('uic-colorcube', class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'open'});
            this.$selectedSurface = null;
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            this.surfaceSelectionCallback = new Function();
        }

        connectedCallback() {
            const resizeObserver = new ResizeObserver(entries => {
                for (const entry of entries) {
                    let s = Math.min(entry.contentRect.width, entry.contentRect.height)
                    let z = s / 256 * 0.55;
                    try {
                        // if available space is less than 256px than we need to adapt the original size of the cube as it cannot exceed the size of the available space in certain circumstances
                        let size = Math.min(s, 256);
                        let tZ = size / 2;
                        this.getStyleSheetRule('.cubeWrapper').style.setProperty('--transform-local-z', `${tZ}px`);
                        this.getStyleSheetRule('.zoomWrapper').style.setProperty('width', `${size}px`);
                        this.getStyleSheetRule('.zoomWrapper').style.setProperty('height', `${size}px`);

                        this.getStyleSheetRule('.zoomWrapper').style.setProperty('transform', `scale(${z}, ${z})`);
                    } catch (e) {
                    }
                }
            });
            resizeObserver.observe(this.shadowRoot.querySelector('.cubeWrapper'));
            this.$selectedSurface = this.shadowRoot.querySelector('.surface.front');
            this.surfaceSelectionCallback(this.$selectedSurface, 'front');
            // this initially transfers the attribute values ('rotation-x' and 'rotation-y') to the corresponding CSSRule
            if (this.hasAttribute('rotation-x')) {
                this.rotationX = this.getAttribute('rotation-x');
            }
            if (this.hasAttribute('rotation-y')) {
                this.rotationY = this.getAttribute('rotation-y');
            }
            if (this.hasAttribute('opacity')) {
                this.opacity = this.getAttribute('opacity');
            }
            if (this.hasAttribute('shrink')) {
                this.shrink = this.getAttribute('shrink');
            }
            if (this.hasAttribute('explode')) {
                this.explode = this.getAttribute('explode');
            }
            if (this.hasAttribute('perspective')) {
                this.perspective = this.getAttribute('perspective');
            }
            if (this.hasAttribute('border-width')) {
                this.borderWidth = this.getAttribute('border-width');
            }
            if (this.hasAttribute('border-radius')) {
                this.borderRadius = this.getAttribute('border-radius');
            }
        }

        disconnectedCallback() {
            console.log('disconnectedCallback');
        }

        adoptedCallback() {
            console.log('adoptedCallback');
        }

        attributeChangedCallback(attributeName, oldValue, newValue) {
            if (attributeName === 'rotatable') {
                let $elm = this;
                let surfaces = this.shadowRoot.querySelectorAll('.surface');
                if (this.hasAttribute('rotatable')) {
                    // This adds event handlers for rotating the cube
                    this.shadowRoot.querySelector('.cubeWrapper').addEventListener('mousedown', this.startRotating, {passive: false});
                    this.shadowRoot.querySelector('.cubeWrapper').addEventListener('touchstart', this.startRotating, {passive: false});

                    // This adds event handlers for selecting a surface
                    this.shadowRoot.querySelectorAll('.surface').forEach(($surface) => {
                        $surface.addEventListener('mousedown', function (e) {
                            e.preventDefault();
                        });
                        $surface.addEventListener('dblclick', function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            $elm.selectedSurfaceZPosition = 1; // reset the currently selected surface
                            $elm.$selectedSurface = this; // set double-clicked surface as selected surface
                            let surfaceId = this.classList[1];
                            console.log($elm.$selectedSurface, surfaceId);
                            $elm.surfaceSelectionCallback(this.$selectedSurface, surfaceId);
                        });

                        $surface.addEventListener('touchend', function(e) {
                            let currentTime = new Date().getTime();
                            let tapLength = currentTime - $elm.lastTap;
                            clearTimeout($elm.timeout);
                            if (tapLength > 0 && tapLength < 400) {
                                e.preventDefault();
                                // e.stopPropagation();
                                $elm.selectedSurfaceZPosition = 1; // reset the currently selected surface
                                $elm.$selectedSurface = this; // set double-clicked surface as selected surface
                                let surfaceId = this.classList[1];
                                console.log($elm.$selectedSurface, surfaceId);
                                $elm.surfaceSelectionCallback(this.$selectedSurface, surfaceId);
                            }
                            else {
                                $elm.lastTap = currentTime;
                            }
                        } ,{passive: false});


                    });
                } else {
                    this.shadowRoot.querySelector('.cubeWrapper').removeEventListener('mousedown', this.startRotating, {passive: false});

                    // This removes event handlers for selecting a surface
                    $surface.removeEventListener('dblclick', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                    });
                }
            } else if (attributeName === 'rotation-x') {
                try {
                    let rotation = this.rotation;
                    this.getStyleSheetRule('.cube').style.setProperty('transform', `rotateX(${newValue}deg) rotateY(${rotation[1]}deg) rotateZ(${rotation[2]}deg)`);
                } catch (e) {
                }
            } else if (attributeName === 'rotation-y') {
                try {
                    let rotation = this.rotation;
                    this.getStyleSheetRule('.cube').style.setProperty('transform', `rotateX(${rotation[0]}deg) rotateY(${newValue}deg) rotateZ(${rotation[2]}deg)`);
                } catch (e) {
                }
            } else if (attributeName === 'opacity') {
                if (newValue < 0 || newValue > 1) {
                    throw(new RangeError());
                }
                try {
                    newValue = 0.5 + newValue / 2;
                    this.getStyleSheetRule('.surface').style.setProperty('opacity', `${newValue}`);
                } catch (e) {
                }
            } else if (attributeName === 'shrink') {
                if (newValue < 0 || newValue > 1) {
                    throw(new RangeError());
                }
                try {
                    let val = 100 - (newValue * 100 * 0.25);
                    this.getStyleSheetRule('.surface').style.setProperty('width', `${val}%`);
                    this.getStyleSheetRule('.surface').style.setProperty('height', `${val}%`);

                    // This zooms the surfaces when shrinking. to make it correctly it should be transform: scale(), what is a bit tricky as we than
                    // again wold have to perform some string operations to deconstruct the transform property and re-assemble it.
                    // newValue = 0.75 + newValue * 0.25;
                    // this.getStyleSheetRule('.surface').style.setProperty('zoom', `${newValue}`);
                } catch (e) {
                }
            } else if (attributeName === 'explode') {
                if (newValue < 0 || newValue > 1) {
                    throw(new RangeError());
                }
                try {
                    let val = 128 + 128 * 0.25 * newValue;
                    this.getStyleSheetRule('.cubeWrapper').style.setProperty('--transform-local-z', `${val}px`);
                } catch (e) {
                }
            } else if (attributeName === 'perspective') {
                if (newValue < -1 || newValue > 1) {
                    throw(new RangeError());
                }
                try {
                    let val = 1280 + 1280 * 0.6 * newValue;
                    this.getStyleSheetRule('.perspectiveWrapper').style.setProperty('--perspective', `${val}px`);
                } catch (e) {
                }
            } else if (attributeName === 'border-width') {
                if (newValue < 0 || newValue > 1) {
                    throw(new RangeError());
                }
                try {
                    let val = 20 * newValue;
                    this.getStyleSheetRule('.surface').style.setProperty('border-width', `${val}px`);
                } catch (e) {
                }
            } else if (attributeName === 'border-radius') {
                if (newValue < 0 || newValue > 1) {
                    throw(new RangeError());
                }
                try {
                    let val = 50 * newValue;
                    this.getStyleSheetRule('.surface').style.setProperty('border-radius', `${val}%`);
                } catch (e) {
                }
            }
        }

        static get observedAttributes() {
            return ['rotatable', 'rotation-x', 'rotation-y', 'opacity', 'shrink', 'explode', 'perspective', 'border-width', 'border-radius'];
        }


        /**
         * Gets the rotation as is specified within the css rule of the stylesheet
         * @returns {*[]}
         */
        get rotation() {
            let cubeTransform = this.getStyleSheetRule('.cube').style.getPropertyValue('transform');
            if (cubeTransform != '') {
                const regex = /rotateX\((.*?)deg\).*?rotateY\((.*?)deg\).*?rotateZ\((.*?)deg\)/gm;
                let res = [];
                let m;
                while ((m = regex.exec(cubeTransform)) !== null) {
                    // This is necessary to avoid infinite loops with zero-width matches
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }

                    // The result can be accessed through the `m`-variable.
                    m.forEach((match, groupIndex) => {
                        res.push(match);
                    });
                }
                let rotation = [parseFloat(res[1]) || 0, parseFloat(res[2]) || 0, parseFloat(res[3]) || 0];
                return rotation;
            } else {
                return [null, null, null];
            }
        };


        /**
         * This indicates if the cube is rotatable by mouse / touch events or not
         * @returns {boolean}
         */
        get rotatable() {
            return this.hasAttribute('rotatable');
        }

        /**
         * This defines if the cube is rotatable or not
         * @param isRotatable
         */
        set rotatable(isRotatable) {
            if (isRotatable === true) {
                this.setAttribute('rotatable', '');
            } else if (isRotatable === false) {
                this.removeAttribute('rotatable');
            }
        }


        /**
         *
         * @returns {*}
         */
        get rotationX() {
            if (this.hasAttribute('rotation-x')) {
                return this.getAttribute('rotation-x');
            } else {
                return this.rotation[0];
            }
        }

        /**
         * This sets the given value for the rotationX-property within the stylesheets cssRule.
         * As there is no CSSStyleSheet before connecting the component to the document, this operation will fail on initially set attribute values (html-attribute 'rotation-x').
         * So we catch the error and do nothing in this place. Instead we grab that value from the attribute within the 'connectedCallback'-method and set the rotationX value,
         * because at that time the CSSStyleSheet has been created and we can access it.
         * @param val
         */
        set rotationX(val) {
            this.setAttribute('rotation-x', val);
        }


        /**
         *
         * @returns {*}
         */
        get rotationY() {
            if (this.hasAttribute('rotation-y')) {
                return this.getAttribute('rotation-y');
            } else {
                return this.rotation[1];
            }
        }

        /**
         * This sets the given value for the rotationY-property within the stylesheets cssRule.
         * As there is no CSSStyleSheet before connecting the component to the document, this operation will fail on initially set attribute values (html-attribute 'rotation-y').
         * So we catch the error and do nothing in this place. Instead we grab that value from the attribute within the 'connectedCallback'-method and set the rotationY value,
         * because at that time the CSSStyleSheet has been created and we can access it.
         * @param val
         */
        set rotationY(val) {
            this.setAttribute('rotation-y', val);
        }


        /**
         *
         * @returns {*}
         */
        get opacity() {
            if (this.hasAttribute('opacity')) {
                return this.getAttribute('opacity');
            } else {
                return (parseFloat(this.getStyleSheetRule('.surface').style.getPropertyValue('opacity')) - 0.5) * 2;
            }
        }

        /**
         * @param val
         */
        set opacity(val) {
            if (val < 0 || val > 1) {
                throw(new RangeError());
            }
            this.setAttribute('opacity', val);
        }


        /**
         *
         * @returns {*}
         */
        get shrink() {
            if (this.hasAttribute('shrink')) {
                return this.getAttribute('shrink');
            } else {
                let f = parseFloat(this.getStyleSheetRule('.surface').style.getPropertyValue('width'));
                let val = (100 - f) / (100 * 0.25);
                return val;
            }
        }

        /**
         * @param val
         */
        set shrink(val) {
            if (val < 0 || val > 1) {
                throw(new RangeError());
            }
            this.setAttribute('shrink', val);
        }


        /**
         *
         * @returns {*}
         */
        get explode() {
            if (this.hasAttribute('explode')) {
                return this.getAttribute('explode');
            } else {
                let f = parseFloat(this.getStyleSheetRule('.cubeWrapper').style.getPropertyValue('--transform-local-z'));
                let val = (f - 128) / (128 * 0.25);
                return val;
            }
        }

        /**
         * @param val
         */
        set explode(val) {
            if (val < 0 || val > 1) {
                throw(new RangeError());
            }
            this.setAttribute('explode', val);
        }


        /**
         *
         * @returns {*}
         */
        get perspective() {
            if (this.hasAttribute('perspective')) {
                return this.getAttribute('perspective');
            } else {
                let f = parseFloat(this.getStyleSheetRule('.cubeWrapper').style.getPropertyValue('--perspective'));
                let val = (f - 1280) / (1280 * 0.60);
                return val;
            }
        }

        /**
         * @param val
         */
        set perspective(val) {
            if (val < -1 || val > 1) {
                throw(new RangeError());
            }
            this.setAttribute('perspective', val);
        }


        /**
         *
         * @returns {*}
         */
        get borderWidth() {
            if (this.hasAttribute('border-width')) {
                return this.getAttribute('border-width');
            } else {
                let f = parseFloat(this.getStyleSheetRule('.surface').style.getPropertyValue('border-width'));
                let val = f / 20;
                return val;
            }
        }

        /**
         * @param val
         */
        set borderWidth(val) {
            this.setAttribute('border-width', val);
        }


        /**
         *
         * @returns {*}
         */
        get borderRadius() {
            if (this.hasAttribute('border-radius')) {
                return this.getAttribute('border-radius');
            } else {
                let f = parseFloat(this.getStyleSheetRule('.surface').style.getPropertyValue('border-radius'));
                let val = f / 50;
                return val;
            }
        }

        /**
         * @param val
         */
        set borderRadius(val) {
            if (val < 0 || val > 1) {
                throw(new RangeError());
            }
            this.setAttribute('border-radius', val);
        }


        get selectedSurfaceTransformString() {
            let selector = '.' + Array.from(this.$selectedSurface.classList).join('.');
            let transform = this.getStyleSheetRule(selector).style.getPropertyValue('transform');
            return transform;
        }


        get selectedSurfaceZPosition() {
            let defaultZ = parseFloat(this.getStyleSheetRule('.cubeWrapper').style.getPropertyValue('--transform-local-z'));
            let  currentZ = this.$selectedSurface.computedStyleMap().get('transform')[2]['z']['value'];
            return currentZ / defaultZ;
        }

        set selectedSurfaceZPosition(val) {
            console.log('selectedSurfaceZPosition', val);
            if (val < -1 || val > 1) {
                throw(new RangeError());
            }
            let selector = '.' + Array.from(this.$selectedSurface.classList).join('.');
            let transform = this.selectedSurfaceTransformString;
            const regex = /translateZ\(.*\)/gm;
            const subst = `translateZ(calc(var(--transform-local-z) * ${val}))`;
            const result = transform.replace(regex, subst);
            this.getStyleSheetRule(selector).style.setProperty('transform', result);
        }


        emphasizeSelectedSurface() {
            this.getStyleSheetRule('.cubeWrapper').style.setProperty('--opacityTransitionTime', '0.2s');
            let toid = setTimeout( () => {
                this.getStyleSheetRule('.cubeWrapper').style.setProperty('--opacityTransitionTime', '0.75s');
            }, 200);
            this.getStyleSheetRule('.surface.surface').style.setProperty('opacity', '0.025');
            this.$selectedSurface.style.opacity = '1';
        }

        deEmphasizeSelectedSurface() {
            this.getStyleSheetRule('.cubeWrapper').style.setProperty('--opacityTransitionTime', '0.2s');
            let toid = setTimeout( () => {
                this.getStyleSheetRule('.cubeWrapper').style.setProperty('--opacityTransitionTime', '0.75s');
            }, 200);
            this.getStyleSheetRule('.surface.surface').style.removeProperty('opacity');
            this.$selectedSurface.style.opacity = '';
        }


        /**
         * This initializes the rotating capabilities of the cube and sets the starting values
         * @param e
         */
        startRotating = (e) => {
            e.preventDefault();
            e.stopPropagation();
            let pointerEventX = e.clientX || e.changedTouches[0].clientX;
            let pointerEventY = e.clientY || e.changedTouches[0].clientY;
            // This returns a matrix and therefor is currently not needed
            // window.getComputedStyle(this.shadowRoot.querySelector('.cube')).transform;
            let cubeTransform = this.getStyleSheetRule('.cube').style.getPropertyValue('transform');
            let rotation = this.rotation;
            // using named functions so we have a reference for removing the eventHandler
            let _rotate = (e) => {
                this.rotate(e, {
                    x: pointerEventX,
                    y: pointerEventY,
                    rotationX: rotation[0],
                    rotationY: rotation[1],
                });
            };
            // passing the references to the eventHandlers to the handler that removes these event handlers
            let _stopRotating = (e) => {
                this.stopRotating(e, _rotate, _stopRotating);
            };

            // adding events for rotating
            document.addEventListener('mousemove', _rotate, {passive: false});
            document.addEventListener('mouseup', _stopRotating, {passive: false});

            document.addEventListener('touchmove', _rotate, {passive: false});
            document.addEventListener('touchend', _stopRotating, {passive: false});
            console.log('start');
        };

        /**
         * This tracks mouse / touch events and calculates the movements compared to the start of the rotating action.
         * The start values were passed directly to this function and not stored as properties of this custom element.
         * @param e
         * @param rotionInfos
         */
        rotate = (e, rotionInfos, mouseSensivity = 512) => {
            e.stopPropagation();

            var localX = e.clientX || e.changedTouches[0].clientX;
            var localY = e.clientY || e.changedTouches[0].clientY;

            let deltaX = localX - rotionInfos.x;
            let deltaY = localY - rotionInfos.y;

            let degX = rotionInfos.rotationX + (-(deltaY / mouseSensivity * 360));
            let degY = rotionInfos.rotationY + (deltaX / mouseSensivity * 360);
            // this sets the CSSStyleSheet rule directly, might be a better performance, although this is hard to detect
            // this.getStyleSheetRule('.cube').style.setProperty('transform', `rotateX(${degX}deg) rotateY(${degY}deg) rotateZ(0deg)`);

            this.rotationX = degX;
            this.rotationY = degY;
        };

        /**
         * This stops rotating by removing the event handlers for rotating and stopping rotating.
         * @param e
         * @param rotateHandler
         * @param stopRotatingHandler
         */
        stopRotating = (e, rotateHandler, stopRotatingHandler) => {
            e.stopPropagation();
            // removing events for rotating
            document.removeEventListener('mousemove', rotateHandler, {passive: false});
            document.removeEventListener('mouseup', stopRotatingHandler, {passive: false});

            document.removeEventListener('touchmove', rotateHandler, {passive: false});
            document.removeEventListener('touchend', stopRotatingHandler, {passive: false});
            console.log('stop');
        };


        getStyleSheetRule(selectorText, styleSheetSelector = '#css-colorcube') {
            var cssStyleSheet = this.shadowRoot.querySelector(styleSheetSelector).sheet;
            if (cssStyleSheet instanceof CSSStyleSheet) {
                var cssRuleList = cssStyleSheet.cssRules;
                for (var i in cssRuleList) {
                    var rule = cssRuleList[i];
                    if (rule.selectorText === selectorText) {
                        return rule;
                    }
                }
            }
            return null;
        }


        bind(element, property) {
            let elm = this;
            let val = null;
            let transition = null;
            let selector = null;
            if (property === 'moveSurface') {
                selector = '.' + Array.from(elm.$selectedSurface.classList).join('.');
                let opacity = null;
                var toid = null;
                element.addEventListener('mousedown', function (e) {
                    e.stopPropagation();

                    val = this.value;
                    elm.emphasizeSelectedSurface();
                    toid = setTimeout( function() { elm.deEmphasizeSelectedSurface() }, 750);

                    console.log('mousedown')
                }, {passive: true});
                element.addEventListener('touchstart', function (e) {
                    e.stopPropagation();
                    val = this.value;

                    opacity = elm.getStyleSheetRule('.surface').style.getPropertyValue('opacity');
                    elm.getStyleSheetRule('.surface').style.setProperty('opacity', '0.025');

                    elm.$selectedSurface.style.opacity = '1';

                    console.log('touchstart')
                }, {passive: true});

                element.addEventListener('input', function (e) {
                    if (Math.abs(this.value - val) < 0.05 && transition === null) {
                        elm.$selectedSurface.style.transition = 'none';
                        clearTimeout(toid);
                        toid = null;
                        console.log('input conti', this.value, val);
                    }
                    elm['selectedSurfaceZPosition'] = this.value;
                    val = this.value;
                    console.log('input', this.value, val);
                }, {passive: true});

                element.addEventListener('mouseup', function (e) {
                    // elm.getStyleSheetRule('.surface').style.setProperty('opacity', opacity);

                    if (toid === null) {
                            elm.deEmphasizeSelectedSurface();
                    }
                    toid = null;

                    elm.$selectedSurface.style.transition = '';
                    console.log('mouseup')
                }, {passive: true});
                element.addEventListener('touchend', function (e) {
                    elm.getStyleSheetRule('.surface').style.setProperty('opacity', opacity);

                    elm.$selectedSurface.style.transition = '';
                    elm.$selectedSurface.style.opacity = '';
                    console.log('touchend')
                }, {passive: true});
            }
            else {
                selector = (property === 'perspective') ? '.perspectiveWrapper' : '.surface';
                element.addEventListener('mousedown', function (e) {
                    e.stopPropagation();
                    val = this.value;
                    console.log('mousedown');
                }, {passive: true});
                element.addEventListener('touchstart', function (e) {
                    e.stopPropagation();
                    val = this.value;
                    console.log('touchstart');
                }, {passive: true});

                element.addEventListener('input', function (e) {
                    if (Math.abs(this.value - val) < 0.05 && transition === null) {
                        transition = elm.getStyleSheetRule(selector).style.getPropertyValue('transition');
                        elm.getStyleSheetRule(selector).style.removeProperty('transition');
                        console.log('input', this.value, val);
                    }
                    elm[property] = this.value;
                    val = this.value;
                }, {passive: true});

                element.addEventListener('mouseup', function (e) {
                    // e.preventDefault();
                    if (transition !== null) {
                        elm.getStyleSheetRule(selector).style.setProperty('transition', transition);
                        transition = null;
                    }
                    console.log('mouseup');
                    val = null;
                }, {passive: true});
                element.addEventListener('touchend', function (e) {
                    // e.preventDefault();
                    if (transition !== null) {
                        elm.getStyleSheetRule(selector).style.setProperty('transition', transition);
                        transition = null;
                    }
                    val = null;
                    console.log('touchend');
                }, {passive: true});
                // element.addEventListener('click', function(e) { e.preventDefault(); console.log('click') });
            }
        }
    });
})();