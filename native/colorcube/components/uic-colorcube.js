const template = document.createElement('template');
// language=HTML
template.innerHTML = `
<style id="css-colorcube">
    .cubeWrapper {
        --red-min: 0;
        --red-max: 255;
        --green-min: 0;
        --green-max: 255;
        --blue-min: 0;
        --blue-max: 255;
        box-sizing:border-box;
        height:100%;
        width:100%;
        display:flex;
        justify-content: center;
        align-items: center;

        /*border:1px solid yellow;*/
    }

    .zoomWrapper {
        box-sizing:border-box;
        width:256px;
        height:256px;
        transform-style: preserve-3d;
        transform: perspective(1280px);
        /* zoom / transform: scale() is set via javascript */

        /*border:1px solid red;*/
    }

    .rotationWrapper_1 {
        box-sizing:border-box;
        width:100%;
        height:100%;
        /* This is for future versions where we possibly want to auto-rotate the cube */
        transform-style: preserve-3d;
        transform: rotate3d(0,0,0,0deg);
    }

    .rotationWrapper_2 {
        box-sizing:border-box;
        width:100%;
        height:100%;
        /* This is for future versions where we possibly want to auto-rotate the cube */
        transform-style: preserve-3d;
        /* This is different than on  rotationWrapper_1 only to show that we have different ways to define rotations */
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }

    /* This is the innermost container element for the cube */
    .cube {
        box-sizing:border-box;
        position:relative;
        width:100%;
        height:100%;
        display:flex;
        justify-content: center;
        align-items: center;
        transform-style: preserve-3d;
        transform: rotateX(-15deg) rotateY(35deg) rotateZ(0deg);

        /*border:1px solid blue;*/
    }

    .surface {
        box-sizing:border-box;
        position:absolute;
        width:100%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-blend-mode: screen;
        border-width:8px;
        border-style:solid;
        border-color:#fff;
        opacity:1;
    }

    .surface.left {
        transform: rotateX(0deg) rotateY(-90deg) translateZ(128px);
        background:
            linear-gradient(0deg, rgba(var(--red-min),var(--green-min),var(--blue-min),1) 0%, rgba(var(--red-max),var(--green-min),var(--blue-min),1) 100%),
            linear-gradient(90deg, rgba(var(--red-min),var(--green-min),var(--blue-max),1) 0%, rgba(var(--red-min),var(--green-min),var(--blue-min),1) 100%);
    }

    .surface.front {
        transform: rotateX(0deg) rotateY(0deg) translateZ(128px);
        background:
            linear-gradient(0deg, rgba(var(--red-min),var(--green-min),var(--blue-min),1) 0%, rgba(var(--red-max),var(--green-min),var(--blue-min),1) 100%),
            linear-gradient(90deg, rgba(var(--red-min),var(--green-min),var(--blue-min),1) 0%, rgba(var(--red-min),var(--green-max),var(--blue-min),1) 100%);
    }

    .surface.right {
        transform: rotateX(0deg) rotateY(90deg) translateZ(128px);
        background:
            linear-gradient(0deg, rgba(var(--red-min),var(--green-min),var(--blue-min),1) 0%, rgba(var(--red-max),var(--green-min),var(--blue-min),1) 100%),
            linear-gradient(90deg, rgba(var(--red-min),var(--green-max),var(--blue-min),1) 0%, rgba(var(--red-min),var(--green-max),var(--blue-max),1) 100%);
    }

    .surface.back {
        transform: rotateX(0deg) rotateY(180deg) translateZ(128px);
        background:
            linear-gradient(0deg, rgba(var(--red-min),var(--green-min),var(--blue-min),1) 0%, rgba(var(--red-max),var(--green-min),var(--blue-min),1) 100%),
            linear-gradient(90deg, rgba(var(--red-min),var(--green-max),var(--blue-max),1) 0%, rgba(var(--red-min),var(--green-min),var(--blue-max),1) 100%);
    }

    .surface.top {
        transform: rotateX(90deg) rotateY(0deg) translateZ(128px);
        background:
            linear-gradient(0deg, rgba(var(--red-min),var(--green-min),var(--blue-min),1) 0%, rgba(var(--red-min),var(--green-min),var(--blue-max),1) 100%),
            linear-gradient(90deg, rgba(var(--red-max),var(--green-min),var(--blue-min),1) 0%, rgba(var(--red-max),var(--green-max),var(--blue-min),1) 100%);
    }

    .surface.bottom {
        transform: rotateX(-90deg) rotateY(0deg) translateZ(128px);
        background:
            linear-gradient(90deg, rgba(var(--red-min),var(--green-min),var(--blue-min),1) 0%, rgba(var(--red-min),var(--green-max),var(--blue-min),1) 100%),
            linear-gradient(180deg, rgba(var(--red-min),var(--green-min),var(--blue-min),1) 0%, rgba(var(--red-min),var(--green-min),var(--blue-max),1) 100%);
    }

    .surface > span {
        font-size: 32px;
        color:#ffffff44;
        text-shadow:-1px -1px 0px #00000011;
        user-select: none;
    }

</style>
<div class="cubeWrapper">
    <div class="zoomWrapper">
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
`;

