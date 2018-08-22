import React, { Component } from 'react';
import axios from 'axios'

export default class AsyncAwait extends Component {
    state = {
        gods: [],
        error: ''
    }

    // To use the await keyword in a function, you need to declare a function as 'async'. This makes the function return a promise.
    async componentDidMount() {
        // axios.get('https://ancient-gods-api.now.sh/api/gods', {
        //     headers: {
        //         apikey: 'olafaloofian'
        //     }
        // }).then(response => {
        //     this.setState({ gods: response.data })
        // })
        try {
                const response = await axios.get('https://google.com/api/gods', {
                headers: {
                    apikey: 'olafaloofian'
                }
            })
            this.setState({ gods: response.data })
        } catch (error) {
            console.log('---------- error', error)
            this.setState({error})
        }
    }

    render() {
        const { gods, error } = this.state
        console.log(gods)
        return (
            <div>
                {error ? 
                <div>An Error occurred!</div>
                :
                <div>
                    Gods:
                    {gods.map(e => 
                        <div key={e.id}>
                            {e.name}
                        </div>
                    )}    
                </div>  
                }

            </div>
        );
    }
}