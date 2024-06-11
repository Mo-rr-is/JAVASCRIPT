import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Interactive } from "diagramatics";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { FaPlay, FaPause } from 'react-icons/fa';
import { useAnimationFrame } from "framer-motion";

const BouncingBall: React.FC = () => {
    const [data, setData] = useState<{ time: number; x: number; height: number }[]>([]);
    const refs = useRef<{ svg: SVGSVGElement | null; controlDiv: HTMLDivElement | null }>({ svg: null, controlDiv: null });
    const interactiveRef = useRef<Interactive | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [index, setIndex] = useState(0);

    
};