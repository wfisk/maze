import { collectionData } from 'rxfire/firestore';
import { startWith } from 'rxjs/operators';

import { firestore } from 'src/services/firebase';


export default class Maze {

  constructor(){

  }

  static add( props ) {
    firestore.collection( this.collectionName ).add( props );
  }

  static delete( id ) {
    firestore.collection( this.collectionName ).doc( id ).delete();
  }

  static find( id ){
    const query = firestore.collection( this.collectionName ).where('id', '==', id);
    return collectionData(query, 'id').pipe(startWith([]));
  }

  static findAll(){
    const query = firestore.collection( this.collectionName );
    return collectionData( query, 'id' ).pipe(startWith([]));;
  }

  static update( id, props ) {
    firestore.collection( this.collectionName ).doc(id).update( props );
  }

}

Maze.collectionName = 'mazes';





