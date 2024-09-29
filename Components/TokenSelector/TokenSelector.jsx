import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
} from "../../Components/ui/Select";
import { useState } from "react";

const tokenData = [
  {
    name: "Ox Protocol",
    symbol: "ZRX",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/73be894649968360ff8e74b283a096ca02a1e4478ec1a6b6582c409da5756759?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960",
  },
  {
    name: "1inch",
    symbol: "1INCH",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0679934e2f2bb54d66551ba323ea53b5e2d578f9099347a41ba7d10342c477ab?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960",
  },
  {
    name: "Aave",
    symbol: "AAVE",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/403c065506ae2ae8f8fa678e29e56ac185aa6d4120c914c0f2e346abd1f47fdd?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960",
  },
  {
    name: "Across Protocol",
    symbol: "ACX",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3be2771f01a18591fb5f8f5a5b9f926c61e61c04b61836158d241b8ee9581070?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960",
  },
  {
    name: "AdEx",
    symbol: "ADX",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0e409a5c87c9719f8a2e78fbcbc92819bb4b5db5d741456f6d0e63c3f754f15?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960",
  },
  {
    name: "AIOZ Network",
    symbol: "AIOZ",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a42c2d69199f0a18625e7ffa45215fc0f59daf7261996227b6a3cc890e282f26?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960",
  },
];

const TokenSelector = () => {
  const [selectedToken, setSelectedToken] = useState(tokenData[0]); // Default token

  const handleTokenSelect = (symbol) => {
    const token = tokenData.find((token) => token.symbol === symbol);
    setSelectedToken(token);
  };

  return (
    <div className="w-full  h-full max-w-[22rem]">
      {/* Shadcn Select Component */}
      <Select
        className="h-full bg-transparent"
        onValueChange={handleTokenSelect}
      >
        <SelectTrigger className="flex h-full rounded-[8px] items-center justify-between bg-[#211f45] border border-[#162A69] px-4 py-3 bg-transparent  cursor-pointer text-white">
          <SelectValue placeholder="Select Token">
            <div className="flex items-center gap-3">
              <img
                src={selectedToken.icon}
                alt={selectedToken.name}
                className="w-5 h-5"
              />
              <span>
                {selectedToken.name} ({selectedToken.symbol})
              </span>
            </div>
          </SelectValue>
        </SelectTrigger>

        <SelectContent className="bg-[#1E1E48] rounded-md py-2 h-max-[500px] overflow-y-auto">
          <SelectGroup>
            <SelectItem
              disabled
              className="text-[16px] font-bold font-[Inter] px-4 py-2 text-white"
            >
              Select a Token
            </SelectItem>
            {tokenData.map((token) => (
              <SelectItem
                key={token.symbol}
                value={token.symbol}
                className="flex items-center flex-row gap-3 px-4 py-2 cursor-pointer hover:bg-[#2d2d6b]  text-white"
              >
                <div className="flex space-x-6">
                  <img src={token.icon} alt={token.name} className="w-5 h-5" />
                  <span>{token.name}</span>
                  <span>{token.symbol}</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TokenSelector;
