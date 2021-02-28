import React from 'react'
import axios from 'axios'

export default class Home extends React.Component {

    constructor(){
        super();

        this.state = {
            searchPayload: '',
            searchResults: []
        }

        this.handleChange = this.handleChange.bind(this);
    }
    
    async handleChange(event) {
        this.setState({searchPayload: event.target.value});

        if(event.target.value !== '') {
            let results = await axios.get(`http://localhost:5000/api/v1/search?search=${event.target.value}`)
                .then(doc => doc.data)

            this.setState({searchResults: results});
        }
         
    }

    displayResults() {

    }

    render() {
        return (
            <>
                <div className="container">
                    <header>
                        <div className="card">
    
                        </div>
                    </header>
                    <div>
                        <input value={this.state.searchPayload} onChange={this.handleChange} />
                    </div>
                    <div>
                        {if(searchResults.length > 0)}
                    </div>
                </div>
            </>
        )
    }

  }