import React, { JSX } from 'react'

import SummarizedMarketData from "../../../types/api/SummarizedMarketData"

const arrowTrendingUp = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>)
const arrowTrendingDown = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" /></svg>)
const arrowsUpDown = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" /></svg>)

const marketTrendToElement: Record<string, JSX.Element> = {
  "-2": <p className='text-red-600 flex gap-1 items-center font-lora'> {arrowTrendingDown} Strongly Downward</p>, 
  "-1": <p className='text-orange-600 flex gap-1 items-center font-lora'> {arrowTrendingDown} Slightly Downward</p>, 
  "0": <p className=' flex gap-1 items-center font-lora'> {arrowsUpDown} Neutral</p>,
  "1": <p className='text-emerald-400 flex gap-1 items-center font-lora'> {arrowTrendingUp} Slightly Upward</p>, 
  "2": <p className='text-green-600 flex gap-1 items-center font-lora'> {arrowTrendingUp} Strongly Upward</p>, 
}

const KeyMetrics = ({sampleData}: {sampleData: SummarizedMarketData}) => {
  return (
    <div>
        <div className='flex gap-8'>
          <div className=''>
            <h4 className=' text-gray-400 text-sm'>Market Trend</h4>
            {marketTrendToElement[sampleData.marketTrend]}
          </div>
          <div>
            <h4 className=' text-gray-400 text-sm'>Predicted Weekly Trend</h4>
            {marketTrendToElement[sampleData.predictedWeeklyTrend]}
          </div>
        </div>

        <div className='mt-4'>
          <h4 className=' text-gray-400 text-sm'>Abnormality?</h4>
          {sampleData.abnormality ? 
            <div>
              <h2 className='font-lora text-red-500 flex gap-1 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg> 
                Market Abnormality
              </h2>
              <p className='text-xs'>{sampleData.abnormalityDescription}</p>
            </div> 
            : 
            <h2 className='font-lora text-green-500 flex gap-1 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
              Regular Market Flucuations
            </h2>}
        </div>
    </div>
  )
}

export default KeyMetrics