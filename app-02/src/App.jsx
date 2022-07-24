import React, {useRef, useEffect, useState} from 'react'
import {select, line, curveCardinal, axisBottom, axisRight, scaleLinear } from 'd3';
import './App.css'

const init = [0, 45, 55, 35, 66, 88, 10, 33, 85, 22, 15, 19, 10, 10, 10, 10, 10];

function App() {
  const svgRef = useRef();
  const [data, setData] = useState(init)
  
  useEffect(() => {
    const svg = select(svgRef.current)
    const xScale = scaleLinear()
      .domain([0, data.length-1])
      .range([0, 300])

    const yScale = scaleLinear()
      .domain([0, 90])
      .range([150, 0])

    const xAxis = axisBottom(xScale);
    svg
      .select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis);

    const yAxis = axisRight(yScale);
    svg
      .select(".y-axis")
      .style("transform", "translateX(300px)")
      .call(yAxis)

    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    svg.selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("stroke", "blue")
      .attr("fill", "none")
      .attr("width", "100px")
  }, [data])

  return (
    <div className="App">
      <header className="App-header">
        <h1> learning d3 + react!</h1>
      </header>
      <svg ref={svgRef}>
        {/* <path d="" /> */}
        <g className='x-axis' />
        <g className='y-axis' />
      </svg>
      <div className="Tools">
        <button onClick={() => setData(data.map(value => value +5))}>Update Data</button>
        <button onClick={() => setData(data.filter(value => value <= 35))}>Filter Data</button>
        <button onClick={() => setData(init)}>Reset Data</button>
      </div>
    </div>
  );
}

export default App;
