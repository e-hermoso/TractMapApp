﻿import React, { Component } from 'react';
import axios from 'axios';

export class Delete extends Component {
    constructor(props) {
        super(props);

        this.onCancel = this.onCancel.bind(this);
        this.onConfirmation = this.onConfirmation.bind(this);

        this.state = {
            tractName: "",
            description: "",
            dateStarted: null,
            dateCompleted: null
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get("api/TractMaps/SingleTractMap/" + id).then(tract => {
            const response = tract.data;

            this.setState({
                tractName: response.tractName,
                description: response.description,
                dateStarted: new Date(response.dateStarted).toISOString().slice(0, 10),
                dateCompleted: response.dateCompleted ? new Date(response.dateCompleted).toISOString().slice(0, 10) : null
            })
        })
    }
    onCancel(e) {
        const { history } = this.props;
        history.push('/NavTractMap');
    }
    onConfirmation(e) {
        const { id } = this.props.match.params;
        const { history } = this.props;

        axios.delete("api/TractMaps/DeleteTractMap/" + id).then(result => {
            history.push('/NavTractMap')
        })
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h2>Delete trip confirmation</h2>

                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title"> {this.state.tractName} </h4>
                        <p className="card-text"> {this.state.description} </p>
                        <button onClick={this.onCancel} className="btn btn-default">
                            Cancel
                         </button>
                        <button onClick={ this.onConfirmation} className="btn btn-danger">
                            Confirm
                         </button>
                    </div>
                </div>
            </div>
        )
    }
}