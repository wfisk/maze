<script>
  export let rowCount = 10;
  export let columnCount = 10;
  export let spaces = [];

  import { scaleLinear } from 'd3-scale';
  // import { mazeGrid } from './stores/maze-grid.js';
  


	const padding = { top: 10, right: 10, bottom: 10, left: 10 };

  let clientWidth = 0;
  let clientHeight = 0;

	let width = 1000;
  let height = 1000;
  let lineWidth = 1;
  let marker = {row:0, column: 0};
  $: mazeGrid = {
    rowCount,
    columnCount,
    spaces
  };

	$: xScale = scaleLinear()
		.domain([0, mazeGrid.columnCount])
		.range([padding.left, width - padding.right]);

	$: yScale = scaleLinear()
		.domain([0, mazeGrid.rowCount])
		.range([padding.top, height - padding.bottom]);

  $: innerWidth = width - (padding.left + padding.right);
  
  $: squareHeight = height / mazeGrid.rowCount - lineWidth * 4;
  $: squareWidth = width / mazeGrid.columnCount - lineWidth * 4;

  // $: markerStyle = `transform: translate(${marker.column * 5}%, ${marker.row * 5}%); transition: transform 0.3s ease-out`;
  $: markerStyle = `transform: translate(${xScale(marker.column) + lineWidth / 2}px, ${yScale(marker.row) + lineWidth / 2}px); transition: transform 0.3s ease-out`;
  

  function addressToIndex( row, column ) { 
    return row * mazeGrid.columnCount + column;
  }

  function canMoveMarker( incRow, incColumn ){
    let newRow = marker.row + incRow;
    let newColumn = marker.column + incColumn;

    return newRow > -1 &&
      newRow < mazeGrid.rowCount &&
      newColumn > -1 &&
      newColumn < mazeGrid.columnCount &&
      isSpaceAt( newRow, newColumn );
  }


  function indexToAddress( index ) { 
    return {
      row:     Math.floor( index / mazeGrid.columnCount ),
      column:  index % mazeGrid.columnCount
    };
  }

  function isMarkerAt( row, column ){
    return marker.row === row && marker.column === column;
  }

  function isSpaceAt( row, column ){
    let index = addressToIndex( row, column );
    return mazeGrid.spaces.indexOf( index ) > -1;
  }

  function moveMarker( incRow, incColumn ){
    marker.row = marker.row + incRow;
    marker.column = marker.column + incColumn;
  }

	function spin(node, { duration }) {
		return {
			duration,
			css: t => {
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${~~(t * 360)},
						${Math.min(100, 1000 - 1000 * t)}%,
						${Math.min(50, 500 - 500 * t)}%
					);`
			}
		};
	}  


  // Events
  function onKeyDown(event) {
    console.log( event.key );

		switch (event.key) {
			case "ArrowDown":
        event.preventDefault();
        if ( canMoveMarker(1,0) ) {
          moveMarker(1,0);
        }
        break;
        
			case "ArrowUp":
				event.preventDefault();
        if ( canMoveMarker(-1,0) ) {
          moveMarker(-1,0);
        }
        break;
        
      case "ArrowLeft":
				event.preventDefault();
        if ( canMoveMarker(0,-1) ) {
          moveMarker(0,-1);
        }
        break;
        
			case "ArrowRight":
				event.preventDefault();
        if ( canMoveMarker(0,1) ) {
          moveMarker(0,1);
        }
        break;
        
			default:
				// just eat it
    }
    console.log( marker );
  }

  
  function onSquareClick( event ){
    let row = parseInt( event.target.dataset.row, 10 );
    let column = parseInt( event.target.dataset.column, 10 );
    let index = addressToIndex( row, column );
    console.log( { row, column } );
    if ( isSpaceAt( row, column ) ) {
      removeSpace( index );
    } 
    else {
      addSpace( index );
    }  
  }
</script>

<style>
	h2 {
		text-align: center;
	}
	svg {
		position: relative;
		width: 100%;
		height: auto;
	}

	.board {
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
	}

  .board svg {
    background-color: black;
  }

  .column line {
		stroke: #d00;
    stroke-width: 0.5;
	}

  .row line {
		stroke: #990;
    stroke-width: 0.5;
	}

  .square rect {
    fill: #aaa;
    cursor: pointer;
    stroke-width: 0;
  }

  .square.space rect {
    fill: #fff;
    cursor: pointer;
    stroke-width: 0;
  }
</style>

<h2>Maze Board</h2>

<svelte:window on:keydown={onKeyDown}/>

<div 
  class="board" 
  bind:clientWidth={clientWidth} 
  bind:clientHeight={clientHeight}
  >
  
	<svg viewBox="0 0 {width} {height}" width="100%" preserveAspectRatio="xMidYMid meet">
		<g class='squares'>
      {#each [...Array(mazeGrid.rowCount).keys()] as row}
        {#each [...Array(mazeGrid.columnCount).keys()] as column}
          <g 
            class="square" 
            class:space={isSpaceAt(row,column)}
            transform="translate({xScale(column) + lineWidth / 2}, {yScale(row) + lineWidth / 2})"
            >
            <rect 
              width={squareWidth} 
              height={squareHeight} 
              data-row={row}
              data-column={column}
              on:click={onSquareClick} />
          </g>  
        {/each}
      {/each}
    </g>      

    <g 
      class="marker"
      style={markerStyle}
    >
      <circle 
        cx="{squareWidth/2}" 
        cy="{squareHeight/2}" 
        r="{squareWidth/4}"
     />
    </g>

	</svg>

</div>