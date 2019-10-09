/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  UserMenuLink,
} from './components/esri-header-account/esri-header-account';
import {
  Application,
  imgOrSvgDef,
  Notification,
} from './utils/interfaces';


export namespace Components {
  interface EsriFooter {
    /**
    * Add a jsdoc comment describing your method and it's parameters (use `@param`).
    */
    'doThing': () => Promise<void>;
    /**
    * Be sure to add a jsdoc comment describing your propery for the generated readme file. If your property should be hidden from documentation, you can use the `@internal` tag
    */
    'property': string;
  }
  interface EsriFooterBrand {
    /**
    * Be sure to add a jsdoc comment describing your propery for the generated readme file. If your property should be hidden from documentation, you can use the `@internal` tag
    */
    'detail': any;
    /**
    * Add a jsdoc comment describing your method and it's parameters (use `@param`).
    */
    'doThing': () => Promise<void>;
  }
  interface EsriFooterBreadcrumbs {
    /**
    * Add a jsdoc comment describing your method and it's parameters (use `@param`).
    */
    'doThing': () => Promise<void>;
    /**
    * Be sure to add a jsdoc comment describing your propery for the generated readme file. If your property should be hidden from documentation, you can use the `@internal` tag
    */
    'property': string;
  }
  interface EsriFooterLanguage {
    /**
    * Add a jsdoc comment describing your method and it's parameters (use `@param`).
    */
    'doThing': () => Promise<void>;
    /**
    * Be sure to add a jsdoc comment describing your propery for the generated readme file. If your property should be hidden from documentation, you can use the `@internal` tag
    */
    'property': string;
  }
  interface EsriFooterSocial {
    /**
    * Add a jsdoc comment describing your method and it's parameters (use `@param`).
    */
    'doThing': () => Promise<void>;
    /**
    * Be sure to add a jsdoc comment describing your propery for the generated readme file. If your property should be hidden from documentation, you can use the `@internal` tag
    */
    'property': string;
  }
  interface EsriHeader {
    /**
    * Set to `true` to show hamburger menu regardless of screen size
    */
    'collapseMenus': boolean;
    /**
    * If using the header programatically, you can pass in the data structure to the init method, and it will create all sub elements for you.
    */
    'init': (detail: any) => Promise<void>;
    /**
    * App mode will show a color bar at the top and float menu items right
    */
    'theme': "web" | "app";
  }
  interface EsriHeaderAccount {
    /**
    * Add a jsdoc comment describing your method and it's parameters (use `@param`).
    */
    'doThing': () => Promise<void>;
    /**
    * Array of links to appear in user menu
    */
    'menus': UserMenuLink[];
    /**
    * Open state of the menu
    */
    'open': boolean;
    /**
    * Translated string for profile
    */
    'profileText': string;
    /**
    * Translated string for sign in
    */
    'signInText': string;
    /**
    * Translated string for sign out
    */
    'signOutText': string;
    /**
    * Translated string for switch account
    */
    'switchText': string;
    /**
    * Organization name
    */
    'userGroup': string;
    /**
    * Unique user id
    */
    'userId': string;
    /**
    * Absolute path to profile photo
    */
    'userImage': string;
    /**
    * Human-readable name of the user
    */
    'userName': string;
  }
  interface EsriHeaderApps {
    /**
    * Translated string for app launcher label
    */
    'applicationsText': string;
    /**
    * Translated string for dismissing help message
    */
    'confirmText': string;
    /**
    * Disallow dragging and dropping to reorder applications
    */
    'disableDragAndDrop': boolean;
    /**
    * Show help message upon opening app switcher
    */
    'displayIntro': boolean;
    /**
    * Translated string for secondary help
    */
    'dragAppsHereText': string;
    /**
    * Translated string for sign out
    */
    'introText': string;
    /**
    * Set to true while apps are being fetched
    */
    'loading': boolean;
    /**
    * Open state of the menu
    */
    'open': boolean;
    /**
    * Array of applications to appear in top section of app launcher
    */
    'primary': Application[];
    /**
    * Translated string for removed application
    */
    'removeText': string;
    /**
    * Translated string for removed application
    */
    'removedText': string;
    /**
    * Array of applications to appear in bottom hidden section
    */
    'secondary': Application[];
    /**
    * Translated string for show more
    */
    'showMoreText': string;
  }
  interface EsriHeaderBrand {
    'brandText'?: string;
    'detail'?: any;
    'distributorImage'?: imgOrSvgDef;
    'distributorImageHeight'?: number;
    'distributorImageWidth'?: number;
    'height'?: number;
    'href'?: string;
    'image'?: imgOrSvgDef;
    'label'?: string;
    'width'?: number;
  }
  interface EsriHeaderCart {
    'items': number;
    'url': string;
  }
  interface EsriHeaderInlineSearch {
    /**
    * Add a jsdoc comment describing your method and it's parameters (use `@param`).
    */
    'doThing': () => Promise<void>;
    /**
    * Be sure to add a jsdoc comment describing your propery for the generated readme file. If your property should be hidden from documentation, you can use the `@internal` tag
    */
    'property': string;
  }
  interface EsriHeaderInlineTitle {
    /**
    * Add a jsdoc comment describing your method and it's parameters (use `@param`).
    */
    'doThing': () => Promise<void>;
    /**
    * Be sure to add a jsdoc comment describing your propery for the generated readme file. If your property should be hidden from documentation, you can use the `@internal` tag
    */
    'property': string;
  }
  interface EsriHeaderMenus {
    /**
    * Be sure to add a jsdoc comment describing your propery for the generated readme file. If your property should be hidden from documentation, you can use the `@internal` tag
    */
    'detail': any;
    /**
    * Add a jsdoc comment describing your method and it's parameters (use `@param`).
    */
    'doThing': () => Promise<void>;
    'open': boolean;
  }
  interface EsriHeaderNotifications {
    /**
    * Text for button that clears all notifications
    */
    'dismissAllLabel': string;
    /**
    * Aria label for noticiation X
    */
    'dismissLabel': string;
    /**
    * Text to display when no notifications are found
    */
    'emptyMessage': string;
    /**
    * array of current notification messages
    */
    'messages': Notification[];
    /**
    * Set true to open notifications dropdown
    */
    'open': boolean;
  }
  interface EsriHeaderSearch {
    /**
    * Form action url
    */
    'action': string;
    /**
    * Translated cancel text
    */
    'cancelText': string;
    /**
    * Translated string for aria label of form
    */
    'formText': string;
    /**
    * Open state of the search UI
    */
    'open': boolean;
    /**
    * Translated input label text
    */
    'placeholderText': string;
    /**
    * Translated aria label for search icon
    */
    'searchText': string;
    /**
    * Translated submit text
    */
    'submitText': string;
  }
}

