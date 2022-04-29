'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  render() {
    return(
      <div>
      <h1>Hello World</h1>
      </div>
    
    );
  }
}
const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));