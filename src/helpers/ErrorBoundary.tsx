import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles/styles';
import {ErrorBoundaryProps, ErrorBoundaryState} from './types';

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.center}>
          <Text>Something went wrong! Try again!</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
