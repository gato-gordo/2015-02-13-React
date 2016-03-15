////////////////////////////////////////////////////////////////////////////////
// Excercise:
//
// Render `DATA` to the page
// - put the title in an h1
// - only render mexican food (hint: arrays have a "filter" method)
// - sort the items in alphabetical order by name
//   (might want to use `sort-by` https://github.com/staygrimm/sort-by#example)
////////////////////////////////////////////////////////////////////////////////

var React = require('react');
var sortBy = require('sort-by');

var DATA = {
  title: 'Menu',
  items: [
    { id: 1, name: 'tacos', type: 'mexican' },
    { id: 2, name: 'burrito', type: 'mexican' },
    { id: 3, name: 'tostada', type: 'mexican' },
    { id: 4, name: 'hush puppies', type: 'southern' }
  ]
};

var menuItems = DATA.items
                                          .filter( item => item.type === 'mexican')
                                          .sort( (item1, item2) => {
                                            if( item1.name < item2.name )  return -1;
                                            if( item1.name > item2.name ) return 1;
                                            return 0;
                                          })
                                          .map( item => <li>Name: {item.name}, Type: {item.type}</li>);

var Menu = React.createClass({

  render () {
    return (
      <div className = "menu">
        <h1>{DATA.title}</h1>
        <ul>
          { menuItems }
        </ul>
      </div>
    );
  }
});

React.render(<Menu/>, document.body, () => {
  require('./tests').run();
});
