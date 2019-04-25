const k_find = dom => document.querySelector(dom)
const k_add_class = (dom, cname) => {
    dom.classList.add(cname)
    return dom;
}
const k_append = (dom, appendDom) => {
    appendDom.appendChild(dom)
    return dom;
}
const k_append_HTML = (dom, appendDom) => {
    appendDom.appendChild(dom[0])
    return appendDom
}
const k_appendTo = (dom, appendDom) => {
    appendDom.appendChild(dom)
    return appendDom
}
const k_attr = (dom, obj) => {
    for (key in obj) {
        dom.setAttribute(key, obj[key])
    }
    return dom;
}
const k_create = (dom, cName) => {
    const elem = document.createElement(dom)
    elem.className = cName;
    return elem;
}
const k_setText = (dom, txt) => {
    const _t = document.createTextNode(txt);
    dom.appendChild(_t)
    return dom;
}
const k_setHtml = (dom, _html) => {
    dom.innerHTML = _html
    return dom;
}
const k_add_dataset = (dom, dname, data) => {
    dom.dataset[dname] = data;
    return dom
}

const k_find_last = dom => {
    const _findDom = document.querySelectorAll(dom)
    return _findDom[_findDom.length - 1]
}
const log = a => console.log(a)

let dialogId = 0;
class Dialog {
    constructor(options) {
        this.options = options;
        this.$mask = null;
        this.$dialog = null;
        this.$scrollContainer = null;
        this.id = ++dialogId;
    }
    show() {
        this.fetchBodyAndRender();
    }

    createMask() {
        this.$mask = k_append(k_create("div", "dialog-mask-active dialog-mask dialog-mask-transition"), document.body);
    }

    fetchBodyAndRender() {
        this.render(this.options.body)
    }

    render(body) {
        let $header;
        let $body;
        let $footer;
        const self = this;
        this.createMask();
        this.$mask.addEventListener("click", e => {
            self.hide()
        })
        document.body = k_add_class(document.body, 'dialog-no-scroll')
        this.$scrollContainer = k_append(k_create("div", "dialog-scroll-container"), document.body)
        this.$scrollContainer.addEventListener("click", e => {
            if (e.target !== this.$scrollContainer) {
                return;
            }
            this.hide();
        })

        document.addEventListener('keyup', e => { 
            if (e.keyCode === 27) { 
                const dialog_last = k_find_last('.dialog-container') 
                if (Number(dialog_last.dataset.dialog) === this.id) {
                    e.preventDefault();
                    e.stopImmediatePropagation(); 
                    this.hide()
                }
            }
        })
        this.$dialog = k_add_dataset(k_create("div", "dialog-container"), "dialog", this.id);
        console.log(this.options.width)
        if (this.options.width) {
            this.$dialog.style.minWidth = this.options.width
            this.$dialog.style.width = this.options.width
        }
        if (this.options.height) {
            this.$dialog.style.minHeight = this.options.height
            this.$dialog.style.height = this.options.height
        }
        $header = k_create("div", 'dialog-header');
        k_append(k_create("span", 'control'), $header); 
        k_append(k_create("span", 'control'), $header); 
        k_append(k_create("span", 'control'), $header); 

        if (this.options.title) {
            k_append(k_setText(k_create("div", 'dialog-title'), this.options.title), $header);
        }
        if (this.options.closeX) {
            k_append(k_attr(k_setHtml(k_create("div", 'dialog-close'), '&times;'), {
                "title": 'Close',
                "data-dialog-action": 'hide'
            }), $header);
        }
        $body = k_create("div", 'dialog-body');
        $footer = k_create("div", 'dialog-footer');
        $body = typeof body === 'string' ? k_setText($body, body) : k_append_HTML(body, $body)
        $footer = typeof this.options.footer === 'string' ? k_setText($footer, this.options.footer) : k_append_HTML(this.options.footer, $footer)

        this.$dialog = k_appendTo($header, this.$dialog)
        this.$dialog = k_appendTo($body, this.$dialog)
        this.$dialog = k_appendTo($footer, this.$dialog)
        this.$scrollContainer = k_appendTo(this.$dialog, this.$scrollContainer) 

        this.$dialog.style.cssText = `
        width:${this.options.width}px;
        height:${this.options.height}px;
        min-width:${this.options.width}px;
        max-height:${this.options.height}px;
        top:50%;left:50%;margin-top:${-this.options.height / 2}px;margin-left:${-this.options.width / 2}px;
        `;
        if (this.options.position) {
            if (this.options.position.top) {
                this.$dialog.style.marginTop = 'auto';
                this.$dialog.style.top = `${this.options.position.top}px`
            }
            if (this.options.position.left) {
                this.$dialog.style.marginLeft = 'auto';
                this.$dialog.style.left = `${this.options.position.left}px`
            }
        }

        this.$dialog.addEventListener("click", e => {
            if (e.target.dataset.dialogAction) {
                if (e.target.dataset.dialogAction === "hide") {
                    this.hide()
                }
            }
        })
        console.log(this.$dialog)
    }
    hide() {
        //this.$dialog.trigger('hide');
        this.$mask && this.$mask.remove();
        this.$scrollContainer && this.$scrollContainer.remove();
        this.$dialog.remove();
        if (!k_find('.dialog-scroll-container')) {
            document.body.classList.remove('dialog-no-scroll');
        }
    }
}

const defaults = {
    body: '',
    title: '',
    width: null,
    height: null,
    closeX: true,
    position: null,
    footer: null
};
const k_dialog = options => {
    options = Object.assign(defaults, options)
    const dialog = new Dialog(options)
    dialog.show()
    return dialog
}