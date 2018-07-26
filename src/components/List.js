import React from 'react';
import PropTypes from 'prop-types';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickAlert = this.handleClickAlert.bind(this);
  }

  handleClickAlert() {
    alert(`soy el contenedor de ${this.props.recipe}`);
  }

  render() {
    // const listAlert = () => {
    //   alert(`soy el contenedor de ${this.props.recipe}`);
    // };
    return (
      <div
        // onClick={listAlert}
        onClick={this.handleClickAlert}>
      
        <li>{this.props.recipe}</li>
        <li>{this.props.descrip}</li>
        <li>{this.props.price}</li>
      </div>
     );
    }
  }

List.defaultProps = {
  descrip: 'No tenemos descripción',
};

List.propTypes = {
  recipe: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};


export default List; 
