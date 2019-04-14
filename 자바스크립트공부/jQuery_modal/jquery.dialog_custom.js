(function (window, document, $) {   

		const k_add_class = (dom, cname) =>{
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
		const k_attr = (dom, obj) =>{
			for(key in obj){
				dom.setAttribute(key, obj[key])
			} 
			return dom; 
		} 
		const k_create = (dom, cName) =>{
			const elem = document.createElement(dom)
			elem.className = cName;  
			return elem;
		}
		const k_setText = (dom, txt)=> {
			const _t = document.createTextNode(txt);  
			dom.appendChild(_t)
			return dom; 
		} 
		const k_setHtml = (dom, _html) =>{
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
	
		var dialogId = 0;
	
		function Dialog(options) {
			this.options = options;
			this.$mask = null;
			this.$dialog = null;
			this.$scrollContainer = null;
			this.id = ++dialogId;
		}
	
		Dialog.prototype = {
			show: function () {
				this.fetchBodyAndRender();
			},
	
			createMask: function () {
				this.$mask = k_append(k_create("div", "dialog-mask-active dialog-mask dialog-mask-transition"), document.body);
			},
	
			fetchBodyAndRender: function () {
				this.render(this.options.body)
			},
	
			render: function (body) {
				var $header, $body, $footer, self = this;
				this.createMask(); 
				console.log("렌더가 완료 되었습니다. ")
				this.$mask.addEventListener("click", function(e){ 
					self.hide()
				}) 
				document.body = k_add_class(document.body, 'dialog-no-scroll') 
				this.$scrollContainer = k_append(k_create("div", "dialog-scroll-container"),document.body)  
				this.$scrollContainer.addEventListener("click", e =>{
					//console.log("스크롤 컨테이너에 접근했습니다 :", e.target, this, this.$scrollContainer)  
					if (e.target !== this.$scrollContainer) {
						return;
					}  
					this.hide();  
				})

				//추후 수정
				document.addEventListener('keyup', e =>{
					if(e.keyCode === 27){
						const dialog_last = k_find_last('.dialog-container')
						log(dialog_last.dataset.id, this.dataset.id)
						if(dialog_last.dataset.id === this.dataset.id){
							e.preventDefault();
							e.stopImmediatePropagation();
							this.hide() 	
						}
					}
				})   
				this.$dialog = k_add_dataset(k_create("div", "dialog-container"), "dialog", this.id); 
				if (this.options.width) { 
					this.$dialog.style.minWidth = this.options.width
				}
				if (this.options.height) {
					this.$dialog.style.minHeight = this.options.height 
				}   
				$header = k_create("div", 'dialog-header');
	
				if (this.options.title) {
					k_append(k_setText(k_create("div", 'dialog-title'), this.options.title), $header);
				}
				if (this.options.closeX) { 
					k_append(k_attr(k_setHtml(k_create("div", 'dialog-close'), '&times;'), {
						"title": 'Close',
						"data-dialog-action": 'hide'
					}), $header);
				} 
				$body = k_create("div",'dialog-body');  
				$footer = k_create("div",'dialog-footer');     
				$body = typeof body === 'string' ? k_setText($body, body) : k_append_HTML(body, $body)  
				$footer = typeof this.options.footer === 'string' ? k_setText($footer, this.options.footer) : k_append_HTML(this.options.footer, $footer) 
				
				this.$dialog = k_appendTo($header, this.$dialog)
				this.$dialog = k_appendTo($body, this.$dialog)
				this.$dialog = k_appendTo($footer, this.$dialog)
				this.$scrollContainer = k_appendTo(this.$dialog, this.$scrollContainer) 
				this.options.position = {
					top:50,
					left: 50
				}
				this.$dialog.style.cssText = `top:50%;left:50%;margin-top:${-this.$dialog.offsetHeight / 2}px;margin-left:${-this.$dialog.offsetWidth / 2}px;`;
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

				this.$dialog.addEventListener("click", e=>{  
					if(e.target.dataset.dialogAction){
						if(e.target.dataset.dialogAction === "hide"){
							this.hide()
						}
					} 
				})   
			},
	
			hide: function () {
				//this.$dialog.trigger('hide');
				this.$mask && this.$mask.remove();
				this.$scrollContainer && this.$scrollContainer.remove();
				this.$dialog.remove(); 
	
				if (this.options.modal && !this.options.allowScrolling) {
					if (!$('.dialog-scroll-container').length) {
						$('body').removeClass('dialog-no-scroll');
					}
				}
			}
		};
	
		var defaults = {
			body: '',
			title: '',
			dynamic: true,
			modal: false,
			width: null,
			height: null,
			closeX: true,
			position: null,
			footer: null
		};
	
		$.dialog = function (options) {
			options = $.extend({}, defaults, options || {}); 
			var dialog = new Dialog(options);
			if (options.show) {
				dialog.show();
			}
			console.log(options)
			return dialog;
		}; 
}(window, document, jQuery));