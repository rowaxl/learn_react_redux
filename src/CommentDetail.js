import React from 'react';

class CommentDetail extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        const self = this;
        return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={self.props.avatar} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {self.props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{self.props.date}</span>
                    </div>
                    <div className="text">{self.props.content}</div>
                </div>
            </div>
        )
    };
}

export default CommentDetail;