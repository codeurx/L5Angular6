(function (namespace, $) {
	"use strict";
	$.fn.initdemo = function () {
		var Demo = function () {
			var o = this;
			o.initialize();
		};
		var p = Demo.prototype;
		p.initialize = function () {
			this._enableEvents();
			this._initButtonStates();
			this._initIconSearch();
			this._initInversedTogglers();
			this._initChatMessage();
		};
		p._enableEvents = function () {
			var o = this;
			$('.card-head .tools .btn-refresh').on('click', function (e) {
				o._handleCardRefresh(e);
			});
			$('.card-head .tools .btn-collapse').on('click', function (e) {
				o._handleCardCollapse(e);
			});
			$('.card-head .tools .btn-close').on('click', function (e) {
				o._handleCardClose(e);
			});
			$('.card-head .tools .menu-card-styling a').on('click', function (e) {
				o._handleCardStyling(e);
			});
			$('.theme-selector a').on('click', function (e) {
				o._handleThemeSwitch(e);
			});
		};
		p._handleCardRefresh = function (e) {
			var o = this;
			var card = $(e.currentTarget).closest('.card');
			materialadmin.AppCard.addCardLoader(card);
			setTimeout(function () {
				materialadmin.AppCard.removeCardLoader(card);
			}, 1500);
		};
		p._handleCardCollapse = function (e) {
			var card = $(e.currentTarget).closest('.card');
			materialadmin.AppCard.toggleCardCollapse(card);
		};
		p._handleCardClose = function (e) {
			var card = $(e.currentTarget).closest('.card');
			materialadmin.AppCard.removeCard(card);
		};
		p._handleCardStyling = function (e) {
			var newStyle = $(e.currentTarget).data('style');
			var card = $(e.currentTarget).closest('.card');
			$(e.currentTarget).closest('ul').find('li').removeClass('active');
			$(e.currentTarget).closest('li').addClass('active');
			var styledCard = card.closest('[class*="style-"]');
			if (styledCard.length > 0 && (!styledCard.hasClass('style-white') && !styledCard.hasClass('style-transparent'))) {
				styledCard.attr('class', function (i, c) {
					return c.replace(/\bstyle-\S+/g, newStyle);
				});
			} else {
				var styleSwitched = false;
				card.find('[class*="style-"]').each(function () {
					if (!$(this).hasClass('style-white') && !$(this).hasClass('style-transparent')) {
						$(this).attr('class', function (i, c) {
							return c.replace(/\bstyle-\S+/g, newStyle);
						});
						styleSwitched = true;
					}
				});
				if (styleSwitched === false) {
					card.addClass(newStyle);
				}
			}
		};
		p._handleThemeSwitch = function (e) {
			e.preventDefault();
			var newTheme = $(e.currentTarget).attr('href');
			this.switchTheme(newTheme);
		};
		p.switchTheme = function (theme) {
			$('link').each(function () {
				var href = $(this).attr('href');
				href = href.replace(/(assets\/css\/)(.*)(\/)/g, 'assets/css/' + theme + '/');
				$(this).attr('href', href);
			});
		};
		p._initChatMessage = function (e) {
			var o = this;
			$('#sidebarChatMessage').keydown(function (e) {
				o._handleChatMessage(e);
			});
		};
		p._handleChatMessage = function (e) {
			var input = $(e.currentTarget);
			if (e.keyCode === 13) {
				e.preventDefault();
				var demoTime = new Date().getHours() + ':' + new Date().getMinutes();
				var demoImage = $('.list-chats li img').attr('src');
				var html = '';
				html += '<li>';
				html += '	<div class="chat">';
				html += '		<div class="chat-avatar"><img class="img-circle" src="' + demoImage + '" alt=""></div>';
				html += '		<div class="chat-body">';
				html += '			' + input.val();
				html += '			<small>' + demoTime + '</small>';
				html += '		</div>';
				html += '	</div>';
				html += '</li>';
				var $new = $(html).hide();
				$('.list-chats').prepend($new);
				$new.show('fast');
				input.val('').trigger('autosize.resize');
				$('.offcanvas').trigger('refresh');
			}
		};
		p._initInversedTogglers = function () {
			var o = this;
			$('input[name="menubarInversed"]').on('change', function (e) {
				o._handleMenubarInversed(e);
			});
			$('input[name="headerInversed"]').on('change', function (e) {
				o._handleHeaderInversed(e);
			});
		};

		p._handleMenubarInversed = function (e) {
			if ($(e.currentTarget).val() === '1') {
				$('#menubar').addClass('menubar-inverse');
			}
			else {
				$('#menubar').removeClass('menubar-inverse');
			}
		};
		p._handleHeaderInversed = function (e) {
			if ($(e.currentTarget).val() === '1') {
				$('#header').addClass('header-inverse');
			}
			else {
				$('#header').removeClass('header-inverse');
			}
		};
		p._initButtonStates = function () {
			$('.btn-loading-state').click(function () {
				var btn = $(this);
				btn.button('loading');
				setTimeout(function () {
					btn.button('reset');
				}, 3000);
			});
		};
		p._initIconSearch = function () {
			if ($('#iconsearch').length === 0) {
				return;
			}

			$('#iconsearch').focus();
			$('#iconsearch').on('keyup', function () {
				var val = $('#iconsearch').val();
				$('.col-md-3').hide();
				$('.col-md-3:contains("' + val + '")').each(function (e) {
					$(this).show();
				});

				$('.card').hide();
				$('.card:contains("' + val + '")').each(function (e) {
					$(this).show();
				});
			});
		};
		window.materialadmin.Demo = new Demo;
	}
}(this.materialadmin, jQuery));