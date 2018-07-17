import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { anahtar: '' };
  }

  onInputChange(anahtar) {
    this.setState({ anahtar });
  }

  araHandle = event => {
    if (event.key === 'Enter') {
      this.props.onAraClick(this.state.anahtar);
    }
  };

  render() {
    return (
      <div className="input-group mb-3">
        <input
          className="form-control input-lg"
          value={this.state.anahtar}
          onChange={event => this.onInputChange(event.target.value)}
          onKeyPress={this.araHandle}
        />
        <div className="input-group-append">
          <button
            onClick={() => this.props.onAraClick(this.state.anahtar)}
            className="btn btn-outline-secondary btn-success"
            type="button"
          >
            Button
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
