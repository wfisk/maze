import { collectionData } from 'rxfire/firestore';
import { bufferCount, map, startWith } from 'rxjs/operators';

import Collection from 'src/collections/Collection';
import { firestore } from 'src/services/firebase';

export default class Maze  extends Collection {

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
    return collectionData( query, 'id' ).pipe(startWith([]));
  }

  static findAllInGroupsOfThree(){
    const query = firestore.collection( this.collectionName );
    return collectionData( query, 'id' ).pipe(startWith([]), map( (_,i) => console.log({_,i} ) ) );
  }

  static update( id, props ) {
    firestore.collection( this.collectionName ).doc(id).update( props );
  }

}

Maze.collectionName = 'mazes';





