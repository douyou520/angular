import { NgControlName } from './directives/ng_control_name';
import { NgFormControl } from './directives/ng_form_control';
import { NgModel } from './directives/ng_model';
import { NgControlGroup } from './directives/ng_control_group';
import { NgFormModel } from './directives/ng_form_model';
import { NgForm } from './directives/ng_form';
import { DefaultValueAccessor } from './directives/default_value_accessor';
import { CheckboxControlValueAccessor } from './directives/checkbox_value_accessor';
import { NumberValueAccessor } from './directives/number_value_accessor';
import { RadioControlValueAccessor } from './directives/radio_control_value_accessor';
import { NgControlStatus } from './directives/ng_control_status';
import { SelectControlValueAccessor, NgSelectOption } from './directives/select_control_value_accessor';
import { RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator } from './directives/validators';
export { NgControlName } from './directives/ng_control_name';
export { NgFormControl } from './directives/ng_form_control';
export { NgModel } from './directives/ng_model';
export { NgControlGroup } from './directives/ng_control_group';
export { NgFormModel } from './directives/ng_form_model';
export { NgForm } from './directives/ng_form';
export { DefaultValueAccessor } from './directives/default_value_accessor';
export { CheckboxControlValueAccessor } from './directives/checkbox_value_accessor';
export { RadioControlValueAccessor, RadioButtonState } from './directives/radio_control_value_accessor';
export { NumberValueAccessor } from './directives/number_value_accessor';
export { NgControlStatus } from './directives/ng_control_status';
export { SelectControlValueAccessor, NgSelectOption } from './directives/select_control_value_accessor';
export { RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator } from './directives/validators';
export { NgControl } from './directives/ng_control';
/**
 *
 * A list of all the form directives used as part of a `@Component` annotation.
 *
 *  This is a shorthand for importing them each individually.
 *
 * ### Example
 *
 * ```typescript
 * @Component({
 *   selector: 'my-app',
 *   directives: [FORM_DIRECTIVES]
 * })
 * class MyApp {}
 * ```
 */
