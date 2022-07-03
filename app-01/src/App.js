import React, {useRef, useEffect, useState} from 'react'
import {select, line, curveCardinal } from 'd3';

const init = [20, 45, 55, 35, 66];

function App() {
  const svgRef = useRef();
  const [data, setData] = useState(init)
  
  useEffect(() => {
    const svg = select(svgRef.current)
    const myLine = line()
      .x((value, index) => index*50)
      .y(value => value)
      .curve(curveCardinal);

    console.log(myLine)

    svg.selectAll("path")
      .data([data])
      .join("path")
      .attr("d", value => myLine(value))
      .attr("stroke", "blue")
      .attr("fill", "none")
  }, [data])
  return (
    <div className="App">
      <header className="App-header">
        <h1> learning d3 + react!</h1>
      </header>
      <svg ref={svgRef}>
        <path d="" />
      </svg>
      <button onClick={() => setData(data.map(value => value +5))}>Update Data</button>
      <button onClick={() => setData(data.filter(value => value <= 35))}>Filter Data</button>
      <button onClick={() => setData(init)}>Reset Data</button>
    </div>
  );
}

export default App;
