this.$dialog.trigger('hide');
				this.$mask && this.$mask.remove();
				this.$scrollContainer && this.$scrollContainer.remove();
				this.$dialog.remove();
				$(document).off('.dialog-' + this.id);

				if (this.options.modal && !this.options.allowScrolling) {
					if (!$('.dialog-scroll-container').length) {
						$('body').removeClass('dialog-no-scroll');
					}
				}