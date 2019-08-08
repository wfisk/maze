import { writable } from 'svelte/store';

function createMazeGrid() {
	const { subscribe, set, update } = writable({
    columnCount: 10,
    rowCount: 10,
    spaces: [
        0,  1,  2,  3,  4,   ,  6,  7,  8,  9,
       10,   ,   ,   , 14,   , 16,   , 18, 19,
       20,   , 22,   , 24, 25, 26,   , 28, 29,
       30, 31, 32,   ,   ,   ,   ,   , 38, 39,
       40,   , 42, 43, 44,   , 46, 47, 48, 49,
       50,   ,   ,   ,   , 55,   ,   , 58,   ,
       60,   , 62, 63, 64, 65, 66,   , 68,   ,
       70, 71, 72,   , 74,   , 76,   , 78, 79,
       80,   ,   ,   , 84,   , 86,   ,   , 89,
       90, 91, 92, 93, 94,   , 96, 97, 98, 99
    ],
    squareCount: 100,
    start: 0,
    end: 99
  });

	return {
    subscribe,
 
		addSpace( value ){
      update( self => {
        self.spaces.push( value );
        return self;
      })
    },

		removeSpace( value ){
      update( self => {
        let index = self.spaces.indexOf(value);
        if (index !== -1) {
          self.spaces.splice(index, 1);
        }  
        return self;
       })
    },


		setColumnCount( value ) {
      update( self => {
        self.columnCount = value;
        self.squareCount = self.rowCount * self.columnCount;
        self.end = self.rowCount * self.columnCount;
        return self;
      })
    },

		setRowCount( value ) { 
      update( self => {
        self.rowCount = value;
        self.squareCount = self.rowCount * self.columnCount;
        self.end = self.rowCount * self.columnCount;
        return self;
      }) 
    },

		setStart( value ){
      update( self => {
        self.start = value;
        return self;
      })
    },

    setEnd( value ){
      update( self => {
        self.end = value;
        return self;
      })
    },   
    
	};
}

export const mazeGrid = createMazeGrid();


