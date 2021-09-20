import React, { Component } from 'react';
import axios from 'axios';

export class CreateNewTractMapComponent extends Component {
    constructor(props)
    {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDateStarted = this.onChangeDateStarted.bind(this);
        this.onChangeDateCompleted = this.onChangeDateCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            name: '',
            description: '',
            dateStarted: null,
            dateCompleted: null
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeDateStarted(e) {
        this.setState({
            dateStarted: e.target.value
        });
    }
    onChangeDateCompleted(e) {
        this.setState({
            dateCompleted: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const { history } = this.props;

        let tractmapObj = {
            Id: Math.floor(Math.random() * 1000),
            name: this.state.name,
            description: this.state.description,
            dateStarted: this.dateStarted,
            dateCompleted: this.state.dateCompleted
        }

        axios.post("api/TractMap/AddTract", tractmapObj).then(result => {
            history.push('/TractMap')
        })
    }

    render() {
        return (
            <div className="tractMap-form" >
                <h3>Add new Tract Map</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Tract Map name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            // Add on change event : when a user change the value of the input field that value is reflected to our state
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tract Map description: </label>
                        <textarea
                            type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="row">
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date of start:  </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={this.state.dateStarted}
                                    onChange={this.onChangeDateStarted}
                                />
                            </div>
                        </div>
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date of completion:  </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={this.state.dateCompleted}
                                    onChange={this.onChangeDateCompleted}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add tractmap" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}