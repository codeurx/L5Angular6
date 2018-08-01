(function (namespace, $) {
	"use strict";
	$.fn.initsearch = function(){
		var AppNavSearch = function () {
			var o = this;
			o.initialize();
		};
		var p = AppNavSearch.prototype;
		p._clearSearchTimer = null;
		p.initialize = function () {
			this._enableEvents();
		};
		p._enableEvents = function () {
			var o = this;
			$('.navbar-search .btn').on('click', function (e) {
				o._handleButtonClick(e);
			});
			$('.navbar-search input').on('blur', function (e) {
				o._handleFieldBlur(e);
			});
		};
		p._handleButtonClick = function (e) {
			e.preventDefault();
			var form = $(e.currentTarget).closest('form');
			var input = form.find('input');
			var keyword = input.val();
			if ($.trim(keyword) === '') {
				form.addClass('expanded');
				input.focus();
			}
			else {
				form.addClass('expanded');
				form.submit();
				clearTimeout(this._clearSearchTimer);
			}
		};
		p._handleFieldBlur = function (e) {
			var input = $(e.currentTarget);
			var form = input.closest('form');
			form.removeClass('expanded');
			clearTimeout(this._clearSearchTimer);
			this._clearSearchTimer = setTimeout(function () {
				input.val('');
			}, 300);
		};
		window.materialadmin.AppNavSearch = new AppNavSearch;
	}
}(this.materialadmin, jQuery));
