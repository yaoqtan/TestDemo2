
import App, { Container } from 'next/app'
class MyApp extends App {
    render() {
        const { Component } = this.props; 
        console.log(Component);

        return (
            <Container>
                <h1>APP</h1>
                <Component />
               
            </Container>
        )
    }
}


export default MyApp
