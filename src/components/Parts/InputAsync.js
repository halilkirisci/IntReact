import React, { Component } from 'react';
import { asyncContainer, Typeahead } from 'react-bootstrap-typeahead';

const AsyncTypeahead = asyncContainer(Typeahead);

export default class InputAsync extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allowNew: false,
      isLoading: false,
      multiple: false,
      options: [],
    };
  }

  render() {
    return (
      <AsyncTypeahead
        className="w-100"
        isLoading={this.state.isLoading}
        caseSensitive
        ignoreDiacritics={false}
        searchText="Araniyeee"
        placeholder="Rehber Ara..."
        labelKey={option => `${option.KOD}`}
        onSearch={query => {
          this.setState({ isLoading: true });
          fetch(`http://172.17.4.29/iwwa/api/user?search=${query}`)
            .then(resp => resp.json())
            .then(json =>
              this.setState({
                isLoading: false,
                options: json,
              }),
            );
        }}
        options={this.state.options}
        renderMenuItemChildren={(option, props) => (
          <div>
            {option.PERSONEL_AD} {option.SOYAD}
            <div>
              <small>Tel: {option.İş_Tel}</small>
            </div>
          </div>
        )}
      />
    );
  }
}
