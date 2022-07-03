import React, {useRef, useEffect} from 'react'
import {select } from 'd3';

const data = [ 20, 45, 55, 35, 66];

function App() {
  const svgRef = useRef();
  
  useEffect(() => {
    const svg = select(svgRef.current)
    svg.selectAll("circle")
      .data(data)
      .join(
        enter => enter
          .append("circle")
          .attr("r", value=> value / 2 )
          .attr("cx", value=> value * 2)
          .attr("cy", value => value * 2)
          .attr("stroke", "red"),

        update => update.attr("class", "updated"),
        exit => exit.remove()
      )
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1> learning d3 + react!</h1>
      </header>
      <svg ref={svgRef}>
      </svg>
    </div>
  );
}

export default App;
