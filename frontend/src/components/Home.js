import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Welcom to Tract Map Manager!</h1>
            <p>Use this manager to manage tract maps, by:</p>
            <ul>
                <li>Add a new Tract Map</li>
                <li>Update a Tract Map</li>
                <li>Delete a Tract Map</li>
                <li>Show all Tract Map</li>
            </ul>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>
      </div>
    );
  }
}
