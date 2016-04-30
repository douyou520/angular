import { ComponentResolver } from 'angular2/core';
import { LocationStrategy, PathLocationStrategy, Location } from 'angular2/platform/common';
import { Router, RouterOutletMap } from './router';
import { RouterUrlSerializer, DefaultRouterUrlSerializer } from './router_url_serializer';
import { ApplicationRef } from 'angular2/core';
import { BaseException } from 'angular2/src/facade/exceptions';
export const ROUTER_PROVIDERS_COMMON = [
    RouterOutletMap,
    /*@ts2dart_Provider*/ { provide: RouterUrlSerializer, useClass: DefaultRouterUrlSerializer },
    /*@ts2dart_Provider*/ { provide: LocationStrategy, useClass: PathLocationStrategy }, Location,
    /*@ts2dart_Provider*/ {
        provide: Router,
        useFactory: routerFactory,
        deps: /*@ts2dart_const*/ [ApplicationRef, ComponentResolver, RouterUrlSerializer, RouterOutletMap, Location],
    },
];
function routerFactory(app, componentResolver, urlSerializer, routerOutletMap, location) {
    if (app.componentTypes.length == 0) {
        throw new BaseException("Bootstrap at least one component before injecting Router.");
    }
    // TODO: vsavkin this should not be null
    return new Router(null, app.componentTypes[0], componentResolver, urlSerializer, routerOutletMap, location);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVyc19jb21tb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLWx1czVVU0syLnRtcC9hbmd1bGFyMi9zcmMvYWx0X3JvdXRlci9yb3V0ZXJfcHJvdmlkZXJzX2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFjLGlCQUFpQixFQUFDLE1BQU0sZUFBZTtPQUNyRCxFQUFDLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBQyxNQUFNLDBCQUEwQjtPQUNsRixFQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUMsTUFBTSxVQUFVO09BQ3pDLEVBQUMsbUJBQW1CLEVBQUUsMEJBQTBCLEVBQUMsTUFBTSx5QkFBeUI7T0FDaEYsRUFBQyxjQUFjLEVBQUMsTUFBTSxlQUFlO09BQ3JDLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0NBQWdDO0FBRTVELE9BQU8sTUFBTSx1QkFBdUIsR0FBNEI7SUFDOUQsZUFBZTtJQUNmLHFCQUFxQixDQUFDLEVBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSwwQkFBMEIsRUFBQztJQUMxRixxQkFBcUIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUMsRUFBRSxRQUFRO0lBQzNGLHFCQUFxQixDQUFDO1FBQ3BCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsVUFBVSxFQUFFLGFBQWE7UUFDekIsSUFBSSxFQUFFLGtCQUFrQixDQUNwQixDQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDO0tBQ3hGO0NBQ0YsQ0FBQztBQUVGLHVCQUF1QixHQUFtQixFQUFFLGlCQUFvQyxFQUN6RCxhQUFrQyxFQUFFLGVBQWdDLEVBQ3BFLFFBQWtCO0lBQ3ZDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsTUFBTSxJQUFJLGFBQWEsQ0FBQywyREFBMkQsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFDRCx3Q0FBd0M7SUFDeEMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQzlFLFFBQVEsQ0FBQyxDQUFDO0FBQzlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wYXF1ZVRva2VuLCBDb21wb25lbnRSZXNvbHZlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0xvY2F0aW9uU3RyYXRlZ3ksIFBhdGhMb2NhdGlvblN0cmF0ZWd5LCBMb2NhdGlvbn0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vY29tbW9uJztcbmltcG9ydCB7Um91dGVyLCBSb3V0ZXJPdXRsZXRNYXB9IGZyb20gJy4vcm91dGVyJztcbmltcG9ydCB7Um91dGVyVXJsU2VyaWFsaXplciwgRGVmYXVsdFJvdXRlclVybFNlcmlhbGl6ZXJ9IGZyb20gJy4vcm91dGVyX3VybF9zZXJpYWxpemVyJztcbmltcG9ydCB7QXBwbGljYXRpb25SZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgUk9VVEVSX1BST1ZJREVSU19DT01NT046IGFueVtdID0gLypAdHMyZGFydF9jb25zdCovW1xuICBSb3V0ZXJPdXRsZXRNYXAsXG4gIC8qQHRzMmRhcnRfUHJvdmlkZXIqLyB7cHJvdmlkZTogUm91dGVyVXJsU2VyaWFsaXplciwgdXNlQ2xhc3M6IERlZmF1bHRSb3V0ZXJVcmxTZXJpYWxpemVyfSxcbiAgLypAdHMyZGFydF9Qcm92aWRlciovIHtwcm92aWRlOiBMb2NhdGlvblN0cmF0ZWd5LCB1c2VDbGFzczogUGF0aExvY2F0aW9uU3RyYXRlZ3l9LCBMb2NhdGlvbixcbiAgLypAdHMyZGFydF9Qcm92aWRlciovIHtcbiAgICBwcm92aWRlOiBSb3V0ZXIsXG4gICAgdXNlRmFjdG9yeTogcm91dGVyRmFjdG9yeSxcbiAgICBkZXBzOiAvKkB0czJkYXJ0X2NvbnN0Ki9cbiAgICAgICAgW0FwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRSZXNvbHZlciwgUm91dGVyVXJsU2VyaWFsaXplciwgUm91dGVyT3V0bGV0TWFwLCBMb2NhdGlvbl0sXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiByb3V0ZXJGYWN0b3J5KGFwcDogQXBwbGljYXRpb25SZWYsIGNvbXBvbmVudFJlc29sdmVyOiBDb21wb25lbnRSZXNvbHZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgdXJsU2VyaWFsaXplcjogUm91dGVyVXJsU2VyaWFsaXplciwgcm91dGVyT3V0bGV0TWFwOiBSb3V0ZXJPdXRsZXRNYXAsXG4gICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBMb2NhdGlvbik6IFJvdXRlciB7XG4gIGlmIChhcHAuY29tcG9uZW50VHlwZXMubGVuZ3RoID09IDApIHtcbiAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihcIkJvb3RzdHJhcCBhdCBsZWFzdCBvbmUgY29tcG9uZW50IGJlZm9yZSBpbmplY3RpbmcgUm91dGVyLlwiKTtcbiAgfVxuICAvLyBUT0RPOiB2c2F2a2luIHRoaXMgc2hvdWxkIG5vdCBiZSBudWxsXG4gIHJldHVybiBuZXcgUm91dGVyKG51bGwsIGFwcC5jb21wb25lbnRUeXBlc1swXSwgY29tcG9uZW50UmVzb2x2ZXIsIHVybFNlcmlhbGl6ZXIsIHJvdXRlck91dGxldE1hcCxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24pO1xufSJdfQ==