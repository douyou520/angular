'use strict';"use strict";
var lang_1 = require('angular2/src/facade/lang');
var di_1 = require('angular2/src/core/di');
var xhr_1 = require('angular2/src/compiler/xhr');
var core_1 = require("angular2/core");
var common_1 = require("angular2/common");
var testability_1 = require('angular2/src/core/testability/testability');
var dom_adapter_1 = require('angular2/src/platform/dom/dom_adapter');
var dom_events_1 = require('angular2/src/platform/dom/events/dom_events');
var key_events_1 = require('angular2/src/platform/dom/events/key_events');
var dom_tokens_1 = require('angular2/src/platform/dom/dom_tokens');
var dom_renderer_1 = require('angular2/src/platform/dom/dom_renderer');
var shared_styles_host_1 = require('angular2/src/platform/dom/shared_styles_host');
var browser_details_1 = require("angular2/src/animate/browser_details");
var animation_builder_1 = require("angular2/src/animate/animation_builder");
var browser_adapter_1 = require('./browser/browser_adapter');
var testability_2 = require('angular2/src/platform/browser/testability');
var xhr_cache_1 = require('angular2/src/platform/browser/xhr_cache');
var wtf_init_1 = require('angular2/src/core/profile/wtf_init');
var event_manager_1 = require("angular2/src/platform/dom/events/event_manager");
var hammer_gestures_1 = require('angular2/src/platform/dom/events/hammer_gestures');
var common_dom_1 = require('angular2/platform/common_dom');
var dom_tokens_2 = require('angular2/src/platform/dom/dom_tokens');
exports.DOCUMENT = dom_tokens_2.DOCUMENT;
var title_1 = require('angular2/src/platform/browser/title');
exports.Title = title_1.Title;
var common_dom_2 = require('angular2/platform/common_dom');
exports.ELEMENT_PROBE_PROVIDERS = common_dom_2.ELEMENT_PROBE_PROVIDERS;
exports.ELEMENT_PROBE_PROVIDERS_PROD_MODE = common_dom_2.ELEMENT_PROBE_PROVIDERS_PROD_MODE;
exports.inspectNativeElement = common_dom_2.inspectNativeElement;
exports.By = common_dom_2.By;
var browser_adapter_2 = require('./browser/browser_adapter');
exports.BrowserDomAdapter = browser_adapter_2.BrowserDomAdapter;
var tools_1 = require('angular2/src/platform/browser/tools/tools');
exports.enableDebugTools = tools_1.enableDebugTools;
exports.disableDebugTools = tools_1.disableDebugTools;
var hammer_gestures_2 = require('./dom/events/hammer_gestures');
exports.HAMMER_GESTURE_CONFIG = hammer_gestures_2.HAMMER_GESTURE_CONFIG;
exports.HammerGestureConfig = hammer_gestures_2.HammerGestureConfig;
exports.BROWSER_PLATFORM_MARKER = 
/*@ts2dart_const*/ new di_1.OpaqueToken('BrowserPlatformMarker');
/**
 * A set of providers to initialize the Angular platform in a web browser.
 *
 * Used automatically by `bootstrap`, or can be passed to {@link platform}.
 */
exports.BROWSER_PROVIDERS = [
    /*@ts2dart_Provider*/ { provide: exports.BROWSER_PLATFORM_MARKER, useValue: true },
    core_1.PLATFORM_COMMON_PROVIDERS,
    /*@ts2dart_Provider*/ { provide: core_1.PLATFORM_INITIALIZER, useValue: initDomAdapter, multi: true },
];
function _exceptionHandler() {
    // !IS_DART is required because we must rethrow exceptions in JS,
    // but must not rethrow exceptions in Dart
    return new core_1.ExceptionHandler(dom_adapter_1.DOM, !lang_1.IS_DART);
}
function _document() {
    return dom_adapter_1.DOM.defaultDoc();
}
/**
 * A set of providers to initialize an Angular application in a web browser.
 *
 * Used automatically by `bootstrap`, or can be passed to {@link PlatformRef.application}.
 */
