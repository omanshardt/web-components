const template = document.createElement('template');
template.innerHTML = `
<style>
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
        transform: rotateX(-35deg) rotateY(35deg) rotateZ(0deg);

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
        border:8px solid #fff;
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
        console.log('constructor');
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log('connectedCallback');
        const resizeObserver = new ResizeObserver(entries => {
            console.log('resize');
            for (const entry of entries) {
                let s = Math.min(entry.contentRect.width, entry.contentRect.height)
                let z = s/256 * 0.45;
                this.shadowRoot.querySelector('.zoomWrapper').style.transform = `scale(${z}, ${z}) perspective(1280px)`;
            }
        });
        resizeObserver.observe(this.shadowRoot.querySelector('.cubeWrapper'));
    }

    disconnectedCallback() {
        console.log('disconnectedCallback');
    }

    adoptedCallback() {
        console.log('adoptedCallback');
    }

    attributeChangedCallback(attributeName, oldValue, newValue) {
        console.log('attributeChangedCallback');
    }

    static get observedAttributes() {
        return ['rotatable'];
    }
});