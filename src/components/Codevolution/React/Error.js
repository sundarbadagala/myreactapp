import React from 'react'
import ErrorSub from './ErrorSub'
import ErrorBoundary from './ErrorBoundary'

function Error() {
    return (
        <div>
            <ErrorBoundary>
            <ErrorSub heroName='batman'/>
            </ErrorBoundary>

            <ErrorBoundary>
            <ErrorSub heroName='superman'/>
            </ErrorBoundary>

            <ErrorBoundary>
            <ErrorSub heroName='joker'/>
            </ErrorBoundary>
        </div>
    )
}

export default Error
