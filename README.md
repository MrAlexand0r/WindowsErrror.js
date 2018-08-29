# WindowsErrror.js
A Javascript Framework for Windows Errors

# Demo
https://mralexand0r.github.io/WindowsErrror.js/demo/index.html

# Usage

## With Audio

```js
var error = new WindowsError('<path to audio>');
error.create('<type>', 'Header', 'Body');
```

## Without Audio

```js
var error = new WindowsError();
error.create('<type>', 'Header', 'Body');
```

Sidenote: type is not implemented yet.