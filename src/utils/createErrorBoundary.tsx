import { Component, ComponentType } from 'react'

import Error from '../pages/error/error'

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
      return this.state.hasError ? <Error error={this.state.error} /> : <Page />
    }
  }
}

export default createErrorBoundary
