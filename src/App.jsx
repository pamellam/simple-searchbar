import { useState } from 'react';
import JSONDATA from './MOCK_DATA.json';
import './App.css';

function App() {
  const [searchItem, setSearchItem] = useState('');

  /**
   * This function handles the input change event of the search input field.
   * @param {Event} event - The input change event.
   */
  function handleInputChange(event) {
    setSearchItem(event.target.value);
  }

  /**
   * This function filters the JSON data based on the search input value.
   * @param {Object} input - The input object.
   * @returns {boolean} - Whether the input object matches the search input value.
   */
  function filterData(input) {
    return (
      searchItem === '' ||
      input.first_name.toLowerCase().includes(searchItem.toLowerCase())
    );
  }

  /**
   * This function renders a list item for each item in the filtered JSON data.
   * @param {Object} item - The JSON data object.
   * @param {number} key - The index of the JSON data object.
   */
  function renderListItem(item, key) {
    return (
      <div key={key}>
        <ul className="list-group">
          <li className="list-group-item list-group-item-action">
            {item.first_name}
          </li>
        </ul>
      </div>
    );
  }

  /**
   * This is the main application component.
   */
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleInputChange}
              value={searchItem}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      {JSONDATA.filter(filterData).map(renderListItem)}
    </>
  );
}

export default App;
