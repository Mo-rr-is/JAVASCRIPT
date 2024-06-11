import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Interactive } from 'diagramatics';
import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { useAnimationFrame } from 'framer-motion';

const BouncingBall: React.FC = () => {
  const [data, setData] = useState<{ time: number; x: number; height: number }[]>([]);
  const refs = useRef<{ svg: SVGSVGElement | null; controlDiv: HTMLDivElement | null }>({ svg: null, controlDiv: null });
  const interactiveRef = useRef<Interactive | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    d3.csv('/data/bouncing_ball.csv').then((data) => {
      const parsedData = data.map((d) => ({
        time: +d.time!,
        x: +d.x!,
        height: +d.height!,
      }));
      setData(parsedData);
    });
  }, []);

  const renderAxisLabels = (svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, width: number, height: number) => {
    if (svg.selectAll('.axis-label').empty()) {
      svg.append('text')
        .attr('class', 'axis-label')
        .attr('x', width / 2)
        .attr('y', height + 40)
        .attr('text-anchor', 'middle')
        .text('Time (s)');

      svg.append('text')
        .attr('class', 'axis-label')
        .attr('x', -height / 2)
        .attr('y', -40)
        .attr('text-anchor', 'middle')
        .attr('transform', 'rotate(-90)')
        .text('Height (m)');
    }
  };

  const draw = (index: number) => {
    if (!refs.current.svg) return;

    const svg = d3.select(refs.current.svg);
    const width = 800;
    const height = 400;
    const ballRadius = 10;

    const xScale = d3.scaleLinear().domain([0, d3.max(data, (d) => d.x)!]).range([0, width]);
    const yScale = d3.scaleLinear().domain([0, d3.max(data, (d) => d.height)!]).range([height, 0]);

    svg.select('.ball')
      .attr('cx', xScale(data[index].x))
      .attr('cy', yScale(data[index].height));

    const lineData = data.slice(0, index + 1).map(d => ({
      x: xScale(d.x),
      y: yScale(d.height)
    }));

    const lineGenerator = d3.line<{ x: number, y: number }>()
      .x(d => d.x)
      .y(d => d.y);

    svg.select('.line')
      .attr('d', lineGenerator(lineData));
  };

  useEffect(() => {
    if (data.length === 0 || !refs.current.svg || !refs.current.controlDiv) return;

    const svg = d3.select(refs.current.svg);
    const width = 800;
    const height = 400;
    const ballRadius = 10;

    svg.attr('width', width).attr('height', height);

    renderAxisLabels(svg, width, height);

    const ball = svg.selectAll('.ball').data([null]);
    ball.enter().append('circle').attr('class', 'ball').attr('r', ballRadius).attr('fill', 'blue');

    const line = svg.selectAll('.line').data([null]);
    line.enter().append('path').attr('class', 'line').attr('stroke', 'red').attr('stroke-dasharray', '5,5').attr('fill', 'none');

    if (!interactiveRef.current) {
      const int = new Interactive(refs.current.controlDiv, refs.current.svg);
      interactiveRef.current = int;

      int.draw_function = (inp) => {
        const idx = Math.floor(inp['index']);
        setIndex(idx);
        draw(idx);
      };

      int.slider('index', 0, data.length - 1, 0);
      int.draw();
    }
  }, [data]);

  useAnimationFrame((time) => {
    if (isPlaying) {
      if (index >= data.length) {
        setIsPlaying(false);
        return;
      }
      draw(index);
      setIndex(index + 1);
    }
  }, isPlaying);

  return (
    <VStack spacing={4}>
      <Box as="svg" ref={(el) => (refs.current.svg = el)} border="1px solid black" bg="#f0f0f0" mx="auto" display="block" />
      <Box ref={(el) => (refs.current.controlDiv = el)} id="controldiv" display="flex" justifyContent="center" alignItems="center" />
      <HStack spacing={4} alignItems="center">
        <Button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </Button>
      </HStack>
      {data.length > 0 && (
        <Text>Time: {data[index].time.toFixed(2)} s, Height: {data[index].height.toFixed(2)} m</Text>
      )}
    </VStack>
  );
};

export default BouncingBall;
