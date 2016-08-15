var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'jquery'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var BackToTopCustomElement = (function () {
        function BackToTopCustomElement(element) {
            var _this = this;
            this.element = element;
            this.iconClass = 'fa fa-chevron-circle-up';
            this.onScrollChange = function () {
                var element = $(_this.element).children().first();
                if (window.pageYOffset >= BackToTopCustomElement.MinimumWindowScroll) {
                    element.fadeIn(BackToTopCustomElement.AnimationTime);
                }
                else {
                    element.fadeOut(BackToTopCustomElement.AnimationTime);
                }
            };
        }
        BackToTopCustomElement.prototype.attached = function () {
            window.addEventListener(BackToTopCustomElement.ScrollEventName, this.onScrollChange);
        };
        BackToTopCustomElement.prototype.detached = function () {
            window.removeEventListener(BackToTopCustomElement.ScrollEventName, this.onScrollChange);
        };
        BackToTopCustomElement.prototype.click = function () {
            $('body,html').animate({ scrollTop: 0 }, BackToTopCustomElement.AnimationTime);
        };
        BackToTopCustomElement.ScrollEventName = 'scroll';
        BackToTopCustomElement.AnimationTime = 500;
        BackToTopCustomElement.MinimumWindowScroll = 50;
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], BackToTopCustomElement.prototype, "iconClass", void 0);
        BackToTopCustomElement = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [Element])
        ], BackToTopCustomElement);
        return BackToTopCustomElement;
    }());
    exports.BackToTopCustomElement = BackToTopCustomElement;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2stdG8tdG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBSUE7UUFRSSxnQ0FBb0IsT0FBZ0I7WUFSeEMsaUJBK0JDO1lBdkJ1QixZQUFPLEdBQVAsT0FBTyxDQUFTO1lBRjFCLGNBQVMsR0FBRyx5QkFBeUIsQ0FBQztZQWdCeEMsbUJBQWMsR0FBRztnQkFDckIsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFFbkQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7b0JBQ25FLE9BQU8sQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3pELENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osT0FBTyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDMUQsQ0FBQztZQUNMLENBQUMsQ0FBQTtRQXRCdUMsQ0FBQztRQUV6Qyx5Q0FBUSxHQUFSO1lBQ0ksTUFBTSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekYsQ0FBQztRQUVELHlDQUFRLEdBQVI7WUFDSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1RixDQUFDO1FBRUQsc0NBQUssR0FBTDtZQUNJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsc0JBQXNCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkYsQ0FBQztRQWxCYSxzQ0FBZSxHQUFHLFFBQVEsQ0FBQztRQUMzQixvQ0FBYSxHQUFHLEdBQUcsQ0FBQztRQUNwQiwwQ0FBbUIsR0FBRyxFQUFFLENBQUM7UUFFdkM7WUFBQyw0QkFBUTs7aUVBQUE7UUFQYjtZQUFDLDhCQUFVLEVBQUU7O2tDQUFBO1FBZ0NiLDZCQUFDO0lBQUQsQ0EvQkEsQUErQkMsSUFBQTtJQS9CWSw4QkFBc0IseUJBK0JsQyxDQUFBIiwiZmlsZSI6ImJhY2stdG8tdG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCwgYmluZGFibGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCAnanF1ZXJ5JztcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEJhY2tUb1RvcEN1c3RvbUVsZW1lbnQge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU2Nyb2xsRXZlbnROYW1lID0gJ3Njcm9sbCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEFuaW1hdGlvblRpbWUgPSA1MDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIE1pbmltdW1XaW5kb3dTY3JvbGwgPSA1MDtcclxuXHJcbiAgICBAYmluZGFibGUgaWNvbkNsYXNzID0gJ2ZhIGZhLWNoZXZyb24tY2lyY2xlLXVwJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQpIHsgfVxyXG5cclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEJhY2tUb1RvcEN1c3RvbUVsZW1lbnQuU2Nyb2xsRXZlbnROYW1lLCB0aGlzLm9uU2Nyb2xsQ2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXRhY2hlZCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihCYWNrVG9Ub3BDdXN0b21FbGVtZW50LlNjcm9sbEV2ZW50TmFtZSwgdGhpcy5vblNjcm9sbENoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2soKSB7XHJcbiAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCBCYWNrVG9Ub3BDdXN0b21FbGVtZW50LkFuaW1hdGlvblRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TY3JvbGxDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9ICQodGhpcy5lbGVtZW50KS5jaGlsZHJlbigpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gQmFja1RvVG9wQ3VzdG9tRWxlbWVudC5NaW5pbXVtV2luZG93U2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuZmFkZUluKEJhY2tUb1RvcEN1c3RvbUVsZW1lbnQuQW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5mYWRlT3V0KEJhY2tUb1RvcEN1c3RvbUVsZW1lbnQuQW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
