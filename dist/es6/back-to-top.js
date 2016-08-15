System.register(['aurelia-framework', 'jquery'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1;
    var BackToTopCustomElement;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (_1) {}],
        execute: function() {
            BackToTopCustomElement = (function () {
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
            exports_1("BackToTopCustomElement", BackToTopCustomElement);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2stdG8tdG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQVFJLGdDQUFvQixPQUFnQjtvQkFSeEMsaUJBK0JDO29CQXZCdUIsWUFBTyxHQUFQLE9BQU8sQ0FBUztvQkFGMUIsY0FBUyxHQUFHLHlCQUF5QixDQUFDO29CQWdCeEMsbUJBQWMsR0FBRzt3QkFDckIsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFFbkQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7NEJBQ25FLE9BQU8sQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQ3pELENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ0osT0FBTyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFDMUQsQ0FBQztvQkFDTCxDQUFDLENBQUE7Z0JBdEJ1QyxDQUFDO2dCQUV6Qyx5Q0FBUSxHQUFSO29CQUNJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUN6RixDQUFDO2dCQUVELHlDQUFRLEdBQVI7b0JBQ0ksTUFBTSxDQUFDLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzVGLENBQUM7Z0JBRUQsc0NBQUssR0FBTDtvQkFDSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNuRixDQUFDO2dCQWxCYSxzQ0FBZSxHQUFHLFFBQVEsQ0FBQztnQkFDM0Isb0NBQWEsR0FBRyxHQUFHLENBQUM7Z0JBQ3BCLDBDQUFtQixHQUFHLEVBQUUsQ0FBQztnQkFFdkM7b0JBQUMsNEJBQVE7O3lFQUFBO2dCQVBiO29CQUFDLDhCQUFVLEVBQUU7OzBDQUFBO2dCQWdDYiw2QkFBQztZQUFELENBL0JBLEFBK0JDLElBQUE7WUEvQkQsMkRBK0JDLENBQUEiLCJmaWxlIjoiYmFjay10by10b3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0LCBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0ICdqcXVlcnknO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQmFja1RvVG9wQ3VzdG9tRWxlbWVudCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBTY3JvbGxFdmVudE5hbWUgPSAnc2Nyb2xsJztcclxuICAgIHB1YmxpYyBzdGF0aWMgQW5pbWF0aW9uVGltZSA9IDUwMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgTWluaW11bVdpbmRvd1Njcm9sbCA9IDUwO1xyXG5cclxuICAgIEBiaW5kYWJsZSBpY29uQ2xhc3MgPSAnZmEgZmEtY2hldnJvbi1jaXJjbGUtdXAnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCkgeyB9XHJcblxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoQmFja1RvVG9wQ3VzdG9tRWxlbWVudC5TY3JvbGxFdmVudE5hbWUsIHRoaXMub25TY3JvbGxDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKEJhY2tUb1RvcEN1c3RvbUVsZW1lbnQuU2Nyb2xsRXZlbnROYW1lLCB0aGlzLm9uU2Nyb2xsQ2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGljaygpIHtcclxuICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIEJhY2tUb1RvcEN1c3RvbUVsZW1lbnQuQW5pbWF0aW9uVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblNjcm9sbENoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gJCh0aGlzLmVsZW1lbnQpLmNoaWxkcmVuKCkuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSBCYWNrVG9Ub3BDdXN0b21FbGVtZW50Lk1pbmltdW1XaW5kb3dTY3JvbGwpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5mYWRlSW4oQmFja1RvVG9wQ3VzdG9tRWxlbWVudC5BbmltYXRpb25UaW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LmZhZGVPdXQoQmFja1RvVG9wQ3VzdG9tRWxlbWVudC5BbmltYXRpb25UaW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
