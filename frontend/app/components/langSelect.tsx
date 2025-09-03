import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import { useLanguageStore } from "store/langStore";

const languages = [
  { label: "Afrikaans", value: "afr" },
  { label: "Amharic", value: "amh" },
  { label: "Arabic", value: "ara" },
  { label: "Assamese", value: "asm" },
  { label: "Azerbaijani", value: "aze" },
  { label: "Azerbaijani - Cyrillic", value: "aze_cyrl" },
  { label: "Belarusian", value: "bel" },
  { label: "Bengali", value: "ben" },
  { label: "Tibetan", value: "bod" },
  { label: "Bosnian", value: "bos" },
  { label: "Breton", value: "bre" },
  { label: "Bulgarian", value: "bul" },
  { label: "Catalan; Valencian", value: "cat" },
  { label: "Cebuano", value: "ceb" },
  { label: "Czech", value: "ces" },
  { label: "Chinese - Simplified", value: "chi_sim" },
  { label: "Chinese - Traditional", value: "chi_tra" },
  { label: "Cherokee", value: "chr" },
  { label: "Corsican", value: "cos" },
  { label: "Welsh", value: "cym" },
  { label: "Danish", value: "dan" },
  { label: "Danish - Fraktur", value: "dan_frak" },
  { label: "German", value: "deu" },
  { label: "German - Fraktur", value: "deu_frak" },
  { label: "German (Fraktur Latin)", value: "deu_latf" },
  { label: "Dzongkha", value: "dzo" },
  { label: "Greek, Modern (1453-)", value: "ell" },
  { label: "English", value: "eng" },
  { label: "English, Middle (1100-1500)", value: "enm" },
  { label: "Esperanto", value: "epo" },
  { label: "Math / Equation Detection", value: "equ" },
  { label: "Estonian", value: "est" },
  { label: "Basque", value: "eus" },
  { label: "Faroese", value: "fao" },
  { label: "Persian", value: "fas" },
  { label: "Filipino (old - Tagalog)", value: "fil" },
  { label: "Finnish", value: "fin" },
  { label: "French", value: "fra" },
  { label: "German - Fraktur (old)", value: "frk" },
  { label: "French, Middle (ca.1400-1600)", value: "frm" },
  { label: "Western Frisian", value: "fry" },
  { label: "Scottish Gaelic", value: "gla" },
  { label: "Irish", value: "gle" },
  { label: "Galician", value: "glg" },
  { label: "Greek, Ancient (to 1453)", value: "grc" },
  { label: "Gujarati", value: "guj" },
  { label: "Haitian; Haitian Creole", value: "hat" },
  { label: "Hebrew", value: "heb" },
  { label: "Hindi", value: "hin" },
  { label: "Croatian", value: "hrv" },
  { label: "Hungarian", value: "hun" },
  { label: "Armenian", value: "hye" },
  { label: "Inuktitut", value: "iku" },
  { label: "Indonesian", value: "ind" },
  { label: "Icelandic", value: "isl" },
  { label: "Italian", value: "ita" },
  { label: "Italian - Old", value: "ita_old" },
  { label: "Javanese", value: "jav" },
  { label: "Japanese", value: "jpn" },
  { label: "Kannada", value: "kan" },
  { label: "Georgian", value: "kat" },
  { label: "Georgian - Old", value: "kat_old" },
  { label: "Kazakh", value: "kaz" },
  { label: "Central Khmer", value: "khm" },
  { label: "Kyrgyz", value: "kir" },
  { label: "Kurdish (Latin)", value: "kmr" },
  { label: "Korean", value: "kor" },
  { label: "Korean (Vertical)", value: "kor_vert" },
  { label: "Kurdish (Arabic)", value: "kur" },
  { label: "Lao", value: "lao" },
  { label: "Latin", value: "lat" },
  { label: "Latvian", value: "lav" },
  { label: "Lithuanian", value: "lit" },
  { label: "Luxembourgish", value: "ltz" },
  { label: "Malayalam", value: "mal" },
  { label: "Marathi", value: "mar" },
  { label: "Macedonian", value: "mkd" },
  { label: "Maltese", value: "mlt" },
  { label: "Mongolian", value: "mon" },
  { label: "Maori", value: "mri" },
  { label: "Malay", value: "msa" },
  { label: "Burmese", value: "mya" },
  { label: "Nepali", value: "nep" },
  { label: "Dutch; Flemish", value: "nld" },
  { label: "Norwegian", value: "nor" },
  { label: "Occitan (post 1500)", value: "oci" },
  { label: "Oriya", value: "ori" },
  { label: "Orientation & Script Detection", value: "osd" },
  { label: "Punjabi", value: "pan" },
  { label: "Polish", value: "pol" },
  { label: "Portuguese", value: "por" },
  { label: "Pashto", value: "pus" },
  { label: "Quechua", value: "que" },
  { label: "Romanian", value: "ron" },
  { label: "Russian", value: "rus" },
  { label: "Sanskrit", value: "san" },
  { label: "Sinhala", value: "sin" },
  { label: "Slovak", value: "slk" },
  { label: "Slovak - Fraktur", value: "slk_frak" },
  { label: "Slovenian", value: "slv" },
  { label: "Sindhi", value: "snd" },
  { label: "Spanish", value: "spa" },
  { label: "Spanish - Old", value: "spa_old" },
  { label: "Albanian", value: "sqi" },
  { label: "Serbian", value: "srp" },
  { label: "Serbian - Latin", value: "srp_latn" },
  { label: "Sundanese", value: "sun" },
  { label: "Swahili", value: "swa" },
  { label: "Swedish", value: "swe" },
  { label: "Syriac", value: "syr" },
  { label: "Tamil", value: "tam" },
  { label: "Tatar", value: "tat" },
  { label: "Telugu", value: "tel" },
  { label: "Tajik", value: "tgk" },
  { label: "Tagalog (new)", value: "tgl" },
  { label: "Thai", value: "tha" },
  { label: "Tigrinya", value: "tir" },
  { label: "Tonga", value: "ton" },
  { label: "Turkish", value: "tur" },
  { label: "Uyghur", value: "uig" },
  { label: "Ukrainian", value: "ukr" },
  { label: "Urdu", value: "urd" },
  { label: "Uzbek", value: "uzb" },
  { label: "Uzbek - Cyrillic", value: "uzb_cyrl" },
  { label: "Vietnamese", value: "vie" },
  { label: "Yiddish", value: "yid" },
  { label: "Yoruba", value: "yor" },
];

export function LangSelect() {
  const { updateLanguage } = useLanguageStore();

  const [open, SetOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value) updateLanguage(value);
  }, [value, updateLanguage]);

  return (
    <div className="p-2">
      <p className="p-2 font-bold">Select the Language</p>
      <Popover open={open} onOpenChange={SetOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? languages.find((language) => language.value === value)?.label
              : "Select Language"}
            <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Command>
            <CommandInput placeholder="Search Language" />
            <CommandList>
              <CommandEmpty>No Language Found</CommandEmpty>
              <CommandGroup>
                {languages.map((language) => (
                  <CommandItem
                    key={language.value}
                    value={language.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      SetOpen(false);
                    }}
                  >
                    <CheckIcon
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === language.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {language.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
