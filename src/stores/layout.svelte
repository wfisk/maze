<script>
import { writable } from 'svelte/store';

function createLayout() {
	const { subscribe, set, update } = writable({
    columnCount: 0,
    rowCount: 0,
    spaces: [],
    start: -1,
    end: -1
  });

	return {
    subscribe,
    /*
		setColumnCount: value => update( self => {
      self.columnCount = value;
      return self;
    }),

		setRowCount: value => update( self => {
      self.rowCount = value;
      return self;
    }),

		addSpace: value => update( self => {
      self.spaces.push( value );
      return self;
    }),

		removeSpace: value => update( self => {
      let index = self.spaces.indexOf(value);
      if (index !== -1) {
        self.spaces.splice(index, 1);
      }  
      return self;
    }),

		setStart: value => update( self => {
      self.start = value;
      return self;
    }),

		setEnd: value => update( self => {
      self.end = value;
      return self;
    }) 
    */
	};
}

export const layout = createLayout();
</script>