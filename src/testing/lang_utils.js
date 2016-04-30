'use strict';"use strict";
function getTypeOf(instance) {
    return instance.constructor;
}
exports.getTypeOf = getTypeOf;
function instantiateType(type, params) {
    if (params === void 0) { params = []; }
    var instance = Object.create(type.prototype);
    instance.constructor.apply(instance, params);
    return instance;
}
exports.instantiateType = instantiateType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ191dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtSzdkYk10MUQudG1wL2FuZ3VsYXIyL3NyYy90ZXN0aW5nL2xhbmdfdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1CQUEwQixRQUFRO0lBQ2hDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO0FBQzlCLENBQUM7QUFGZSxpQkFBUyxZQUV4QixDQUFBO0FBRUQseUJBQWdDLElBQWMsRUFBRSxNQUFrQjtJQUFsQixzQkFBa0IsR0FBbEIsV0FBa0I7SUFDaEUsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0MsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDbEIsQ0FBQztBQUplLHVCQUFlLGtCQUk5QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGVPZihpbnN0YW5jZSkge1xuICByZXR1cm4gaW5zdGFuY2UuY29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50aWF0ZVR5cGUodHlwZTogRnVuY3Rpb24sIHBhcmFtczogYW55W10gPSBbXSkge1xuICB2YXIgaW5zdGFuY2UgPSBPYmplY3QuY3JlYXRlKHR5cGUucHJvdG90eXBlKTtcbiAgaW5zdGFuY2UuY29uc3RydWN0b3IuYXBwbHkoaW5zdGFuY2UsIHBhcmFtcyk7XG4gIHJldHVybiBpbnN0YW5jZTtcbn1cbiJdfQ==