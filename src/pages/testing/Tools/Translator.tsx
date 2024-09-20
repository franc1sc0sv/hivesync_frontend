import { useState } from "react";
import { TextField, MenuItem } from "@mui/material";
import axios from "axios";

export const TranslatorPage: React.FC = () => {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("es");
  const [targetLang, setTargetLang] = useState("en");

  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

  const handleTranslate = async () => {
    if (!sourceText.trim()) {
      alert("Por favor, ingresa algún texto para traducir.");
      return;
    }

    try {
      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
        null,
        {
          params: {
            q: sourceText,
            source: sourceLang,
            target: targetLang,
            format: "text",
            key: API_KEY,
          },
        }
      );

      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error("Error al realizar la traducción:", error);
      alert(
        "Hubo un error al traducir el texto. Inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-overlay_1">
      <div className="w-full max-w-md p-8 space-y-6 bg-[#28242C] rounded-2xl shadow-lg mt-6">
        <div className="flex justify-between space-x-4">
          <TextField
            select
            label="Texto en: "
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
            fullWidth
            InputLabelProps={{
              style: { color: "#FFF" },
            }}
            sx={{
              backgroundColor: "#19161D",
              color: "#FFF",
              "& .MuiInputBase-root": {
                color: "#FFFFFE",
              },
              "& .Mui-focused .MuiInputLabel-root": {
                color: "#FFF",
              },
              "& .MuiSvgIcon-root": {
                color: "#FFF",
              },
            }}
          >
            <MenuItem value="es">Español</MenuItem>
            <MenuItem value="en">Inglés</MenuItem>
            <MenuItem value="fr">Francés</MenuItem>
            <MenuItem value="de">Alemán</MenuItem>
            <MenuItem value="it">Italiano</MenuItem>
            <MenuItem value="pt">Portugués</MenuItem>
            <MenuItem value="ja">Japonés</MenuItem>
            <MenuItem value="zh">Chino</MenuItem>
            <MenuItem value="ru">Ruso</MenuItem>
            <MenuItem value="ar">Árabe</MenuItem>
          </TextField>

          <TextField
            select
            label="Texto a: "
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            fullWidth
            InputLabelProps={{
              style: { color: "#FFF" },
            }}
            sx={{
              backgroundColor: "#19161D",
              color: "#FFF",
              "& .MuiInputBase-root": {
                color: "#FFFFFE",
              },
              "& .Mui-focused .MuiInputLabel-root": {
                color: "#FFF",
              },
              "& .MuiSvgIcon-root": {
                color: "#FFF",
              },
            }}
          >
            <MenuItem value="es">Español</MenuItem>
            <MenuItem value="en">Inglés</MenuItem>
            <MenuItem value="fr">Francés</MenuItem>
            <MenuItem value="de">Alemán</MenuItem>
            <MenuItem value="it">Italiano</MenuItem>
            <MenuItem value="pt">Portugués</MenuItem>
            <MenuItem value="ja">Japonés</MenuItem>
            <MenuItem value="zh">Chino (Simplificado)</MenuItem>
            <MenuItem value="ru">Ruso</MenuItem>
            <MenuItem value="ar">Árabe</MenuItem>
          </TextField>
        </div>

        <textarea
          placeholder="Ingrese el texto a traducir"
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
          className="min-h-[100px] w-full mt-3 bg-[#19161D] text-[#FFFFFE] border-none rounded-xl placeholder-[#FFFFFE]/50 p-4 resize-none"
        />

        <button
          onClick={handleTranslate}
          className="w-full mt-3 bg-[#45156B] hover:bg-[#9333EA] text-[#FFFFFE] rounded-xl py-2 transition-colors duration-300"
        >
          Traducir
        </button>

        <textarea
          placeholder="Traducción"
          value={translatedText}
          readOnly
          className="min-h-[100px] w-full mt-3 bg-[#19161D] text-[#FFFFFE] border-none rounded-xl placeholder-[#FFFFFE]/50 p-4 resize-none"
        />
      </div>
    </div>
  );
};
