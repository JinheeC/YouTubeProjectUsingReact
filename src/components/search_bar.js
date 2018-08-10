import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: ''};
  }

// className을 클래스 이름이랑 일치하게 하면 좋다.
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term: term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
