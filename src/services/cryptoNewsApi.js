import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const axios = require("axios");
const cryptoNewsHeaders={
     'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '365de80e71mshad79330a101d295p19f871jsna6294fb1aca3',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    
}
const baseUrl='https://bing-news-search1.p.rapidapi.com';

const createRequest=(url)=>({url,headers:cryptoNewsHeaders
})

export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
           
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

export const {useGetCryptoNewsQuery}=cryptoNewsApi;


// const options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news',
//   params: {safeSearch: 'Off', textFormat: 'Raw'},
//   headers: {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': '365de80e71mshad79330a101d295p19f871jsna6294fb1aca3',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//   }
// };