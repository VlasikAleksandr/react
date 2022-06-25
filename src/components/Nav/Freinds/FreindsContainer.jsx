import React from 'react';
import { connect } from 'react-redux';
import Freind from '../Freinds/Freind';

let mapStateToProps = (store) => {
   return {
      freinds: store.freinds
   }
}



const FreindContainer = connect(mapStateToProps, null)(Freind)

export default FreindContainer