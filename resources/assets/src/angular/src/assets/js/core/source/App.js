(function ($) {
	"use strict";
	$.fn.initapp = function () {
		var App = function () {
			var o = this;
			o.initialize();
		};
		var p = App.prototype;
		App.SCREEN_XS = 480;
		App.SCREEN_SM = 768;
		App.SCREEN_MD = 992;
		App.SCREEN_LG = 1200;
		p._callFunctions = null;
		p._resizeTimer = null;
		p.initialize = function () {
			this._enableEvents();
			this._initBreakpoints();
			this._initInk();
			this._initAccordion();
		};
		p._enableEvents = function () {
			var o = this;
			$(window).on('resize', function (e) {
				clearTimeout(o._resizeTimer);
				o._resizeTimer = setTimeout(function () {
					o._handleFunctionCalls(e);
				}, 300);
			});
		};
		p.getKnobStyle = function (knob) {
			var holder = knob.closest('.knob');
			var options = {
				width: Math.floor(holder.outerWidth()),
				height: Math.floor(holder.outerHeight()),
				fgColor: holder.css('color'),
				bgColor: holder.css('border-top-color'),
				draw: function () {
					if (knob.data('percentage')) {
						$(this.i).val(this.cv + '%');
					}
				}
			};
			return options;
		};
		p._initAccordion = function () {
			$('.panel-group .card .in').each(function () {
				var card = $(this).parent();
				card.addClass('expanded');
			});
			$('.panel-group').on('hide.bs.collapse', function (e) {
				var content = $(e.target);
				var card = content.parent();
				card.removeClass('expanded');
			});
			$('.panel-group').on('show.bs.collapse', function (e) {
				var content = $(e.target);
				var card = content.parent();
				var group = card.closest('.panel-group');
				group.find('.card.expanded').removeClass('expanded');
				card.addClass('expanded');
			});
		};
		p._initInk = function () {
			var o = this;
			$('.ink-reaction').on('click', function (e) {
				var bound = $(this).get(0).getBoundingClientRect();
				var x = e.clientX - bound.left;
				var y = e.clientY - bound.top;
				var color = o.getBackground($(this));
				var inverse = (o.getLuma(color) > 183) ? ' inverse' : '';
				var ink = $('<div class="ink' + inverse + '"></div>');
				var btnOffset = $(this).offset();
				var xPos = e.pageX - btnOffset.left;
				var yPos = e.pageY - btnOffset.top;
				ink.css({
					top: yPos,
					left: xPos
				}).appendTo($(this));
				window.setTimeout(function () {
					ink.remove();
				}, 1500);
			});
		};
		p.getBackground = function (item) {
			var color = item.css("background-color");
			var alpha = parseFloat(color.split(',')[3], 10);
			if ((isNaN(alpha) || alpha > 0.8) && color !== 'transparent') {
				return color;
			}
			if (item.is("body")) {
				return false;
			} else {
				return this.getBackground(item.parent());
			}
		};
		p.getLuma = function (color) {
			var rgba = color.substring(4, color.length - 1).split(',');
			var r = rgba[0];
			var g = rgba[1];
			var b = rgba[2];
			var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
			return luma;
		};
		p._initBreakpoints = function (alias) {
			var html = '';
			html += '<div id="device-breakpoints">';
			html += '<div class="device-xs visible-xs" data-breakpoint="xs"></div>';
			html += '<div class="device-sm visible-sm" data-breakpoint="sm"></div>';
			html += '<div class="device-md visible-md" data-breakpoint="md"></div>';
			html += '<div class="device-lg visible-lg" data-breakpoint="lg"></div>';
			html += '</div>';
			$('body').append(html);
		};
		p.isBreakpoint = function (alias) {
			return $('.device-' + alias).is(':visible');
		};
		p.minBreakpoint = function (alias) {
			var breakpoints = ['xs', 'sm', 'md', 'lg'];
			var breakpoint = $('#device-breakpoints div:visible').data('breakpoint');
			return $.inArray(alias, breakpoints) < $.inArray(breakpoint, breakpoints);
		};
		p.callOnResize = function (func) {
			if (this._callFunctions === null) {
				this._callFunctions = [];
			}
			this._callFunctions.push(func);
			func.call();
		};
		p._handleFunctionCalls = function (e) {
			if (this._callFunctions === null) {
				return;
			}
			for (var i = 0; i < this._callFunctions.length; i++) {
				this._callFunctions[i].call();
			}
		};
		window.materialadmin = window.materialadmin || {};
		window.materialadmin.App = new App;
	}
}(jQuery)); 
