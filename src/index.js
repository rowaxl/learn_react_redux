// Import the React and ReactDoM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Faker from 'faker';

import 'semantic-ui-css/semantic.min.css';

// Create a react component
class App extends React.Component {
    render() {
        const commentList = [
            {
                author: "Amita",
                date: "Today, 06:00 PM",
                content: "Nice blog post!",
                avatar: Faker.image.avatar(),
            },
            {
                author: "Aimin",
                date: "Today, 04:00 PM",
                content: "Nice start!",
                avatar: Faker.image.avatar(),
            },
            {
                author: "Kudo-san",
                date: "Yesterday, 11:00 AM",
                content: "That awesome! I think you did very good.",
                avatar: Faker.image.avatar(),
            },
            {
                author: "OzaPure",
                date: "12/16, 10:00 AM",
                content: "Another React noob.",
                avatar: Faker.image.avatar(),
            },
            {
                author: "Pressure",
                date: "12/10, 09:00 PM",
                content: "Welcome",
                avatar: Faker.image.avatar(),
            },
        ];

        // ループパターン
        const CommentDetailList = commentList.map((prop, i) => {
            console.log("key", i);
            return (
                <ApprovalCard key={i * 65535}>
                    <CommentDetail
                        key={i}
                        avatar={prop.avatar}
                        author={prop.author}
                        date={prop.date}
                        content={prop.content} />
                </ApprovalCard>
            );
        });

        return (
            <div className="ui container comments">
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

