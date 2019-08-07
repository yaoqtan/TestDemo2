import React from "react";

const contextStorehouse = {};

export function createContext(options = {}) {
    const displayName = typeof options === "string" ? options : options.displayName;

    const Context = React.createContext();

    class Provider extends React.Component {
        state = {
            value: {}
        };

        componentDidMount() {
            const { value } = this.props;
            value && this.setState({ value });
        }

        changeContext = (name, newValue, callback) => {
            const { value } = this.state;

            if (!Object.keys(value).includes(name)) return;

            this.setState({
                value: Object.assign(value, { [name]: newValue })
            }, () => {
                typeof callback === "function" && callback(name, newValue);
            });
        };

        render() {
            const { value } = this.state;
            const { children } = this.props;

            return (
                <Context.Provider value={{ ...value, changeContext: this.changeContext }}>
                    {
                        React.Children.only(children)
                    }
                </Context.Provider>
            );
        }
    }

    function injectApp(WrappedComponent, options = {}) {
        const { displayName: name = displayName } = options;

        return function(props) {
            return (
                <Context.Consumer>
                    {
                        contextProps => <WrappedComponent {...props} {...{[`${name}Context`]: contextProps}} />
                    }
                </Context.Consumer>
            );
        }
    }

    return { [`Context${displayName}`]: Context, [`Provider${displayName}`]: Provider, [`inject${displayName}`]: injectApp };

}

export function createContexts(contextNames) {
    if (typeof contextNames === "string") {
        contextStorehouse[contextNames] = createContext({ displayName: contextNames });
    } else if (Array.isArray(contextNames)) {
        contextNames.forEach(name => {
            contextStorehouse[name] = createContext({ displayName: name });
        });
    }

    return contextStorehouse;
}
