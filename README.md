# angular-eonasdan-datetimepicker

* A wrapper directive around the [bootstrap-datetimepicker component](http://eonasdan.github.io/bootstrap-datetimepicker/).
* It is a continuation of [angular-bootstrap-datetimepicker-directive](https://github.com/diosney/angular-bootstrap-datetimepicker-directive).

**Every version brings some breaking changes so please read the manual carefully.**

Having problems using the wrapper? <br>
Please, post an issue on GitHub and **provide a plunker** with your question.

## Installation

1) Install the directive via bower or npm (or download it manually, as you prefer)
```javascript
npm install angular-eonasdan-datetimepicker --save
```
```javascript
bower install angular-eonasdan-datetimepicker --save
```

2) Inject the `datetimepicker` directive in you angular app:
```javascript
angular.module('myApp', ['ae-datetimepicker']);
```

3) Start using!

## Examples

* Simple example, with one datetimepicker: http://plnkr.co/n8L8UZ
* Example with two, linked datetimepickers: http://plnkr.co/ZSjN8f
* Validation example: http://plnkr.co/NmFt43

## Parameters

### ng-model

Simply add `datetimepicker` tag and pass the `ng-model` attribute. <br>
If `ng-model` is `null` or `undefined`, the initial value will not be set!

```html
<div class="input-group" datetimepicker ng-model="vm.date">
    <input type="text" class="form-control"/>
    <span class="input-group-addon">
        <span class="glyphicon glyphicon-calendar"></span>
    </span>
</div>
```

### options

With `options` attribute you can pass an object containing all the required configuration for your datetimepicker.
All the options available in the original library are supported. Check the list of options on official website: http://eonasdan.github.io/bootstrap-datetimepicker/Options/

```html
<div class="input-group" datetimepicker ng-model="vm.date" options="vm.options">
```

```javascript
vm.options = {
    format: "DD.MM.YYYY",
    maxDate: dateTo
};
```

### on-change

You can pass a function that will be called every time the value of datetimepicker is changed. <br>
See: http://plnkr.co/ZSjN8f (Example with two, linked datetimepickers) as an example.

Detailed description of event: http://eonasdan.github.io/bootstrap-datetimepicker/Events/#dpchange

### on-click

You can pass a function that will be called every time the datetimepicker is clicked. <br>
The event occurs when you open or close the datetimepicker.

## Limitations

Currently, form validation works only if you put the directive around `input` element and not thr whole `input-group`.

## [License](https://github.com/atais/angular-eonasdan-datetimepicker/blob/master/LICENSE)