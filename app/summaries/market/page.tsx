"use client"
import React, {JSX} from 'react'
import TradingViewWidget from '@/components/StockWidgets/TradingViewWidget'

import { SymbolOverview } from "react-ts-tradingview-widgets";
import SummarizedMarketData from '@/types/api/SummarizedMarketData';
import KeyMetrics from '@/components/summaries/market/KeyMetrics';


type Props = {}

const sampleData : SummarizedMarketData = {
    marketTrend: "2", // Ranges from -2 to +2 => -2 is strongly down, +2 is strongly up
    predictedWeeklyTrend: "0",
    abnormality: true,
    abnormalityDescription: "Trump getting elected has set the stage for more conservative views, which has pushed up the market as a result.", // If there is an abnormality, an explanation of why

    summaryPoints: [
        {
            positive: false,
            content: "Fed cuts investment rates by 25%"
        },
        {
            positive: true,
            content: "China makes big investments into US technology sector"
        },
        {
          positive: false,
          content: "Japanese markets crash"
        } 
    ],

    stocksToWatch: [
      {
        ticker: "NVDA",
        reason: "Blackwell Chips released this week; NVDA stock predicted to rise."
      },
      {
        ticker: "NVDA",
        reason: "Blackwell Chips released this week; NVDA stock predicted to rise."
      },
      {
        ticker: "NVDA",
        reason: "Blackwell Chips released this week; NVDA stock predicted to rise."
      }
    ] 
}

const page = (props: Props) => {
  return (
    <div className='m-4'>
        <div className="flex gap-2">
          <div className="w-1 bg-blue-500"></div>

          <div>
            <h1 className='text-3xl font-bold font-lora'>Market Overview</h1>
            <h3 className='flex gap-1 items-center'>
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
                Summarized by AI
            </h3>
          </div>

        </div>

        
        
        <div className='h-40'>
          {/* <SymbolOverview colorTheme="dark"
              autosize
              chartType="candlesticks"
              downColor="#800080"
              borderDownColor="#800080"
              wickDownColor="#800080" 
              dateFormat="dd MMM 'yy"/> */}
              {/* <TradingViewWidget/> */}
              
        </div>

        <KeyMetrics sampleData={sampleData}/>

        <div className='mt-4'>
          {/* <h2 className='font-lora mt-4 font-bold text-lg'>| Summary Points</h2> */}
          <h4 className=' text-gray-400 text-sm'>Summary Points</h4>

          {sampleData.summaryPoints.map((point, index) => (
            <div key={index} className='flex gap-[5px] items-start'>
              {point.positive ? <div className='size-2 rounded-full mt-[0.65ch] bg-green-500'></div> : <div className='size-2 rounded-full mt-[0.65ch] bg-red-500'></div>}
              <p className='text-sm'>{point.content}</p>
            </div>
          ))}
        </div>

        <div className='mt-4'>
          <h4 className='text-gray-400 text-sm'>Stocks To Watch</h4>
          <div className="flex flex-col gap-2 mt-2">
            {sampleData.stocksToWatch.map((stock, index) => (
              <div key={index} className='border-[0.25px] flex gap-2 rounded-sm p-2 border-gray-500'>
                <code className='px-2 rounded-md bg-slate-800 text-red-500 text-lg'>{stock.ticker}</code>
                <div className="w-[2.5px] bg-white"></div>
                <p className='text-xs'>{stock.reason}</p>
              </div>
            ))}
          </div>

        </div>

    </div>
  )
}

export default page


/*
    "symbols": [
      {
        "s": "FOREXCOM:SPXUSD",
        "d": "S&P 500"
      },
      {
        "s": "FOREXCOM:NSXUSD",
        "d": "Nasdaq 100"
      },
      {
        "s": "FOREXCOM:DJI",
        "d": "Dow 30"
      },
      {
        "s": "INDEX:NKY",
        "d": "Nikkei 225"
      },
      {
        "s": "INDEX:DEU30",
        "d": "DAX Index"
      },
      {
        "s": "FOREXCOM:UKXGBP",
        "d": "UK 100"
      }
    ], */