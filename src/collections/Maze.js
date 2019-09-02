import { collectionData } from 'rxfire/firestore';
import { bufferCount, groupBy, map, startWith } from 'rxjs/operators';

import Collection from 'src/collections/Collection';
import { firestore } from 'src/services/firebase';

export default class Maze  extends Collection {

  constructor(){
    super();

  }

  static add( props ) {
    firestore.collection( this.collectionName ).add( props );
  }

  static delete( id ) {
    firestore.collection( this.collectionName ).doc( id ).delete();
  }

  static async find( id ){
    let docRef = firestore.collection( this.collectionName ).doc( id );
    let doc = await docRef.get();
    return { id, ...doc.data() };
  }

  static findAll(){
    const query = firestore.collection( this.collectionName );
    return collectionData( query, 'id' ).pipe( startWith( [] ) );
  }

  static findAllInGroupsOfThree(){
    const query = firestore.collection( this.collectionName );
    return collectionData( query, 'id' ).pipe( 
      startWith( [] ),
      map( (it,index) => {
        it.index = index;
        return it;
      }),
      groupBy( it => it.index )
    );  
  }

  static update( id, props ) {
    firestore.collection( this.collectionName ).doc(id).update( props );
  }

}

Maze.collectionName = 'mazes';





