import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
import { FreindType } from '../../../types/types';
import Freind from './Freind';

type MapStateToPropsType = {
   freinds:Array<FreindType>
}


let mapStateToProps = (store:AppStateType):MapStateToPropsType=> {
   return {
      freinds:store.freinds.freind
   }
}



const FreindContainer = connect(mapStateToProps)(Freind)

export default FreindContainer