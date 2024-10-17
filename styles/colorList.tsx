import React, { useEffect, useState } from 'react';

const colorClasses : string[] =  [
    '#F4A261',
    '#E76F51',
    '#2A9D8F',
    '#264653',
    '#E9C46A',
    '#FF6347',
    '#F7B267',
    '#F25C54',
    '#B5E48C',
    '#457B9D',
];

export const randomColorSelector= (): string => {

    const randomIndex = Math.floor(Math.random() * colorClasses.length);
    return colorClasses[randomIndex];
    
}