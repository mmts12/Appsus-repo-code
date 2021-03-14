
export class KeepFilter extends React.Component {

  state = {
    display: 'flex',
    palleteOpacity: 0,
    filterBy: {
      type: '',
      text: '',
    }
  }

  handleChange = (ev) => {
    let value = ev.target.value;
    let name = ev.target.name;
    let filterCopy = this.state.filterBy;
    filterCopy[name] = value;
    this.setState({ filterBy: filterCopy }, () => {
      console.log('filtering by', this.state.filterBy);
      this.props.filterNote(this.state.filterBy);
    })
  }

  render() {
    return (
      <div className="search-area flex space-between align-center">
        <i className="fas fa-search search-btn"></i>
        <input type="text" name="text" placeholder="Search Note By Title, Text Or Type" onChange={this.handleChange} />
        <select name="type" onChange={this.handleChange}>
          <option value="All">All</option>
          <option value="NoteText">Text</option>
          <option value="NoteImg">Image</option>
          <option value="NoteVideo">Video</option>
          <option value="NoteTodos">Todo List</option>
        </select>
      </div>
    )
  }
}



