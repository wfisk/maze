import { writable } from 'svelte/store';

function createMazeGrid() {
	const { subscribe, set, update } = writable({
    columnCount: 0,
    columns: [],
    rowCount: 0,
    rows: [],
    spaces: [],
    start: -1,
    end: -1
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
        self.columns = [...Array(self.columnCount).keys()]
        return self;
      })
    },

		setRowCount( value ) { 
      update( self => {
        self.rowCount = value;
        self.rows = [...Array(self.rowCount).keys()]
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
