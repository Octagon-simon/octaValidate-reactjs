/**
 * Validate your HTML forms client-side.
 *
 * To use this library, create a new instance of this function and pass in the form element id as the first argument and any configuration option as the second argument. You may ignore the second argument (configuration options) for the library to use its default.
 * 
 * 
 * Now make sure that the form inputs that you wish to validate have an [id] attached to them and the attribute [octavalidate] with a list of validation rules. [Please refer to the readme file]
 *
 * ```js
 * import { octaValidate } from 'octavalidate-reactjs'
 * const myForm = new octaValidate('form_register')
 * ```
 *
 * Now on the submit event listener, invoke the `validate()` method to begin form validation
 * 
 * ```js
 * const handleSubmit =(e) => {
 *      e.preventDefault()
 *     //begin validation
 *     if( myForm.validate() ){
 *         //process form data here
 *     }
   }
 * ```
 * 
 * @param form_id The form element ID. Make sure that the form element has an ID attached to it.
 * @param config The configuration options. You may provide an object with configuration options
 * @returns An Object.
 */
export function octaValidate(form_id: string, config?: object | undefined): object