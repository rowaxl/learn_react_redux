// Import the React and ReactDoM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import Faker from 'faker';

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

// Create a react component
const App = () => {
    // コンポネントループパターン
    const CommentDetailList = [];
    commentList.forEach(prop => {
        CommentDetailList.push(
            <CommentDetail
                avatar={prop.avatar}
                author={prop.author}
                date={prop.date}
                content={prop.content} />
        );
    });

    // render
    return (
        <div className="ui container comments">
            {CommentDetailList}
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

