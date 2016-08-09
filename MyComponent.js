import React from 'react';

class MyComponent extends React.Component {

    handleMouseOver() {
        this.setState({
            hover: true
        });
    }

    handleMouseOut() {
        this.setState({
            hover: false
        });
    }

    render() {
        return (
            <a
                onMouseOver={this.handleMouseOver.bind(this)}
                onMouseOut={this.handleMouseOut.bind(this)}
            >
                {`${this.props.propA}${this.props.propB}`}
            </a>
        )
    }
}

MyComponent.propTypes = {
    propA: React.PropTypes.string,
    propB: React.PropTypes.string
};

MyComponent.defaultProps = {
    propA: '',
    propB: ''
};

export default MyComponent;