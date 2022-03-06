# ReactiveForms

This repo described the following scenarios:

## Cross Fields validation
In this example we want to validate our form based on the values of different fields.
For this, we created a custom validator that receives the parent `FormGroup` (root element), in order to be able to access all target `FormControls`.

![image](https://user-images.githubusercontent.com/13237093/156926952-64bb6ac7-a1e7-45a8-8361-398ff15362a4.png)


## Asynchronous validation
Sometimes we might need to validate our forms invoking a backend API. A typical case, for instance, is checking if a username or email has been already taken while registering a new account.

For this, we need to implement an `Asynchronous Validator` that will receive the server response and generate a `ValidationError` in case the validation is not succesful or `null`, otherwise.

![image](https://user-images.githubusercontent.com/13237093/156927084-ad474693-b388-4146-a921-06ee8b353558.png)

**Note:** when dealing with asnychronous validation, always remember to provide a visual element informing the user that the validation is pending (e.g., a loading spinner).

## Dynamic Form Fields
In some cases, we might need to dynamically add new fields to our form at runtime.

However, we do not know how many field will be created, as this might depend on the user. Thanks to `FormArrays` we can manage dyanamic collections of `FormControls` with ease.

![image](https://user-images.githubusercontent.com/13237093/156927352-17ff34fc-a86b-4d09-b097-e40758468599.png)


## Cross Fields validation
The forms in this demo are completely dynamic and generated at runtime. This gives us extreme flexibility since we can create our forms layout on demand.

We invoke a backend API to receive the configuration file and use it to create the `FormControls` and validation rules accordingly.
By clicking on the button on the demo, a new configuration is requested from the backend and the UI updates accordingly with the new fields. This simulates users with different roles logging into our app. The form fields are displayed based on the config rules coming from the server.

![image](https://user-images.githubusercontent.com/13237093/156927468-0c660009-14c8-4085-ace0-d0f638b8e9fd.png)

**Bonus tip:** you can choose to receive the form configs from a local service or from a Deno server! In the local ConfigsService file, you can choose from where the configs should be delivered. You can find all the requirements to install and run the Deno server in the relative [README.md](https://github.com/pacoita/ng-reactive-forms/blob/main/backend/README.md) file.



