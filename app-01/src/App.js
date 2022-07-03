import React, {useRef, useEffect, useState} from 'react'
import {select } from 'd3';

const init = [20, 45, 55, 35, 66];

function App() {
  const svgRef = useRef();
  const [data, setData] = useState(init)
  
  useEffect(() => {
    const svg = select(svgRef.current)
    svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", value=> value )
      .attr("cx", value=> value * 2)
      .attr("cy", value => value * 2)
      .attr("stroke", "red");
  }, [data])
  return (
    <div className="App">
      <header className="App-header">
        <h1> learning d3 + react!</h1>
      </header>
      <svg ref={svgRef}></svg>
      <button onClick={() => setData(data.map(value => value +5))}>Update Data</button>
      <button onClick={() => setData(data.filter(value => value <= 35))}>Filter Data</button>
      <button onClick={() => setData(init)}>Reset Data</button>
    </div>
  );
}

export default App;
