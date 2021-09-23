import React, { Component } from 'react';
import axios from 'axios';
export class TractMapComponent extends Component
{
    constructor(props)
    {
        super(props);

        this.onTractMapUpdate = this.onTractMapUpdate.bind(this);
        this.onTractMapDelete = this.onTractMapDelete.bind(this);

        this.state = {
            tracts: [],
            loading: true,
            failed: false,
            error: ''
        }
    }
    componentDidMount()
    {
        this.populateTractMap();
    }
    onTractMapUpdate(id) {
        const { history } = this.props;
        history.push('/updateTract/' + id);
    }
    onTractMapDelete(id) {
        const { history } = this.props;
        history.push('/delete/' + id);
    }
    populateTractMap()
    {
        // Send a request to our API endpoint using a library called "axios" : npm install axios --save
        axios.get("https://tractmapbe.azurewebsites.net/api/TractMaps/GetTractMaps").then(result => {
            const response = result.data;
            this.setState({ tracts: response, loading: false, failed: false, error:""});
        }).catch(error => {
            this.setState({ tracts: [], loading: false, failed: true, error: "Tracts could not be loaded" });
        })
    }
    renderAllTractMapsTable(tracts)
    {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date started</th>
                        <th>Date completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tracts.map(tract => (
                            <tr key={tract.id}>
                                <td>{tract.tractName}</td>
                                <td>{tract.description}</td>
                                <td>{new Date(tract.dateStarted).toISOString().slice(0, 10)}</td>
                                <td>{tract.dateCompleted ? new Date(tract.dateCompleted).toISOString().slice(0, 10) : '-'}</td>
                                <td>
                                    <div className="form-group">
                                        <button onClick={() => this.onTractMapUpdate(tract.id)} className="btn btn-success"> Update </button>
                                        <button onClick={() => this.onTractMapDelete(tract.id)} className="btn btn-danger"> Delete </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        )
    }
    render()
    {
        let content = this.state.loading ? (
            <p>
                <em> Still Loading...</em>
            </p>
        ) : (this.state.failed ? (
                   <div className="text-danger">
                    <em>{this.state.error}</em>
                    </div>
            ) :
                (
                    this.renderAllTractMapsTable(this.state.tracts)
                )
            )
        return (
            <div>
                <h1> All Tract Maps</h1>
                <p> Here you find all tract Maps</p>
                {content}
            </div>
        );
    }
}