import { View } from '@tarojs/components'
import { Component, ComponentType } from 'react'

const createErrorBoundary = (Page: ComponentType) => {
  return class ErrorBoundary extends Component {
    state = {
      hasError: false,
      error: null,
    }

    static getDerivedStateFromError(error) {
      return {
        hasError: true,
        error,
      }
    }

    componentDidCatch(error) {
      console.error('error in error boundary:', error)
    }

    render() {
      return this.state.hasError ? (
        <View>Something went wrong: {JSON.stringify(this.state.error)}</View>
      ) : (
        <Page />
      )
    }
  }
}

export default createErrorBoundary
