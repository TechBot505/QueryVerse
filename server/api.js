const { Configuration, OpenAIApi } = require('openai')
const dotenv = require('dotenv');
dotenv.config();

const openaiApikey = process.env.OPENAI_API_KEY;

if(!openaiApikey) {
    console.log("Open AI api key not set.");
    process.exit(1);
}

const configuration = new Configuration({
    apiKey: openaiApikey,
})

const openai = new OpenAIApi(configuration);

export default openai;