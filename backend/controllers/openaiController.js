const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const chatWithOpenAI = async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Poruka je obavezna." });
    }

    const FinMessage =
        `In answer only give me the translation in montenegrin (latin). If text is already in that language, just return the 
    the same message. Try to make it as short as necessary
    and remove unnecessary things that an average person wouldn't understand if possible, but you must keep meaning
    the same, for the next text:" ${message}"`;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: FinMessage }],
        });

        if (!response.choices || response.choices.length === 0) {
            return res.status(500).json({ error: "AI nije dao nikakav odgovor." });
        }

        const reply = response.choices[0].message.content;
        res.status(200).json({ reply });

    } catch (error) {
        console.error("Greška prilikom poziva OpenAI API-ja:", error.message);
        res.status(500).json({ error: "Greška prilikom komunikacije sa AI-em." });
    }
};

const testList = async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Poruka je obavezna." });
    }

    const FinMessage =
        `Analiziraj sljedeće lijekove. Tvoj zadatak je da utvrdiš postoji li medicinski značajna interakcija između njih. Fokusiraj se na kombinacije koje su opasne.
Lijekovi:${message}
Ukoliko ne pronađeš interakciju, odgovori ISKLJUČIVO sljedećom rečenicom: "Nismo našli problema sa listom."
Ukoliko postoji interakcija, odgovori ISKLJUČIVO sljedećom rečenicom: "Postoji problem sa listom. (Objasnjenje problema)".`;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: FinMessage }],
        });

        if (!response.choices || response.choices.length === 0) {
            return res.status(500).json({ error: "AI nije dao nikakav odgovor." });
        }

        const reply = response.choices[0].message.content;
        res.status(200).json({ reply });

    } catch (error) {
        console.error("Greška prilikom poziva OpenAI API-ja:", error.message);
        res.status(500).json({ error: "Greška prilikom komunikacije sa AI-em." });
    }
};

module.exports = {
    chatWithOpenAI,
    testList
};
