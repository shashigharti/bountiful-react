'use client'

import React, { useEffect, useState } from 'react'
import { VegaLite } from 'react-vega'

interface chartProps {
  sampleSize: number
}

const Chart = (props: chartProps) => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://vega.github.io/vega-lite/data/movies.json')
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.slice(0, props.sampleSize)
        console.log(filteredData.length)
        setData(filteredData)
      })
  }, [props.sampleSize])

  const spec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    "width": 800,
    "height": 800,
    data: {
      values: data
    },
    layer: [
      {
        mark: {
          type: 'point',
          filled: true,
        },
        encoding: {
          x: {
            field: 'Rotten Tomatoes Rating',
            type: 'quantitative',
          },
          y: {
            field: 'IMDB Rating',
            type: 'quantitative',
          },
        },
      },
      {
        mark: {
          type: 'line',
          color: 'firebrick',
        },
        transform: [
          {
            regression: 'IMDB Rating',
            on: 'Rotten Tomatoes Rating',
          },
        ],
        encoding: {
          x: {
            field: 'Rotten Tomatoes Rating',
            type: 'quantitative',
          },
          y: {
            field: 'IMDB Rating',
            type: 'quantitative',
          },
        },
      },
      {
        transform: [
          {
            regression: 'IMDB Rating',
            on: 'Rotten Tomatoes Rating',
            params: true,
          },
          { calculate: "'R²: '+format(datum.rSquared, '.2f')", as: 'R2' },
        ],
        mark: {
          type: 'text',
          color: 'firebrick',
          x: 'width',
          align: 'right',
          y: -5,
        },
        encoding: {
          text: { type: 'nominal', field: 'R2' },
        },
      },
    ],
  }

  return <VegaLite spec={{ ...spec } as any} />
}
export default Chart
