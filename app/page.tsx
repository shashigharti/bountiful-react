'use client'

import React, { ChangeEvent, useState } from 'react'
import Chart from './components/chart'

export default function Home() {
  const [sampleSize, setSampleSize] = useState(1000)

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSampleSize(Number(event.target.value))
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      <div>
        <label
          htmlFor="customRange1"
          className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
        >
          Sample Size
        </label>
        <input
          type="range"
          className="transparent h-1.5 w-cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
          min="0"
          max="3200"
          value={sampleSize}
          onChange={handleSliderChange}
        />
        {sampleSize}
      </div>
      <div>
        <Chart sampleSize={sampleSize} />
      </div>
    </div>
  )
}