declare global {


  interface HTMLEsriFooterElement extends Components.EsriFooter, HTMLStencilElement {}
  var HTMLEsriFooterElement: {
    prototype: HTMLEsriFooterElement;
    new (): HTMLEsriFooterElement;
  };

  interface HTMLEsriFooterBrandElement extends Components.EsriFooterBrand, HTMLStencilElement {}
  var HTMLEsriFooterBrandElement: {
    prototype: HTMLEsriFooterBrandElement;
    new (): HTMLEsriFooterBrandElement;
  };

  interface HTMLEsriFooterBreadcrumbsElement extends Components.EsriFooterBreadcrumbs, HTMLStencilElement {}
  var HTMLEsriFooterBreadcrumbsElement: {
    prototype: HTMLEsriFooterBreadcrumbsElement;
    new (): HTMLEsriFooterBreadcrumbsElement;
  };

  interface HTMLEsriFooterLanguageElement extends Components.EsriFooterLanguage, HTMLStencilElement {}
  var HTMLEsriFooterLanguageElement: {
    prototype: HTMLEsriFooterLanguageElement;
    new (): HTMLEsriFooterLanguageElement;
  };

  interface HTMLEsriFooterSocialElement extends Components.EsriFooterSocial, HTMLStencilElement {}
  var HTMLEsriFooterSocialElement: {
    prototype: HTMLEsriFooterSocialElement;
    new (): HTMLEsriFooterSocialElement;
  };

  interface HTMLEsriHeaderElement extends Components.EsriHeader, HTMLStencilElement {}
  var HTMLEsriHeaderElement: {
    prototype: HTMLEsriHeaderElement;
    new (): HTMLEsriHeaderElement;
  };

  interface HTMLEsriHeaderAccountElement extends Components.EsriHeaderAccount, HTMLStencilElement {}
  var HTMLEsriHeaderAccountElement: {
    prototype: HTMLEsriHeaderAccountElement;
    new (): HTMLEsriHeaderAccountElement;
  };

  interface HTMLEsriHeaderAppsElement extends Components.EsriHeaderApps, HTMLStencilElement {}
  var HTMLEsriHeaderAppsElement: {
    prototype: HTMLEsriHeaderAppsElement;
    new (): HTMLEsriHeaderAppsElement;
  };

  interface HTMLEsriHeaderBrandElement extends Components.EsriHeaderBrand, HTMLStencilElement {}
  var HTMLEsriHeaderBrandElement: {
    prototype: HTMLEsriHeaderBrandElement;
    new (): HTMLEsriHeaderBrandElement;
  };

  interface HTMLEsriHeaderCartElement extends Components.EsriHeaderCart, HTMLStencilElement {}
  var HTMLEsriHeaderCartElement: {
    prototype: HTMLEsriHeaderCartElement;
    new (): HTMLEsriHeaderCartElement;
  };

  interface HTMLEsriHeaderInlineSearchElement extends Components.EsriHeaderInlineSearch, HTMLStencilElement {}
  var HTMLEsriHeaderInlineSearchElement: {
    prototype: HTMLEsriHeaderInlineSearchElement;
    new (): HTMLEsriHeaderInlineSearchElement;
  };

  interface HTMLEsriHeaderInlineTitleElement extends Components.EsriHeaderInlineTitle, HTMLStencilElement {}
  var HTMLEsriHeaderInlineTitleElement: {
    prototype: HTMLEsriHeaderInlineTitleElement;
    new (): HTMLEsriHeaderInlineTitleElement;
  };

  interface HTMLEsriHeaderMenusElement extends Components.EsriHeaderMenus, HTMLStencilElement {}
  var HTMLEsriHeaderMenusElement: {
    prototype: HTMLEsriHeaderMenusElement;
    new (): HTMLEsriHeaderMenusElement;
  };

  interface HTMLEsriHeaderNotificationsElement extends Components.EsriHeaderNotifications, HTMLStencilElement {}
  var HTMLEsriHeaderNotificationsElement: {
    prototype: HTMLEsriHeaderNotificationsElement;
    new (): HTMLEsriHeaderNotificationsElement;
  };

  interface HTMLEsriHeaderSearchElement extends Components.EsriHeaderSearch, HTMLStencilElement {}
  var HTMLEsriHeaderSearchElement: {
    prototype: HTMLEsriHeaderSearchElement;
    new (): HTMLEsriHeaderSearchElement;
  };
  interface HTMLElementTagNameMap {
    'esri-footer': HTMLEsriFooterElement;
    'esri-footer-brand': HTMLEsriFooterBrandElement;
    'esri-footer-breadcrumbs': HTMLEsriFooterBreadcrumbsElement;
    'esri-footer-language': HTMLEsriFooterLanguageElement;
    'esri-footer-social': HTMLEsriFooterSocialElement;
    'esri-header': HTMLEsriHeaderElement;
    'esri-header-account': HTMLEsriHeaderAccountElement;
    'esri-header-apps': HTMLEsriHeaderAppsElement;
    'esri-header-brand': HTMLEsriHeaderBrandElement;
    'esri-header-cart': HTMLEsriHeaderCartElement;
    'esri-header-inline-search': HTMLEsriHeaderInlineSearchElement;
    'esri-header-inline-title': HTMLEsriHeaderInlineTitleElement;
    'esri-header-menus': HTMLEsriHeaderMenusElement;
    'esri-header-notifications': HTMLEsriHeaderNotificationsElement;
    'esri-header-search': HTMLEsriHeaderSearchElement;
  }
}

