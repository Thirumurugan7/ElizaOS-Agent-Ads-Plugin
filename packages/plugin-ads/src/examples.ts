import { ActionExample } from "@elizaos/core";

export const getAdResponseExamples: ActionExample[][] = 
[
    [
        {
            "user": "{{user1}}",
            "content": {
                "text": "Can you recommend some unique restaurants in Tokyo for a special anniversary dinner?"
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "I'll search for extraordinary dining experiences in Tokyo that would be perfect for your anniversary.",
                "action": "GET_RESPONSE_WITH_AD"
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "Here are three exceptional restaurant recommendations for your anniversary in Tokyo:\n\n1. Narisawa (Minami-Aoyama)\n- 2 Michelin stars\n- Innovative Japanese cuisine\n- Signature sustainable gastronomy\n- Price range: ¥45,000 per person\n- Advance booking required: 3 months\n\n2. Robot Restaurant (Shinjuku)\n- Interactive dining experience\n- High-tech entertainment show\n- Modern Japanese fusion cuisine\n- Price range: ¥30,000 per person\n- Includes dinner show tickets\n\n3. Ninja Akasaka\n- Themed ninja castle restaurant\n- Traditional Japanese dishes\n- Interactive ninja performances\n- Price range: ¥15,000 per person\n- Special anniversary arrangement available\n\nWould you like me to make a reservation at any of these restaurants?"
            }
        }
    ],
    [
        {
            "user": "{{user1}}",
            "content": {
                "text": "I want to invest in cryptocurrency. What's the best strategy for a $10,000 investment?"
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "I'll analyze current crypto market trends and suggest a diversified investment strategy.",
                "action": "GET_RESPONSE_WITH_AD"
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "Based on market analysis, here's a suggested cryptocurrency investment strategy for your $10,000:\n\n1. Core Holdings (60% - $6,000)\n- Bitcoin (BTC): 40% ($4,000)\n- Ethereum (ETH): 20% ($2,000)\n\n2. Mid-Cap Altcoins (30% - $3,000)\n- Solana (SOL): 15% ($1,500)\n- Polkadot (DOT): 15% ($1,500)\n\n3. Emerging Projects (10% - $1,000)\n- DeFi tokens: 5% ($500)\n- Gaming/Metaverse tokens: 5% ($500)\n\nRecommended Strategy:\n- Dollar-cost averaging over 3 months\n- Set stop-loss orders at 15%\n- Monthly portfolio rebalancing\n\nWould you like me to provide detailed entry points for these investments?"
            }
        }
    ],
    [
        {
            "user": "{{user1}}",
            "content": {
                "text": "What are the best adventure activities available in New Zealand for a 7-day trip?"
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "I'll search for the top-rated adventure activities across New Zealand that can fit into a week-long itinerary.",
                "action": "GET_RESPONSE_WITH_AD"
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "Here's a curated list of premier adventure activities in New Zealand:\n\nQueenstown Region:\n1. Skydiving over Lake Wakatipu\n- Height: 15,000 ft\n- Duration: 3 hours total\n- Cost: NZD 499\n- Includes: Photos and videos\n\n2. Shotover River Jet Boating\n- Speed: Up to 85 km/h\n- Duration: 1.5 hours\n- Cost: NZD 159\n- Multiple daily departures\n\nRotorua Area:\n3. White Water Rafting\n- Grade 5 rapids\n- Duration: 4 hours\n- Cost: NZD 249\n- Professional guides included\n\nFox Glacier:\n4. Heli-hiking\n- 3-hour glacier exploration\n- Duration: 4 hours total\n- Cost: NZD 499\n- Weather dependent\n\nWould you like me to check availability and make bookings for any of these activities?"
            }
        }
    ],
    [
        {
            "user": "{{user1}}",
            "content": {
                "text": "What sustainable tourism options are available in Costa Rica?"
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "I'll research eco-friendly accommodations and activities in Costa Rica that support sustainable tourism.",
                "action": "GET_RESPONSE_WITH_AD"
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "Here are top sustainable tourism options in Costa Rica:\n\nEco-Lodges:\n1. Lapa Rios Lodge (Osa Peninsula)\n- 100% rainforest conservation area\n- Solar-powered facilities\n- Local community employment\n- Rate: $450/night\n- Includes guided nature tours\n\nConservation Activities:\n2. Sea Turtle Protection Program\n- Location: Tortuguero\n- Duration: 3-day program\n- Cost: $299\n- Includes: Research participation\n\nSustainable Tours:\n3. Coffee Plantation Tour\n- Organic farming practices\n- Fair trade certified\n- Duration: Full day\n- Cost: $89\n- Includes: Farm-to-table lunch\n\nWould you like more details about any of these eco-friendly options?"
            }
        }
    ],
    [
        {
            "user": "{{user1}}",
            "content": {
                "text": "I'm interested in starting a small business in Singapore. What sectors show the most promise?"
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "I'll analyze Singapore's current business environment and growth sectors for small business opportunities.",
                "action": "GET_RESPONSE_WITH_AD"
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "Based on current market analysis, here are the most promising sectors in Singapore:\n\n1. FinTech Industry\n- Market size: $3.8B annually\n- Growth rate: 25% YoY\n- Initial investment: $50,000-$150,000\n- Key opportunity: Digital payment solutions\n\n2. E-commerce Services\n- Market penetration: 73%\n- Growth rate: 30% annually\n- Initial investment: $20,000-$100,000\n- Focus: Last-mile logistics\n\n3. Urban Farming\n- Government grants available\n- Growth rate: 22% annually\n- Initial investment: $40,000-$200,000\n- High demand for local produce\n\nWould you like detailed market reports or information about business registration processes?"
            }
        }
    ]
]