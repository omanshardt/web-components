/**
 * super-form 0.1
 * Release date: ----.--.--
 */

class SuperForm extends HTMLFormElement {
    constructor() {
        super();
        console.log('construct')
    }

    // public methods

    connectedCallback() {
        SuperForm.instances.push(this);
        this.#init();
        this.#registerEventListeners();
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

    aaa() { console.log('Public instant method') };

    // private methods
 
    // Only the listed properties should accepted as default values
    // I put this in the instance scope so that this could be declared as private
    // probably not a good idea because when we lazy load a SuperForm it cannnot 

    #init() {
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
        // We only get aware of the elements within the form if we observe their insertion,
        // at the time when 'mutation.addedNodes.length' is executed there are no elements within our custom element
        observer.observe(this, { childList: true })
    }

    #registerDefaults(def) {
        for(let i in def) {
            if (this.#internalDefaults.includes(i)) {
               console.log('ja');
               this.#addEventListener(def[i]);
            }
            else {
               // @TODO: error log ;
            }
        }
    }

    #registerEventListeners() {
        // Get the form
        let mySF = this;
        this.addEventListener('submit', function(e) {
            e.preventDefault();
            let sfsubmit = new CustomEvent('sf-submit', {
                bubbles: true,
                cancelable: true,
                composed: false,
                detail: {
                    originalEvent: e,
                    seriaizedData: 'serializedData',
                    data: 'data',
                    modifiedData: 'modifiedData'
                }
            });
            mySF.dispatchEvent(sfsubmit);
        });
    }

    #addEventListener(fnc) {
        this.addEventListener('sf-submit', fnc);
    }

    // static methods

    // holds all instances of super-forms
    static instances = [];
    // static internalDefaults = ['onFormInit', 'onFormSubmit', 'onInitDataLoad', 'onInitDataUnload', 'onDataLoad', 'onDataUnload', 'onPropertyInitValChange', 'onPropertyValChange', 'onPropertyModifiedStateChange', 'onPropertyValidStateChange', 'onFormModifiedStateChange', 'onFormValidStateChange', 'onResetFields', 'onClear', 'onWipe', 'dataTransformer'];
    // static defaults = {};

    static registerDefaults(def) {
        for(let i in SuperForm.instances) {
            SuperForm.instances[i].#registerDefaults(def);
        }
    };
}

customElements.define("super-form", SuperForm, { extends: "form" });
