import React from 'react';

class Message extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        const self = this;

        return (
            <div className="ui message">
                <div className="header">{self.props.header}</div>
                <p>{self.props.message}</p>
            </div>
        )
    }
}

export default Message;
