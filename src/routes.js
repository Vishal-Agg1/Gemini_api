const { GoogleGenerativeAI } = require("@google/generative-ai");

const express = require("express");
const router = express.Router();
router.post('/help', async (req, res) => {
  const { key: api_key, prompt } = req.body;
  if (!api_key || !prompt) {
    return res.status(400).json({
      success: false,
      message: "Please provide both key and prompt"
    });
  }

  const ai = new GoogleGenerativeAI(api_key);
  const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(prompt);
    const text = await result.response.text();

    return res.json({
      success: true,
      response: text
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
});
module.exports = router;