import React from 'react';

class ApprovalCard extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    
    render() {
        const self = this;
        console.log("self.props.children ", self.props.children);
        return (
            <div className="ui card">
                <div className="content">{self.props.children}</div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Reject</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApprovalCard;
