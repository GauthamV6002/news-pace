type SummarizedMarketData = {
    marketTrend: "-2" | "-1" | "0" | "1" | "2"; // Ranges from -2 to +2 => -2 is strongly down, +2 is strongly up
    predictedWeeklyTrend: "-2" | "-1" | "0" | "1" | "2";
    abnormality: boolean;
    abnormalityDescription: string; // If there is an abnormality, an explanation of why

    summaryPoints: {
        positive: boolean;
        content: string;
    }[];

    stocksToWatch: {
        ticker: string;
        reason: string;
    }[];
}

export default SummarizedMarketData