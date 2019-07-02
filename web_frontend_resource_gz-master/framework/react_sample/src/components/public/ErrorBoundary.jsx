import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ErrorComponentStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 10%;
`;

class ErrorBoundary extends React.Component {
    static propTypes = {
        errorComponent: PropTypes.element
    };

    state = {
        error: false,
        errorInfo: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
    }

    render() {
        const { error } = this.state;
        const { children, errorComponent } = this.props;

        if (error) {
            return errorComponent || <ErrorComponentStyled>Oops...It's something wrong！</ErrorComponentStyled>;
        }
        
        return children;
    }
}
export default ErrorBoundary;

export function wrapInErrorBoundary(WrappedComponent, options = {}) {
    const { errorComponent } = options;

    return function WrapInErrorBoundary(props) {
        return (
            <ErrorBoundary errorComponent={errorComponent}>
                <WrappedComponent {...props} />
            </ErrorBoundary>
        );
    }
};