// Import the React and ReactDoM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Faker from 'faker';
import comments from './commentList.json';
import Message from './Message';

import 'semantic-ui-css/semantic.min.css';

// Create a react component
class App extends React.Component {
    render() {
        // ループパターン
        const CommentDetailList = comments.list.map((prop, i) => {
            return (
                <ApprovalCard key={i * 65535}>
                    <CommentDetail
                        key={i}
                        avatar={Faker.image.avatar()}
                        author={prop.author}
                        date={prop.date}
                        content={prop.content} />
                </ApprovalCard>
            );
        });

        return (
            <div className="ui container comments" style={{ marginTop: "10px" }}>
                <Message
                    header="Change in Services"
                    message="We just updated privacy policy."/>
                {CommentDetailList}
            </div>
        );
    }
    
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

