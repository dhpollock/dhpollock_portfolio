import React from 'react'

export class IntroClickableState extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const newHighlight = this.props.value;
        this.props.onClick(newHighlight);

    }
    render() {
        return (
            <span onClick={this.handleClick}>{this.props.children}</span>
        )
    }
}

export default IntroClickableState;