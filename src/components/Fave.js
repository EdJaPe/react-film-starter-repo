import React from 'react';
 

class Fave extends React.Component {

    state = {
      isFave: false
    }

    handleClick = e => {
      e.stopPropagation();
      console.log('click')
      this.setState({
        isFave: !this.state.isFave
      })
    };

 render() {

  let className = this.state.isFave ? 'film-row-fave remove_from_queue' : 'film-row-fave add_to_queue'

     return (
        <div className={className} onClick={this.handleClick}>
        <p className="material-icons">add_to_queue</p>
      </div>
     )
 }
}
export default Fave;