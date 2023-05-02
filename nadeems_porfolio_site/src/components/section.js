import React from 'react';

class SectionOne extends React.Component {
  render() {
    return (
      <div>
        <h1>Section One</h1>
        <p>This is section one</p>
      </div>
    );
  }
}

class SectionTwo extends React.Component {
  render() {
    return (
      <div>
        <h1>Section Two</h1>
        <p>This is section two</p>
      </div>
    );
  }
}

class SectionThree extends React.Component {
  render() {
    return (
      <div>
        <h1>Section Three</h1>
        <p>This is section three</p>
      </div>
    );
  }
}

export { SectionOne, SectionTwo, SectionThree };