customElements.define('uic-colorcube', class extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                let s = Math.min(entry.contentRect.width, entry.contentRect.height)
                let z = s/256 * 0.55;
                this.shadowRoot.querySelector('.zoomWrapper').style.transform = `scale(${z}, ${z}) perspective(1280px)`;
            }
        });
        resizeObserver.observe(this.shadowRoot.querySelector('.cubeWrapper'));
        // this initially transfers the attribute values ('rotation-x' and 'rotation-y') to the corresponding CSSRule
        if (this.hasAttribute('rotation-x')) {
            this.rotationX = this.getAttribute('rotation-x');
        }
        if (this.hasAttribute('rotation-y')) {
            this.rotationY = this.getAttribute('rotation-y');
        }
        if (this.hasAttribute('border-width')) {
            this.borderWidth = this.getAttribute('border-width');
        }
        if (this.hasAttribute('opacity')) {
            this.opacity = this.getAttribute('opacity');
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
            if (this.hasAttribute('rotatable')) {
                this.shadowRoot.querySelector('.cubeWrapper').addEventListener('mousedown', this.startRotating, {passive: false});
            }
            else {
                this.shadowRoot.querySelector('.cubeWrapper').removeEventListener('mousedown', this.startRotating, {passive: false});
            }
        }
        else if (attributeName === 'rotation-x') {
            try {
                let rotation = this.rotation;
                this.getStyleSheetRule('.cube').style.setProperty('transform', `rotateX(${newValue}deg) rotateY(${rotation[1]}deg) rotateZ(${rotation[2]}deg)`);
            }
            catch(e) {}
        }
        else if (attributeName === 'rotation-y') {
            try {
                let rotation = this.rotation;
                this.getStyleSheetRule('.cube').style.setProperty('transform', `rotateX(${rotation[0]}deg) rotateY(${newValue}deg) rotateZ(${rotation[2]}deg)`);
            }
            catch(e) {}
        }
        else if (attributeName === 'border-width') {
            try {
                this.getStyleSheetRule('.surface').style.setProperty('border-width', `${newValue}px`);
            }
            catch(e) {}
        }
        else if (attributeName === 'opacity') {
            try {
                if (newValue < 0 || newValue > 1) {
                    throw(new RangeError());
                }
                newValue = 0.5 + newValue / 2;
                this.getStyleSheetRule('.surface').style.setProperty('opacity', `${newValue}`);
            }
            catch(e) {}
        }
    }

    static get observedAttributes() {
        return ['rotatable', 'rotation-x', 'rotation-y', 'border-width', 'opacity'];
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
        }
        else {
            return [null, null, null];
        }
    };

    /**
     *
     * @returns {*}
     */
    get rotationX() {
        return this.rotation[0];
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
        try {
            let rotation = this.rotation;
            this.getStyleSheetRule('.cube').style.setProperty('transform', `rotateX(${val}deg) rotateY(${rotation[1]}deg) rotateZ(${rotation[2]}deg)`);
        }
        catch(e) {}
    }

    /**
     *
     * @returns {*}
     */
    get rotationY() {
        return this.rotation[1];
    }

    /**
     * @param val
     */
    set borderWidth(val) {
        this.setAttribute('border-width', val);
        try {
            this.getStyleSheetRule('.surface').style.setProperty('border-width', `${val}px`);
        }
        catch(e) {}
    }

    /**
     *
     * @returns {*}
     */
    get borderWidth() {
        return parseFloat(this.getStyleSheetRule('.surface').style.getPropertyValue('border-width'));
    }

    /**
     * @param val
     */
    set opacity(val) {
        // val = Math.max(0, Math.min(1, val));
        this.setAttribute('opacity', val);
        try {
            if (val < 0 || val > 1) {
                throw(new RangeError());
            }
            val = 0.5 + val / 2;
            this.getStyleSheetRule('.surface').style.setProperty('opacity', `${val}`);
        }
        catch(e) {}
    }

    /**
     *
     * @returns {*}
     */
    get opacity() {
        return (parseFloat(this.getStyleSheetRule('.surface').style.getPropertyValue('opacity')) - 0.5) * 2;
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
        try {
            let rotation = this.rotation;
            this.getStyleSheetRule('.cube').style.setProperty('transform', `rotateX(${rotation[0]}deg) rotateY(${val}deg) rotateZ(${rotation[2]}deg)`);
        }
        catch(e) {}
    }

    /**
     * This indicates if the cube is rotatable by mouse / touch events or not
     * @returns {boolean}
     */
    get rotatable() {
        let b = this.hasAttribute('rotatable');
        return b;
    }

    /**
     * This defines if the cube is rotatable or not
     * @param isRotatable
     */
    set rotatable(isRotatable) {
        if (isRotatable === true) {
            this.setAttribute('rotatable', '');
        }
        else if (isRotatable === false) {
            this.removeAttribute('rotatable');
        }
    }


    /**
     * This initializes the rotating capabilities of the cube and sets the starting values
     * @param e
     */
    startRotating = (e) => {
        e.stopPropagation();
        let pointerEventX = e.clientX || e.changedTouches[0].clientX;
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
    };

    /**
     * This tracks mouse / touch events and calculates the movements compared to the start of the rotating action.
     * The start values were passed directly to this function and not stored as properties of this custom element.
     * @param e
     * @param rotionInfos
     */
    rotate = (e, rotionInfos, mouseSensivity = 512) => {
        e.stopPropagation();

        var localX = e.clientX || e.changedTouches[0].clientX;
        var localY = e.clientY || e.changedTouches[0].clientY;

        let deltaX = localX - rotionInfos.x;
        let deltaY = localY - rotionInfos.y;

        let degX = rotionInfos.rotationX + (- (deltaY / mouseSensivity * 360));
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
});