export const FORM_DIRECTIVES = [
    NgControlName,
    NgControlGroup,
    NgFormControl,
    NgModel,
    NgFormModel,
    NgForm,
    NgSelectOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    RequiredValidator,
    MinLengthValidator,
    MaxLengthValidator,
    PatternValidator
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtbHVzNVVTSzIudG1wL2FuZ3VsYXIyL3NyYy9jb21tb24vZm9ybXMvZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FDTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDhCQUE4QjtPQUNuRCxFQUFDLGFBQWEsRUFBQyxNQUFNLDhCQUE4QjtPQUNuRCxFQUFDLE9BQU8sRUFBQyxNQUFNLHVCQUF1QjtPQUN0QyxFQUFDLGNBQWMsRUFBQyxNQUFNLCtCQUErQjtPQUNyRCxFQUFDLFdBQVcsRUFBQyxNQUFNLDRCQUE0QjtPQUMvQyxFQUFDLE1BQU0sRUFBQyxNQUFNLHNCQUFzQjtPQUNwQyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDO09BQ2pFLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxzQ0FBc0M7T0FDMUUsRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG9DQUFvQztPQUMvRCxFQUFDLHlCQUF5QixFQUFDLE1BQU0sMkNBQTJDO09BQzVFLEVBQUMsZUFBZSxFQUFDLE1BQU0sZ0NBQWdDO09BQ3ZELEVBQ0wsMEJBQTBCLEVBQzFCLGNBQWMsRUFDZixNQUFNLDRDQUE0QztPQUM1QyxFQUNMLGlCQUFpQixFQUNqQixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNqQixNQUFNLHlCQUF5QjtBQUVoQyxTQUFRLGFBQWEsUUFBTyw4QkFBOEIsQ0FBQztBQUMzRCxTQUFRLGFBQWEsUUFBTyw4QkFBOEIsQ0FBQztBQUMzRCxTQUFRLE9BQU8sUUFBTyx1QkFBdUIsQ0FBQztBQUM5QyxTQUFRLGNBQWMsUUFBTywrQkFBK0IsQ0FBQztBQUM3RCxTQUFRLFdBQVcsUUFBTyw0QkFBNEIsQ0FBQztBQUN2RCxTQUFRLE1BQU0sUUFBTyxzQkFBc0IsQ0FBQztBQUM1QyxTQUFRLG9CQUFvQixRQUFPLHFDQUFxQyxDQUFDO0FBQ3pFLFNBQVEsNEJBQTRCLFFBQU8sc0NBQXNDLENBQUM7QUFDbEYsU0FDRSx5QkFBeUIsRUFDekIsZ0JBQWdCLFFBQ1gsMkNBQTJDLENBQUM7QUFDbkQsU0FBUSxtQkFBbUIsUUFBTyxvQ0FBb0MsQ0FBQztBQUN2RSxTQUFRLGVBQWUsUUFBTyxnQ0FBZ0MsQ0FBQztBQUMvRCxTQUNFLDBCQUEwQixFQUMxQixjQUFjLFFBQ1QsNENBQTRDLENBQUM7QUFDcEQsU0FDRSxpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixnQkFBZ0IsUUFDWCx5QkFBeUIsQ0FBQztBQUNqQyxTQUFRLFNBQVMsUUFBTyx5QkFBeUIsQ0FBQztBQUdsRDs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSCxPQUFPLE1BQU0sZUFBZSxHQUE2QjtJQUN2RCxhQUFhO0lBQ2IsY0FBYztJQUVkLGFBQWE7SUFDYixPQUFPO0lBQ1AsV0FBVztJQUNYLE1BQU07SUFFTixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixlQUFlO0lBRWYsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0NBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1R5cGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge05nQ29udHJvbE5hbWV9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19jb250cm9sX25hbWUnO1xuaW1wb3J0IHtOZ0Zvcm1Db250cm9sfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfZm9ybV9jb250cm9sJztcbmltcG9ydCB7TmdNb2RlbH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX21vZGVsJztcbmltcG9ydCB7TmdDb250cm9sR3JvdXB9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19jb250cm9sX2dyb3VwJztcbmltcG9ydCB7TmdGb3JtTW9kZWx9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19mb3JtX21vZGVsJztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfZm9ybSc7XG5pbXBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGVmYXVsdF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge0NoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9jaGVja2JveF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge051bWJlclZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9udW1iZXJfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmFkaW9fY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge05nQ29udHJvbFN0YXR1c30gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2NvbnRyb2xfc3RhdHVzJztcbmltcG9ydCB7XG4gIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBOZ1NlbGVjdE9wdGlvblxufSBmcm9tICcuL2RpcmVjdGl2ZXMvc2VsZWN0X2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtcbiAgUmVxdWlyZWRWYWxpZGF0b3IsXG4gIE1pbkxlbmd0aFZhbGlkYXRvcixcbiAgTWF4TGVuZ3RoVmFsaWRhdG9yLFxuICBQYXR0ZXJuVmFsaWRhdG9yXG59IGZyb20gJy4vZGlyZWN0aXZlcy92YWxpZGF0b3JzJztcblxuZXhwb3J0IHtOZ0NvbnRyb2xOYW1lfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfY29udHJvbF9uYW1lJztcbmV4cG9ydCB7TmdGb3JtQ29udHJvbH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2Zvcm1fY29udHJvbCc7XG5leHBvcnQge05nTW9kZWx9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19tb2RlbCc7XG5leHBvcnQge05nQ29udHJvbEdyb3VwfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfY29udHJvbF9ncm91cCc7XG5leHBvcnQge05nRm9ybU1vZGVsfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfZm9ybV9tb2RlbCc7XG5leHBvcnQge05nRm9ybX0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2Zvcm0nO1xuZXhwb3J0IHtEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL2RlZmF1bHRfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2hlY2tib3hfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtcbiAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvcixcbiAgUmFkaW9CdXR0b25TdGF0ZVxufSBmcm9tICcuL2RpcmVjdGl2ZXMvcmFkaW9fY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge051bWJlclZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9udW1iZXJfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtOZ0NvbnRyb2xTdGF0dXN9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19jb250cm9sX3N0YXR1cyc7XG5leHBvcnQge1xuICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgTmdTZWxlY3RPcHRpb25cbn0gZnJvbSAnLi9kaXJlY3RpdmVzL3NlbGVjdF9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7XG4gIFJlcXVpcmVkVmFsaWRhdG9yLFxuICBNaW5MZW5ndGhWYWxpZGF0b3IsXG4gIE1heExlbmd0aFZhbGlkYXRvcixcbiAgUGF0dGVyblZhbGlkYXRvclxufSBmcm9tICcuL2RpcmVjdGl2ZXMvdmFsaWRhdG9ycyc7XG5leHBvcnQge05nQ29udHJvbH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2NvbnRyb2wnO1xuZXhwb3J0IHtDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuXG4vKipcbiAqXG4gKiBBIGxpc3Qgb2YgYWxsIHRoZSBmb3JtIGRpcmVjdGl2ZXMgdXNlZCBhcyBwYXJ0IG9mIGEgYEBDb21wb25lbnRgIGFubm90YXRpb24uXG4gKlxuICogIFRoaXMgaXMgYSBzaG9ydGhhbmQgZm9yIGltcG9ydGluZyB0aGVtIGVhY2ggaW5kaXZpZHVhbGx5LlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAqICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU11cbiAqIH0pXG4gKiBjbGFzcyBNeUFwcCB7fVxuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBGT1JNX0RJUkVDVElWRVM6IFR5cGVbXSA9IC8qQHRzMmRhcnRfY29uc3QqL1tcbiAgTmdDb250cm9sTmFtZSxcbiAgTmdDb250cm9sR3JvdXAsXG5cbiAgTmdGb3JtQ29udHJvbCxcbiAgTmdNb2RlbCxcbiAgTmdGb3JtTW9kZWwsXG4gIE5nRm9ybSxcblxuICBOZ1NlbGVjdE9wdGlvbixcbiAgRGVmYXVsdFZhbHVlQWNjZXNzb3IsXG4gIE51bWJlclZhbHVlQWNjZXNzb3IsXG4gIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBOZ0NvbnRyb2xTdGF0dXMsXG5cbiAgUmVxdWlyZWRWYWxpZGF0b3IsXG4gIE1pbkxlbmd0aFZhbGlkYXRvcixcbiAgTWF4TGVuZ3RoVmFsaWRhdG9yLFxuICBQYXR0ZXJuVmFsaWRhdG9yXG5dO1xuIl19