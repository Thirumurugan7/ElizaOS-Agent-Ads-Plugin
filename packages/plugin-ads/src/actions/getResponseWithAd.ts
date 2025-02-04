import {
    elizaLogger,
    Action,
    ActionExample,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    State,
    ModelClass,
    generateText
} from "@elizaos/core";
import { createAdService } from "../services";
import { getAdResponseExamples } from "../examples";
import { Ad } from "../types";

const TWITTER_MAX_LENGTH = 280;

export const getResponseWithAdAction: Action = {
    name: "GET_RESPONSE_WITH_AD",
    similes: [
        "HELP", "TELL", "SHOW", "EXPLAIN", "GUIDE", "LEARN", "ADVICE", "RECOMMEND", "SUGGEST",
        "TEACH", "TIPS", "HOW TO", "LEARN_ABOUT", "UNDERSTAND", "MASTER", "IMPROVE",
        "BEST_WAY", "START", "BEGIN", "PRACTICE", "STUDY", "TRAIN", "DEVELOP",
        "RESOURCES", "TOOLS", "COURSES", "TUTORIALS", "GUIDE ME", "NEED_HELP",
        "WHERE_TO_START", "GET_BETTER", "ENHANCE", "UPGRADE", "LEVEL_UP",
        // Add catch-all similes to ensure it triggers
        "NONE", "DEFAULT"
    ],
    description: "Get a response augmented with a relevant advertisement.",
    validate: async (_runtime: IAgentRuntime) => {
        return true;
    },
    shouldHandle: async (_runtime: IAgentRuntime, message: Memory) => {
        // Always handle the message
        return true;
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        _state: State,
        _options: { [key: string]: unknown },
        callback: HandlerCallback
    ) => {
        try {
            const userMessage = message.content?.toString() || "";
            
            // Generate AI response first
            const aiResponse = await generateText({
                runtime,
                context: `Generate a helpful and concise response for: ${userMessage}. Keep it informative but brief enough to fit in a tweet with an ad.`,
                modelClass: ModelClass.LARGE
            });
            
            // Get ad from external service
            const adService = createAdService();
            const { ad } = await adService.getRelevantAd(userMessage, aiResponse);

            // Compose final response
            const finalResponse = composeTwitterResponse(aiResponse, ad);

            elizaLogger.success(`Successfully generated response with ad`);

            callback({
                text: finalResponse,
                action: "GET_RESPONSE_WITH_AD",
                intent: "HELP" // Add default intent
            });
            return true;
        } catch (error: any) {
            elizaLogger.error("Error in response with ad handler:", error);
            callback({
                text: `Error generating response with ad: ${error.message}`,
                content: { error: error.message },
            });
            return false;
        }
    },
    examples: getAdResponseExamples as ActionExample[][],
} as Action;

export default getResponseWithAdAction;

function composeTwitterResponse(aiResponse: string, ad: Ad): string {
    // Calculate available space for response after ad
    const adText = `\n\nSuggested: ${ad.title}\n${ad.link}`;
    const maxResponseLength = TWITTER_MAX_LENGTH - adText.length - 10; // 10 chars buffer

    // Truncate AI response if needed
    let truncatedResponse = aiResponse;
    if (truncatedResponse.length > maxResponseLength) {
        truncatedResponse = truncatedResponse.substring(0, maxResponseLength - 3) + "...";
    }

    return `${truncatedResponse}${adText}`;
}

// Helper function to generate more natural responses
function getBaseResponse(message: string): string {
    // Use the message directly as the initial response for now
    return message;
}

function getContextualAdIntro(ad: Ad): string {
    const intros = [
        "you might find this helpful",
        "here's a great resource that could help you on your journey",
        "I'd recommend checking out this resource",
        "this might be exactly what you're looking for"
    ];
    return intros[Math.floor(Math.random() * intros.length)];
}

function generateContextualResponse(message: string, ad: Ad): string {
    const responses: { [key: string]: string } = {
        "investing": `Start investing:
📈 Learn market basics
💰 Try index funds first
✨ ${ad.title} - ${ad.description}
🔗 ${ad.link}`,

        "digital marketing": `Marketing tips:
🎯 Master SEO
📱 Create content
✨ ${ad.title} - ${ad.description}
🔗 ${ad.link}`,

        "fitness": `Fitness tracking:
💪 Daily progress
🎯 Set goals
✨ ${ad.title} - ${ad.description}
🔗 ${ad.link}`,

        "coding": `Code better:
💻 Build projects
👥 Join communities
✨ ${ad.title} - ${ad.description}
🔗 ${ad.link}`
    };

    const topic = Object.keys(responses).find(key =>
        message.toLowerCase().includes(key)
    ) || "general";

    if (topic === "general") {
        return `Quick guide:
📚 Learn basics
🎯 Practice daily
✨ ${ad.title} - ${ad.description}
🔗 ${ad.link}`;
    }

    return responses[topic];
}