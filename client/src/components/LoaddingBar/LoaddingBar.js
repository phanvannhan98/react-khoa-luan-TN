import React, { Component } from "react";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.refInterval = React.createRef();
        this.state = {
            loadding: 0,
        };
    }

    add = (value) => {
        this.setState({
            loadding: this.state.loadding + value,
        });
    };

    run = () => {
        this.add(15);
        this.refInterval = setInterval(() => {
            if (this.props.progress === 100) {
                this.complete();
                setTimeout(() => {
                    this.props.setLoadding(101);
                }, 1000);
            } else {
                this.add(0.3);
            }
        }, 100);
    };

    complete = () => {
        this.setState({ loadding: 100 });
        clearInterval(this.refInterval);
    };

    onLoaderFinished = () => {
        this.setState({ loadding: 0 });
    };

    componentDidMount() {
        this.run();
    }

    componentWillUnmount() {
        this.complete();
    }

    render() {
        return (
            <div style={{ position: "fixed", top: 0, left: 0, zIndex: 999999 }}>
                <LoadingBar
                    progress={this.state.loadding}
                    height={3}
                    color="#372cde"
                    onLoaderFinished={() => this.onLoaderFinished()}
                />
            </div>
        );
    }
}