declare namespace LocalJSX {
  interface EsriFooter extends JSXBase.HTMLAttributes<HTMLEsriFooterElement> {
    'onOpen'?: (event: CustomEvent<any>) => void;
    /**
    * Be sure to add a jsdoc comment describing your propery for the generated readme file. If your property should be hidden from documentation, you can use the `@internal` tag
    */
    'property'?: string;
  }
  interface EsriFooterBrand extends JSXBase.HTMLAttributes<HTMLEsriFooterBrandElement> {
    /**
    * Be sure to add a jsdoc comment describing your propery for the generated readme file. If your property should be hidden from documentation, you can use the `@internal` tag
    */
    'detail'?: any;
    'onOpen'?: (event: CustomEvent<any>) => void;
  }
  interface EsriFooterBreadcrumbs extends JSXBase.HTMLAttributes<HTMLEsriFooterBreadcrumbsElement> {
    'onOpen'?: (event: CustomEvent<any>) => void;
    /**
    * Be sure to add a jsdoc comment describing your propery for the generated readme file. If your property should be hidden from documentation, you can use the `@internal` tag
    */
    'property'?: string;
  }
  interface EsriFooterLanguage extends JSXBase.HTMLAttributes<HTMLEsriFooterLanguageElement> {
    'onOpen'?: (event: CustomEvent<any>) => void;
    /**
    * Be sure to add a jsdoc comment describing your propery for the generated readme file. If your property should be hidden from documentation, you can use the `@internal` tag
    */
    'property'?: string;
  }
  interface EsriFooterSocial extends JSXBase.HTMLAttributes<HTMLEsriFooterSocialElement> {
    'onOpen'?: (event: CustomEvent<any>) => void;
    /**
    * Be sure to add a jsdoc comment describing your propery for the generated readme file. If your property should be hidden from documentation, you can use the `@internal` tag
    */
    'property'?: string;
  }
  interface EsriHeader extends JSXBase.HTMLAttributes<HTMLEsriHeaderElement> {
    /**
    * Set to `true` to show hamburger menu regardless of screen size
    */
    'collapseMenus'?: boolean;
    /**
    * App mode will show a color bar at the top and float menu items right
    */
    'theme'?: "web" | "app";
  }
  interface EsriHeaderAccount extends JSXBase.HTMLAttributes<HTMLEsriHeaderAccountElement> {
    /**
    * Array of links to appear in user menu
    */
    'menus'?: UserMenuLink[];
    'onHeader:click:account'?: (event: CustomEvent<any>) => void;
    'onHeader:click:signin'?: (event: CustomEvent<any>) => void;
    'onHeader:click:signout'?: (event: CustomEvent<any>) => void;
    'onHeader:click:switch'?: (event: CustomEvent<any>) => void;
    /**
    * Open state of the menu
    */
    'open'?: boolean;
    /**
    * Translated string for profile
    */
    'profileText'?: string;
    /**
    * Translated string for sign in
    */
    'signInText'?: string;
    /**
    * Translated string for sign out
    */
    'signOutText'?: string;
    /**
    * Translated string for switch account
    */
    'switchText'?: string;
    /**
    * Organization name
    */
    'userGroup'?: string;
    /**
    * Unique user id
    */
    'userId'?: string;
    /**
    * Absolute path to profile photo
    */
    'userImage'?: string;
    /**
    * Human-readable name of the user
    */
    'userName'?: string;
  }
  interface EsriHeaderApps extends JSXBase.HTMLAttributes<HTMLEsriHeaderAppsElement> {
    /**
    * Translated string for app launcher label
    */
    'applicationsText'?: string;
    /**
    * Translated string for dismissing help message
    */
    'confirmText'?: string;
    /**
    * Disallow dragging and dropping to reorder applications
    */
    'disableDragAndDrop'?: boolean;
    /**
    * Show help message upon opening app switcher
    */
    'displayIntro'?: boolean;
    /**
    * Translated string for secondary help
    */
    'dragAppsHereText'?: string;
    /**
    * Translated string for sign out
    */
    'introText'?: string;
    /**
    * Set to true while apps are being fetched
    */
    'loading'?: boolean;
    'onHeader:apps:reorder'?: (event: CustomEvent<any>) => void;
    'onHeader:menu:toggle'?: (event: CustomEvent<any>) => void;
    /**
    * Open state of the menu
    */
    'open'?: boolean;
    /**
    * Array of applications to appear in top section of app launcher
    */
    'primary'?: Application[];
    /**
    * Translated string for removed application
    */
    'removeText'?: string;
    /**
    * Translated string for removed application
    */
    'removedText'?: string;
    /**
    * Array of applications to appear in bottom hidden section
    */
    'secondary'?: Application[];
    /**
    * Translated string for show more
    */
    'showMoreText'?: string;
  }
  interface EsriHeaderBrand extends JSXBase.HTMLAttributes<HTMLEsriHeaderBrandElement> {
    'brandText'?: string;
    'detail'?: any;
    'distributorImage'?: imgOrSvgDef;
    'distributorImageHeight'?: number;
    'distributorImageWidth'?: number;
    'height'?: number;
    'href'?: string;
    'image'?: imgOrSvgDef;
    'label'?: string;
    'onOpen'?: (event: CustomEvent<any>) => void;
    'width'?: number;
  }
  interface EsriHeaderCart extends JSXBase.HTMLAttributes<HTMLEsriHeaderCartElement> {
    'items'?: number;
    'url'?: string;
  }
  interface EsriHeaderInlineSearch extends JSXBase.HTMLAttributes<HTMLEsriHeaderInlineSearchElement> {
    'onOpen'?: (event: CustomEvent<any>) => void;
    /**
    * Be sure to add a jsdoc comment describing your propery for the generated readme file. If your property should be hidden from documentation, you can use the `@internal` tag
    */
    'property'?: string;
  }
  interface EsriHeaderInlineTitle extends JSXBase.HTMLAttributes<HTMLEsriHeaderInlineTitleElement> {
    'onOpen'?: (event: CustomEvent<any>) => void;
    /**
    * Be sure to add a jsdoc comment describing your propery for the generated readme file. If your property should be hidden from documentation, you can use the `@internal` tag
    */
    'property'?: string;
  }
  interface EsriHeaderMenus extends JSXBase.HTMLAttributes<HTMLEsriHeaderMenusElement> {
    /**
    * Be sure to add a jsdoc comment describing your propery for the generated readme file. If your property should be hidden from documentation, you can use the `@internal` tag
    */
    'detail'?: any;
    'open'?: boolean;
  }
  interface EsriHeaderNotifications extends JSXBase.HTMLAttributes<HTMLEsriHeaderNotificationsElement> {
    /**
    * Text for button that clears all notifications
    */
    'dismissAllLabel'?: string;
    /**
    * Aria label for noticiation X
    */
    'dismissLabel'?: string;
    /**
    * Text to display when no notifications are found
    */
    'emptyMessage'?: string;
    /**
    * array of current notification messages
    */
    'messages'?: Notification[];
    'onHeader:click:notifications:dismiss'?: (event: CustomEvent<any>) => void;
    'onHeader:menu:toggle'?: (event: CustomEvent<any>) => void;
    /**
    * Set true to open notifications dropdown
    */
    'open'?: boolean;
  }
  interface EsriHeaderSearch extends JSXBase.HTMLAttributes<HTMLEsriHeaderSearchElement> {
    /**
    * Form action url
    */
    'action'?: string;
    /**
    * Translated cancel text
    */
    'cancelText'?: string;
    /**
    * Translated string for aria label of form
    */
    'formText'?: string;
    'onHeader:menu:toggle'?: (event: CustomEvent<any>) => void;
    /**
    * Open state of the search UI
    */
    'open'?: boolean;
    /**
    * Translated input label text
    */
    'placeholderText'?: string;
    /**
    * Translated aria label for search icon
    */
    'searchText'?: string;
    /**
    * Translated submit text
    */
    'submitText'?: string;
  }

  interface IntrinsicElements {
    'esri-footer': EsriFooter;
    'esri-footer-brand': EsriFooterBrand;
    'esri-footer-breadcrumbs': EsriFooterBreadcrumbs;
    'esri-footer-language': EsriFooterLanguage;
    'esri-footer-social': EsriFooterSocial;
    'esri-header': EsriHeader;
    'esri-header-account': EsriHeaderAccount;
    'esri-header-apps': EsriHeaderApps;
    'esri-header-brand': EsriHeaderBrand;
    'esri-header-cart': EsriHeaderCart;
    'esri-header-inline-search': EsriHeaderInlineSearch;
    'esri-header-inline-title': EsriHeaderInlineTitle;
    'esri-header-menus': EsriHeaderMenus;
    'esri-header-notifications': EsriHeaderNotifications;
    'esri-header-search': EsriHeaderSearch;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