exports.BROWSER_APP_COMMON_PROVIDERS = 
/*@ts2dart_const*/ [
    core_1.APPLICATION_COMMON_PROVIDERS,
    common_1.FORM_PROVIDERS,
    /* @ts2dart_Provider */ { provide: core_1.PLATFORM_PIPES, useValue: common_1.COMMON_PIPES, multi: true },
    /* @ts2dart_Provider */ { provide: core_1.PLATFORM_DIRECTIVES, useValue: common_1.COMMON_DIRECTIVES, multi: true },
    /* @ts2dart_Provider */ { provide: core_1.ExceptionHandler, useFactory: _exceptionHandler, deps: [] },
    /* @ts2dart_Provider */ { provide: dom_tokens_1.DOCUMENT, useFactory: _document, deps: [] },
    /* @ts2dart_Provider */ { provide: event_manager_1.EVENT_MANAGER_PLUGINS, useClass: dom_events_1.DomEventsPlugin, multi: true },
    /* @ts2dart_Provider */ { provide: event_manager_1.EVENT_MANAGER_PLUGINS, useClass: key_events_1.KeyEventsPlugin, multi: true },
    /* @ts2dart_Provider */ { provide: event_manager_1.EVENT_MANAGER_PLUGINS, useClass: hammer_gestures_1.HammerGesturesPlugin, multi: true },
    /* @ts2dart_Provider */ { provide: hammer_gestures_1.HAMMER_GESTURE_CONFIG, useClass: hammer_gestures_1.HammerGestureConfig },
    /* @ts2dart_Provider */ { provide: dom_renderer_1.DomRootRenderer, useClass: dom_renderer_1.DomRootRenderer_ },
    /* @ts2dart_Provider */ { provide: core_1.RootRenderer, useExisting: dom_renderer_1.DomRootRenderer },
    /* @ts2dart_Provider */ { provide: shared_styles_host_1.SharedStylesHost, useExisting: shared_styles_host_1.DomSharedStylesHost },
    shared_styles_host_1.DomSharedStylesHost,
    testability_1.Testability,
    browser_details_1.BrowserDetails,
    animation_builder_1.AnimationBuilder,
    event_manager_1.EventManager,
    common_dom_1.ELEMENT_PROBE_PROVIDERS
];
exports.CACHED_TEMPLATE_PROVIDER = 
/*@ts2dart_const*/ [{ provide: xhr_1.XHR, useClass: xhr_cache_1.CachedXHR }];
function initDomAdapter() {
    browser_adapter_1.BrowserDomAdapter.makeCurrent();
    wtf_init_1.wtfInit();
    testability_2.BrowserGetTestability.init();
}
exports.initDomAdapter = initDomAdapter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl9jb21tb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLVFnRWdXWG5tLnRtcC9hbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlcl9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFzQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ2pELG1CQUE2QyxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3BFLG9CQUFrQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzlDLHFCQVdPLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZCLHVCQUE4RCxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hGLDRCQUEwQiwyQ0FBMkMsQ0FBQyxDQUFBO0FBQ3RFLDRCQUFrQix1Q0FBdUMsQ0FBQyxDQUFBO0FBQzFELDJCQUE4Qiw2Q0FBNkMsQ0FBQyxDQUFBO0FBQzVFLDJCQUE4Qiw2Q0FBNkMsQ0FBQyxDQUFBO0FBQzVFLDJCQUF1QixzQ0FBc0MsQ0FBQyxDQUFBO0FBQzlELDZCQUFnRCx3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3pGLG1DQUFvRCw4Q0FBOEMsQ0FBQyxDQUFBO0FBQ25HLGdDQUE2QixzQ0FBc0MsQ0FBQyxDQUFBO0FBQ3BFLGtDQUErQix3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3hFLGdDQUFnQywyQkFBMkIsQ0FBQyxDQUFBO0FBQzVELDRCQUFvQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ2hGLDBCQUF3Qix5Q0FBeUMsQ0FBQyxDQUFBO0FBQ2xFLHlCQUFzQixvQ0FBb0MsQ0FBQyxDQUFBO0FBQzNELDhCQUFrRCxnREFBZ0QsQ0FBQyxDQUFBO0FBQ25HLGdDQUlPLGtEQUFrRCxDQUFDLENBQUE7QUFDMUQsMkJBQXNDLDhCQUE4QixDQUFDLENBQUE7QUFDckUsMkJBQXVCLHNDQUFzQyxDQUFDO0FBQXRELHlDQUFzRDtBQUM5RCxzQkFBb0IscUNBQXFDLENBQUM7QUFBbEQsOEJBQWtEO0FBQzFELDJCQUtPLDhCQUE4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Q1YsbUNBQXFCLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDL0IsQ0FBQztBQUplLHNCQUFjLGlCQUk3QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJU19EQVJUfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtwcm92aWRlLCBJbmplY3RvciwgT3BhcXVlVG9rZW59IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7WEhSfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIveGhyJztcbmltcG9ydCB7XG4gIFBMQVRGT1JNX0lOSVRJQUxJWkVSLFxuICBQTEFURk9STV9ESVJFQ1RJVkVTLFxuICBQTEFURk9STV9QSVBFUyxcbiAgQ29tcG9uZW50UmVmLFxuICBFeGNlcHRpb25IYW5kbGVyLFxuICBSZWZsZWN0b3IsXG4gIFJvb3RSZW5kZXJlcixcbiAgcmVmbGVjdG9yLFxuICBBUFBMSUNBVElPTl9DT01NT05fUFJPVklERVJTLFxuICBQTEFURk9STV9DT01NT05fUFJPVklERVJTXG59IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0NPTU1PTl9ESVJFQ1RJVkVTLCBDT01NT05fUElQRVMsIEZPUk1fUFJPVklERVJTfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge1Rlc3RhYmlsaXR5fSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS90ZXN0YWJpbGl0eS90ZXN0YWJpbGl0eSc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fYWRhcHRlcic7XG5pbXBvcnQge0RvbUV2ZW50c1BsdWdpbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9ldmVudHMvZG9tX2V2ZW50cyc7XG5pbXBvcnQge0tleUV2ZW50c1BsdWdpbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9ldmVudHMva2V5X2V2ZW50cyc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV90b2tlbnMnO1xuaW1wb3J0IHtEb21Sb290UmVuZGVyZXIsIERvbVJvb3RSZW5kZXJlcl99IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZG9tX3JlbmRlcmVyJztcbmltcG9ydCB7RG9tU2hhcmVkU3R5bGVzSG9zdCwgU2hhcmVkU3R5bGVzSG9zdH0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9zaGFyZWRfc3R5bGVzX2hvc3QnO1xuaW1wb3J0IHtCcm93c2VyRGV0YWlsc30gZnJvbSBcImFuZ3VsYXIyL3NyYy9hbmltYXRlL2Jyb3dzZXJfZGV0YWlsc1wiO1xuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2FuaW1hdGUvYW5pbWF0aW9uX2J1aWxkZXJcIjtcbmltcG9ydCB7QnJvd3NlckRvbUFkYXB0ZXJ9IGZyb20gJy4vYnJvd3Nlci9icm93c2VyX2FkYXB0ZXInO1xuaW1wb3J0IHtCcm93c2VyR2V0VGVzdGFiaWxpdHl9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9icm93c2VyL3Rlc3RhYmlsaXR5JztcbmltcG9ydCB7Q2FjaGVkWEhSfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci94aHJfY2FjaGUnO1xuaW1wb3J0IHt3dGZJbml0fSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9wcm9maWxlL3d0Zl9pbml0JztcbmltcG9ydCB7RXZlbnRNYW5hZ2VyLCBFVkVOVF9NQU5BR0VSX1BMVUdJTlN9IGZyb20gXCJhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2V2ZW50cy9ldmVudF9tYW5hZ2VyXCI7XG5pbXBvcnQge1xuICBIQU1NRVJfR0VTVFVSRV9DT05GSUcsXG4gIEhhbW1lckdlc3R1cmVDb25maWcsXG4gIEhhbW1lckdlc3R1cmVzUGx1Z2luXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZXZlbnRzL2hhbW1lcl9nZXN0dXJlcyc7XG5pbXBvcnQge0VMRU1FTlRfUFJPQkVfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9jb21tb25fZG9tJztcbmV4cG9ydCB7RE9DVU1FTlR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZG9tX3Rva2Vucyc7XG5leHBvcnQge1RpdGxlfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci90aXRsZSc7XG5leHBvcnQge1xuICBFTEVNRU5UX1BST0JFX1BST1ZJREVSUyxcbiAgRUxFTUVOVF9QUk9CRV9QUk9WSURFUlNfUFJPRF9NT0RFLFxuICBpbnNwZWN0TmF0aXZlRWxlbWVudCxcbiAgQnlcbn0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vY29tbW9uX2RvbSc7XG5leHBvcnQge0Jyb3dzZXJEb21BZGFwdGVyfSBmcm9tICcuL2Jyb3dzZXIvYnJvd3Nlcl9hZGFwdGVyJztcbmV4cG9ydCB7ZW5hYmxlRGVidWdUb29scywgZGlzYWJsZURlYnVnVG9vbHN9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9icm93c2VyL3Rvb2xzL3Rvb2xzJztcbmV4cG9ydCB7SEFNTUVSX0dFU1RVUkVfQ09ORklHLCBIYW1tZXJHZXN0dXJlQ29uZmlnfSBmcm9tICcuL2RvbS9ldmVudHMvaGFtbWVyX2dlc3R1cmVzJztcblxuZXhwb3J0IGNvbnN0IEJST1dTRVJfUExBVEZPUk1fTUFSS0VSID1cbiAgICAvKkB0czJkYXJ0X2NvbnN0Ki8gbmV3IE9wYXF1ZVRva2VuKCdCcm93c2VyUGxhdGZvcm1NYXJrZXInKTtcblxuLyoqXG4gKiBBIHNldCBvZiBwcm92aWRlcnMgdG8gaW5pdGlhbGl6ZSB0aGUgQW5ndWxhciBwbGF0Zm9ybSBpbiBhIHdlYiBicm93c2VyLlxuICpcbiAqIFVzZWQgYXV0b21hdGljYWxseSBieSBgYm9vdHN0cmFwYCwgb3IgY2FuIGJlIHBhc3NlZCB0byB7QGxpbmsgcGxhdGZvcm19LlxuICovXG5leHBvcnQgY29uc3QgQlJPV1NFUl9QUk9WSURFUlM6IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+ID0gLypAdHMyZGFydF9jb25zdCovW1xuICAvKkB0czJkYXJ0X1Byb3ZpZGVyKi8ge3Byb3ZpZGU6IEJST1dTRVJfUExBVEZPUk1fTUFSS0VSLCB1c2VWYWx1ZTogdHJ1ZX0sXG4gIFBMQVRGT1JNX0NPTU1PTl9QUk9WSURFUlMsXG4gIC8qQHRzMmRhcnRfUHJvdmlkZXIqLyB7cHJvdmlkZTogUExBVEZPUk1fSU5JVElBTElaRVIsIHVzZVZhbHVlOiBpbml0RG9tQWRhcHRlciwgbXVsdGk6IHRydWV9LFxuXTtcblxuZnVuY3Rpb24gX2V4Y2VwdGlvbkhhbmRsZXIoKTogRXhjZXB0aW9uSGFuZGxlciB7XG4gIC8vICFJU19EQVJUIGlzIHJlcXVpcmVkIGJlY2F1c2Ugd2UgbXVzdCByZXRocm93IGV4Y2VwdGlvbnMgaW4gSlMsXG4gIC8vIGJ1dCBtdXN0IG5vdCByZXRocm93IGV4Y2VwdGlvbnMgaW4gRGFydFxuICByZXR1cm4gbmV3IEV4Y2VwdGlvbkhhbmRsZXIoRE9NLCAhSVNfREFSVCk7XG59XG5cbmZ1bmN0aW9uIF9kb2N1bWVudCgpOiBhbnkge1xuICByZXR1cm4gRE9NLmRlZmF1bHREb2MoKTtcbn1cblxuLyoqXG4gKiBBIHNldCBvZiBwcm92aWRlcnMgdG8gaW5pdGlhbGl6ZSBhbiBBbmd1bGFyIGFwcGxpY2F0aW9uIGluIGEgd2ViIGJyb3dzZXIuXG4gKlxuICogVXNlZCBhdXRvbWF0aWNhbGx5IGJ5IGBib290c3RyYXBgLCBvciBjYW4gYmUgcGFzc2VkIHRvIHtAbGluayBQbGF0Zm9ybVJlZi5hcHBsaWNhdGlvbn0uXG4gKi9cbmV4cG9ydCBjb25zdCBCUk9XU0VSX0FQUF9DT01NT05fUFJPVklERVJTOiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPiA9XG4gICAgLypAdHMyZGFydF9jb25zdCovW1xuICAgICAgQVBQTElDQVRJT05fQ09NTU9OX1BST1ZJREVSUyxcbiAgICAgIEZPUk1fUFJPVklERVJTLFxuICAgICAgLyogQHRzMmRhcnRfUHJvdmlkZXIgKi8ge3Byb3ZpZGU6IFBMQVRGT1JNX1BJUEVTLCB1c2VWYWx1ZTogQ09NTU9OX1BJUEVTLCBtdWx0aTogdHJ1ZX0sXG4gICAgICAvKiBAdHMyZGFydF9Qcm92aWRlciAqLyB7cHJvdmlkZTogUExBVEZPUk1fRElSRUNUSVZFUywgdXNlVmFsdWU6IENPTU1PTl9ESVJFQ1RJVkVTLCBtdWx0aTogdHJ1ZX0sXG4gICAgICAvKiBAdHMyZGFydF9Qcm92aWRlciAqLyB7cHJvdmlkZTogRXhjZXB0aW9uSGFuZGxlciwgdXNlRmFjdG9yeTogX2V4Y2VwdGlvbkhhbmRsZXIsIGRlcHM6IFtdfSxcbiAgICAgIC8qIEB0czJkYXJ0X1Byb3ZpZGVyICovIHtwcm92aWRlOiBET0NVTUVOVCwgdXNlRmFjdG9yeTogX2RvY3VtZW50LCBkZXBzOiBbXX0sXG4gICAgICAvKiBAdHMyZGFydF9Qcm92aWRlciAqLyB7cHJvdmlkZTogRVZFTlRfTUFOQUdFUl9QTFVHSU5TLCB1c2VDbGFzczogRG9tRXZlbnRzUGx1Z2luLCBtdWx0aTogdHJ1ZX0sXG4gICAgICAvKiBAdHMyZGFydF9Qcm92aWRlciAqLyB7cHJvdmlkZTogRVZFTlRfTUFOQUdFUl9QTFVHSU5TLCB1c2VDbGFzczogS2V5RXZlbnRzUGx1Z2luLCBtdWx0aTogdHJ1ZX0sXG4gICAgICAvKiBAdHMyZGFydF9Qcm92aWRlciAqLyB7cHJvdmlkZTogRVZFTlRfTUFOQUdFUl9QTFVHSU5TLCB1c2VDbGFzczogSGFtbWVyR2VzdHVyZXNQbHVnaW4sIG11bHRpOiB0cnVlfSxcbiAgICAgIC8qIEB0czJkYXJ0X1Byb3ZpZGVyICovIHtwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBIYW1tZXJHZXN0dXJlQ29uZmlnfSxcbiAgICAgIC8qIEB0czJkYXJ0X1Byb3ZpZGVyICovIHtwcm92aWRlOiBEb21Sb290UmVuZGVyZXIsIHVzZUNsYXNzOiBEb21Sb290UmVuZGVyZXJffSxcbiAgICAgIC8qIEB0czJkYXJ0X1Byb3ZpZGVyICovIHtwcm92aWRlOiBSb290UmVuZGVyZXIsIHVzZUV4aXN0aW5nOiBEb21Sb290UmVuZGVyZXJ9LFxuICAgICAgLyogQHRzMmRhcnRfUHJvdmlkZXIgKi8ge3Byb3ZpZGU6IFNoYXJlZFN0eWxlc0hvc3QsIHVzZUV4aXN0aW5nOiBEb21TaGFyZWRTdHlsZXNIb3N0fSxcbiAgICAgIERvbVNoYXJlZFN0eWxlc0hvc3QsXG4gICAgICBUZXN0YWJpbGl0eSxcbiAgICAgIEJyb3dzZXJEZXRhaWxzLFxuICAgICAgQW5pbWF0aW9uQnVpbGRlcixcbiAgICAgIEV2ZW50TWFuYWdlcixcbiAgICAgIEVMRU1FTlRfUFJPQkVfUFJPVklERVJTXG4gICAgXTtcblxuZXhwb3J0IGNvbnN0IENBQ0hFRF9URU1QTEFURV9QUk9WSURFUjogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4gPVxuICAgIC8qQHRzMmRhcnRfY29uc3QqL1svKkB0czJkYXJ0X1Byb3ZpZGVyKi8ge3Byb3ZpZGU6IFhIUiwgdXNlQ2xhc3M6IENhY2hlZFhIUn1dO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdERvbUFkYXB0ZXIoKSB7XG4gIEJyb3dzZXJEb21BZGFwdGVyLm1ha2VDdXJyZW50KCk7XG4gIHd0ZkluaXQoKTtcbiAgQnJvd3NlckdldFRlc3RhYmlsaXR5LmluaXQoKTtcbn1cbiJdfQ==