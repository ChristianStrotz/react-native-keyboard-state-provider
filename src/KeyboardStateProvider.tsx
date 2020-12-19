import * as React from 'react';
import { EmitterSubscription, Keyboard } from 'react-native';

interface KeyboardState {
  keyboardVisible: boolean;
}

const KeyboardStateContext = React.createContext<KeyboardState>({
  keyboardVisible: false,
});

export function useKeyboardState(): KeyboardState {
  return React.useContext(KeyboardStateContext);
}

export function KeyboardStateProvider(props: { children: React.ReactNode }) {
  const [keyboardVisible, setKeyboardVisible] = React.useState(false);

  return (
    <KeyboardStateContext.Provider value={{ keyboardVisible }}>
      <KeyboardListener setState={state => setKeyboardVisible(state)} />
      {props.children}
    </KeyboardStateContext.Provider>
  );
}

interface KeyboardListenerProps {
  setState: (state: boolean) => void;
}

class KeyboardListener extends React.Component<
  KeyboardListenerProps,
  any,
  any
> {
  listeners: EmitterSubscription[] = [];

  componentDidMount() {
    this.listeners.push(
      Keyboard.addListener('keyboardWillShow', () => this.props.setState(true))
    );
    this.listeners.push(
      Keyboard.addListener('keyboardWillHide', () => this.props.setState(false))
    );
  }

  componentWillUnmount() {
    this.listeners.forEach(listener => listener.remove());
    this.listeners = [];
  }

  render() {
    return null;
  }
}
