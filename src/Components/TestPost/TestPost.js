import axios from 'axios';
import React, { Component } from 'react';




class TestPost extends Component {

    componentDidMount() {
        const PATH = 'https://5d716862d3448a001411b7c9.mockapi.io/api/v1/book';
        const newBook = { author: 'Vinícius Osório',
                        cover: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Fire.JPG',
                        status: '1',
                        title: 'Elemental World'
                    };

                    axios.post(PATH, newBook)
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
    }

    render = () => {
        return(
            <>
                <p>Teste</p>
            </>
        )
    }

}

export default TestPost;