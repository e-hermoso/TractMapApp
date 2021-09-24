import React, { Component } from 'react';
import axios from 'axios';

export class UpdateTractMapComponent extends Component {
    constructor(props)
    {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDateStarted = this.onChangeDateStarted.bind(this);
        this.onChangeDateCompleted = this.onChangeDateCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        this.onUpdateCancel = this.onUpdateCancel.bind(this);

        this.state = {
            tractName: '',
            description: '',
            dateStarted: null,
            dateCompleted: null
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get("https://tractmapbe.azurewebsites.net/api/TractMaps/SingleTractMap/" + id).then(tract => {
            const response = tract.data;

            this.setState({
                tractName: response.tractName,
                description: response.description,
                dateStarted: new Date(response.dateStarted).toISOString().slice(0, 10),
                dateCompleted: response.dateCompleted ? new Date(response.dateCompleted).toISOString().slice(0,10) : null
            })
        })
    }
     
    onChangeName(e) {
        this.setState({
            tractName: e.target.value
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
    onUpdateCancel() {
        const { history } = this.props;
        history.push('/NavTractMap')
    }
    onSubmit(e) {
        e.preventDefault();
        const { history } = this.props;
        const { id } = this.props.match.params;

        let tractmapObj = {
            tractName: this.state.tractName,
            description: this.state.description,
            dateStarted: new Date(this.state.dateStarted).toISOString(),
            dateCompleted: this.state.dateCompleted ? new Date(this.state.dateCompleted).toISOString() : null
        }

        axios.put("https://tractmapbe.azurewebsites.net/api/TractMaps/UpdateTractMap/" + id, tractmapObj).then(result => {
            history.push('/NavTractMap')
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
                            value={this.state.tractName}
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
                        <button onClick={this.onUpdateCancel} className="btn btn-default">Cancel</button>
                        <button type="submit" className="btn btn-success">Update</button>
                    </div>
                </form>
            </div>
        )
    }
}