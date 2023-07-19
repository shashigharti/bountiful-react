'use client'

import React from 'react'
import { VegaLite } from 'react-vega'

const Chart = () => {
    const spec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "data": {
          "url": "https://vega.github.io/vega-lite/data/movies.json"
        },
        "layer": [
          {
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "Rotten Tomatoes Rating",
                "type": "quantitative"
              },
              "y": {
                "field": "IMDB Rating",
                "type": "quantitative"
              }
            }
          },
          {
            "mark": {
              "type": "line",
              "color": "firebrick"
            },
            "transform": [
              {
                "regression": "IMDB Rating",
                "on": "Rotten Tomatoes Rating"
              }
            ],
            "encoding": {
              "x": {
                "field": "Rotten Tomatoes Rating",
                "type": "quantitative"
              },
              "y": {
                "field": "IMDB Rating",
                "type": "quantitative"
              }
            }
          },
          {
            "transform": [
              {
                "regression": "IMDB Rating",
                "on": "Rotten Tomatoes Rating",
                "params": true
              },
              {"calculate": "'R²: '+format(datum.rSquared, '.2f')", "as": "R2"}
            ],
            "mark": {
              "type": "text",
              "color": "firebrick",
              "x": "width",
              "align": "right",
              "y": -5
            },
            "encoding": {
              "text": {"type": "nominal", "field": "R2"}
            }
          }
        ]
      }
  
    return <VegaLite
    renderer="svg"
    spec={{ ...spec} as any}
  />
  }
export default Chart;