# React Native Keyboard State Provider
Keyboard state provider (visible/invisible) for react-native.

## Installation
```bash
yarn add react-native-keyboard-state-provider
# or
npm install react-native-keyboard-state-provider
```

## Usage
First add the provider to your App.tsx
```tsx
import { KeyboardStateProvider } from 'react-native-keyboard-state-provider';

...

export default function App() {
  return (
    <KeyboardStateProvider>
      <Screen />
    </KeyboardStateProvider>
  );
}
```
Then you can request the keyboard state everywhere from within your app
```tsx
import { useKeyboardState } from 'react-native-keyboard-state-provider';

...

function Screen() {
  const { keyboardVisible } = useKeyboardState();

  return (
    <Text>Keyboard visible: {keyboardVisible}</Text>
  );
}
```
*keyboardVisible* is a boolean with value *true* if the keyboard is visible/open and *false* if it is not visible. The value gets updated whenever the keyboard state changes.

## Usage with react-native-web / expo
It works with expo and also on the web without any errors. But as there is no software keyboard on desktop browsers the value *keyboardVisible* will always be false.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## You like it?
<div align="center">
<a href="https://www.buymeacoffee.com/christianstrotz" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
</div>
