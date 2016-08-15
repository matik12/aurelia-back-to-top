import { autoinject, bindable } from 'aurelia-framework';
import 'jquery';

@autoinject()
export class BackToTopCustomElement {

    public static ScrollEventName = 'scroll';
    public static AnimationTime = 500;
    public static MinimumWindowScroll = 50;

    @bindable iconClass = 'fa fa-chevron-circle-up';

    constructor(private element: Element) { }

    attached() {
        window.addEventListener(BackToTopCustomElement.ScrollEventName, this.onScrollChange);
    }

    detached() {
        window.removeEventListener(BackToTopCustomElement.ScrollEventName, this.onScrollChange);
    }

    click() {
        $('body,html').animate({ scrollTop: 0 }, BackToTopCustomElement.AnimationTime);
    }

    private onScrollChange = () => {
        const element = $(this.element).children().first();

        if (window.pageYOffset >= BackToTopCustomElement.MinimumWindowScroll) {
            element.fadeIn(BackToTopCustomElement.AnimationTime);
        } else {
            element.fadeOut(BackToTopCustomElement.AnimationTime);
        }
    }
}