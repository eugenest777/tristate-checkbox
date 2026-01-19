class TriStateCheckbox extends HTMLElement {
    static formAssociated = true;

    static get observedAttributes() {
        return ['value', 'mode', 'tips', 'label', 'tip'];
    }

    constructor() {
        super();
        this._internals = this.attachInternals();
        this.attachShadow({ mode: 'open' });

        this._tips = {};
        this._label = '';
        this._value = 0;
        this._mode = 'tri'; // tri | bi
        this._tip = 'off'; // on | off 
        this._disabled = 0;

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                }
                .box {
                    width: 12px;
                    height: 12px;
                    border-radius: 3px;
                    border: 1px solid #555;
                    display: inline-block;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    vertical-align: middle;
                    cursor: pointer;
                    user-select: none;
                    font-family: Arial, sans-serif;
                    font-weight: bold;
                    font-size:11px
                }
                .on {
                    background: white;
                    color: #333;
                    left: 1px;
                }
                .off {
                    background: white;
                    color: transparent;
                }
                .undefined {
                    background: white;
                    color: #333;
                }
                .tip {
                    background: transparent;
                    color: #333;
                }
                .label {
                    background: transparent;
                    color: #333;
                }
.disabled {
    background: #ccc;
                    }
            </style>
            
            <span class="label"></span>
            <div class="box"></div>
            <span class="tip"></span>
            
        `;

        this.box = this.shadowRoot.querySelector('.box');

        this.box.addEventListener('click', () => this.toggle());
    }

    connectedCallback() {
        if (this.hasAttribute('tips')) {
            this._tips = this.getAttribute('tips').split(",");
        }
        if (this.hasAttribute('label')) {
            this._label = this.getAttribute('label');
        }
        if (this.hasAttribute('disabled')) {
            this._disabled = this.getAttribute('disabled');
        }
        if (this.hasAttribute('tip')) {
            this._tip = this.getAttribute('tip');
        }
        if (this.hasAttribute('mode')) {
            this._mode = this.getAttribute('mode');
        }
        if (this.hasAttribute('value')) {
            this.value = parseInt(this.getAttribute('value'), 10);
        }
        this._render();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'tips') {
            this.tips = newVal;
        }
        if (name === 'label') {
            this.label = newVal;
        }
        if (name === 'tip') {
            this.tip = newVal;
        }
        if (name === 'mode') {
            this.mode = newVal;
        }
        if (name === 'value') {
            this.value = parseInt(newVal, 10);
        }
    }

    toggle() {
        const order = this._mode === 'bi'
            ? [0, 1]
            : [1, 0, -1];

        const index = order.indexOf(this._value);
        if (this.hasAttribute('top'))
    { 
        if (!(this.hasAttribute('disabled'))) {
        this.value = order[(((index > 0) ? 2 : index) + 1) % order.length];
        const elements = document.querySelectorAll('.'+this.getAttribute('top'));
            elements.forEach(element => {
            element.value = this.value;
            });
    }
}
    else
    {
        if (!(this.hasAttribute('disabled'))) {
        this.value = order[(index + 1) % order.length];
        document.querySelector('[top="'+this.className+'"]').value = (areControlsEqualByClass(this.className)) ? this.value : -1;
    }
}
        this.dispatchEvent(new Event('change', { bubbles: true }));
    }

    set value(val) {
        if (![1, 0, -1].includes(val)) return;
        this._value = val;
        this._internals.setFormValue(String(val));
        this._render();
    }

    get value() {
        return this._value;
    }

    set mode(m) {
        if (!['tri', 'bi'].includes(m)) return;
        this._mode = m;
        if (this._mode === 'bi' && this._value === -1) {
            this.value = 0;
        }
        this._render();
    }

    get mode() {
        return this._mode;
    }

    _render() {
        this.box.className = 'box';
        this.box.previousElementSibling.textContent = this._label;
        this.box.nextElementSibling.style.visibility = (this._tip=="off") ? 'hidden' : 'visible';
        if (this.hasAttribute('disabled')) this.box.classList.add('disabled');
        if (this._value === 1) {
            this.box.classList.add('on');
            this.box.textContent = '✔';
            this.box.nextElementSibling.textContent=this._tips[0];
        } else if (this._value === 0) {
            this.box.classList.add('off');
            this.box.textContent = '-';
            this.box.nextElementSibling.textContent=this._tips[1];
        } else {
            this.box.classList.add('undefined');
            this.box.textContent = '-';
            this.box.nextElementSibling.textContent=this._tips[2];
        }
    }
}

function areControlsEqualByClass(className) {
    const elements = document.querySelectorAll('.' + className);
    if (elements.length === 0) return true;

    const getValue = el =>
        'value' in el ? el.value : el.getAttribute('value');

    const firstValue = getValue(elements[0]);

    return Array.from(elements).every(el => getValue(el) === firstValue);
}

window.onload=function () {
    const tops = document.querySelectorAll('[top]');
    tops.forEach(top => { var topval = document.querySelectorAll('.'+top.getAttribute('top'))[0].value
            top.value = (areControlsEqualByClass(top.getAttribute('top'))) ? topval : -1;
  })
}

customElements.define('tristate-checkbox', TriStateCheckbox);

