import React, { PureComponent } from 'react'
import db from  'firestone';
import App from './App';

export default class todos extends PureComponent {
 
    state = {
        items:[]
    }
  componentDidMount(){
    db.colecction('todos').get().then((snapShots)=>{
        this.setState({
            items: snapShots.docs.map( doc => {
                console.log(doc.data());
            })
        })
    })
  }
    render() {
    return (
      <div>

      </div>
    )
  }
}
