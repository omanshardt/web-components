/**
 * super-form 0.1
 * Release date: ----.--.--
 */

class SuperForm extends HTMLFormElement {
    constructor() {
        super();
        console.log('construct')
    }

    connectedCallback() {
        this.init();
        this.registerCallbacks();
    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
    }

    init() {
        // Get the form
        let mySF = this;
        let observer = new MutationObserver(function(mutations) {
            // Get the HTMLFormControlsCollection
            let fcElms = mySF.elements;
            // Convert HTMLFormControlsCollection to standard Array
            let aElms  = [... fcElms];
            // We want only to scan the form on initial loading, so we stop observing after initial observation

            // Remove all elements without a name attribute and with empty name attribute
            aElms = aElms.filter(function(elm) {
                return (elm.hasAttribute('name') && elm.name !== '');
            });

            // @TODO: Get rid of ignored elements
    
            // for select boxes with only one selectable option, this makes sure that if no option is implicitly selected the first one is defaultselected as it is also selected by default
            aElms.filter(function(elm) {
                return elm.type.toLowerCase() == 'select-one'
            }).forEach(function(elm) {
                if (elm.selectedIndex != -1) { elm.options[elm.selectedIndex].defaultSelected = true; };
            });

            /**
             * This sets the defaultValue of an input[type='range|color'] to 50 if it is initially not set.
             * This is the value the gui displays and that defaults to the value property
             */
            aElms.filter(function(elm) {
                return (elm.type.toLowerCase() == 'range' || elm.type.toLowerCase() == 'color')
            }).forEach(function(elm) {
                if (elm.defaultValue === '') { elm.defaultValue = elm.value };
            });

            observer.disconnect();
        });
        this.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('submit', e);



            let sfsubmit = new SubmitEvent("sf-submit", {
                bubbles: true,
                cancelable: true,
                composed: false,
                submitter: e.submitter
//                 detail: {
//                     originalEvent: e
//                 },
            });
            mySF.dispatchEvent(sfsubmit)
        });
        // We only get aware of the elements within the form if we observe their insertion,
        // at the time when 'mutation.addedNodes.length' is executed there are no elements within our custom element
        observer.observe(this, { childList: true })
    }

    registerCallbacks() {
        // Get the form
        let mySF = this;
        this.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('submit', e);



            let sfsubmit = new SubmitEvent("sf-submit", {
                bubbles: true,
                cancelable: true,
                composed: false,
                submitter: e.submitter
//                 detail: {
//                     originalEvent: e
//                 },
            });
            mySF.dispatchEvent(sfsubmit)
        });
        // We only get aware of the elements within the form if we observe their insertion,
        // at the time when 'mutation.addedNodes.length' is executed there are no elements within our custom element
        observer.observe(this, { childList: true })
    }
}

customElements.define("super-form", SuperForm, { extends: "form" });
