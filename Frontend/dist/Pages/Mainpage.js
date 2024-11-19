"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// import { useState } from "react";
// // import { fetchPrice } from "./../server";

// const Mainpage = () => {
//   const [selectedGun, setSelectedGun] = useState("AK-47");
//   const [selectedSkin, setSelectedSkin] = useState("Redline");
//   const [selectedCondition, setSelectedCondition] = useState("Battle Scarred");
//   const [price, setPrice] = useState("");

//   const handleGetPrice = async () => {
//     // const fetchedPrice = await fetchPrice(
//     //   selectedGun,
//     //   selectedSkin,
//     //   selectedCondition
//     // );
//     // setPrice(fetchedPrice ? `$${fetchedPrice}` : "Price not available");
//     setPrice(100);
//   };

//   return (
//     <div>
//       <div className="flex flex-col">
//         <p className="text-9xl text-black">CS2 SKIN PRICE CHECKER</p>
//         <select
//           name="GUN"
//           id="guns"
//           className="bg-gray-500 mb-6 text-xl"
//           value={selectedGun}
//           onChange={(e) => {
//             setSelectedGun(e.target.value);
//             console.log(`The selected Gun is ${e.target.value}`);
//           }}
//         >
//           <option value="AK-47">AK-47</option>
//           <option value="AWP">AWP</option>
//         </select>
//         <select
//           name="Skin"
//           id="skins"
//           className="bg-red-400 mb-6 text-xl"
//           value={selectedSkin}
//           onChange={(e) => {
//             setSelectedSkin(e.target.value);
//             console.log(`The selected Skin is ${e.target.value}`);
//           }}
//         >
//           <option value="Redline">Redline</option>
//           <option value="Pit Viper">Pit Viper</option>
//           <option value="Asiimov">Asiimov</option>
//           <option value="Elite Build">Elite Build</option>
//         </select>
//         <select
//           name="Condition"
//           id="condition"
//           className="bg-blue-500 mb-6 text-xl"
//           value={selectedCondition}
//           onChange={(e) => {
//             setSelectedCondition(e.target.value);
//             console.log(`The selected Condition is ${e.target.value}`);
//           }}
//         >
//           <option value="Battle-Scarred">Battle-Scarred</option>
//           <option value="Well-Worn">Well-Worn</option>
//           <option value="Field-Tested">Field-Tested</option>
//           <option value="Minimal Wear">Minimal Wear</option>
//           <option value="Factory New">Factory New</option>
//         </select>

//         <button
//           className="bg-green-600 w-20 mb-6 text-xl"
//           onClick={handleGetPrice}
//         >
//           GET PRICE
//         </button>
//         <p className="bg-neutral-500 text-xl">{price}</p>
//       </div>
//     </div>
//   );
// };

// export default Mainpage;

//

//vercel version up there
// import React, { useState } from "react";
// import axios from "axios";

// const Mainpage = () => {
//   const [category, setCategory] = useState("");
//   const [gun, setGun] = useState("");
//   const [skin, setSkin] = useState("");
//   const [condition, setCondition] = useState("");
//   const [skinData, setSkinData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const gunCategories = {
//     Pistols: [
//       "Glock-18",
//       "USP-S",
//       "P2000",
//       "P250",
//       "Desert Eagle",
//       "Five-SeveN",
//       "CZ75-Auto",
//       "Dual Berettas",
//       "R8 Revolver",
//       "Tec-9",
//     ],
//     Rifles: ["AK-47", "M4A4", "M4A1-S", "AUG", "SG 553", "FAMAS", "Galil AR"],
//     Snipers: ["SSG 08", "AWP", "G3SG1", "SCAR-20"],
//     SMGs: ["MAC-10", "MP9", "MP7", "MP5-SD", "UMP-45", "P90", "PP-Bizon"],
//     Heavy: ["Nova", "XM1014", "MAG-7", "Sawed-Off", "M249", "Negev"],
//   };

//   const conditions = [
//     "Factory New",
//     "Minimal Wear",
//     "Field-Tested",
//     "Well-Worn",
//     "Battle-Scarred",
//   ];

//   const fetchSkinData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get("api/fetchSkinData", {
//         params: { gun, skin, condition },
//       });
//       setSkinData(response.data.data);
//       console.log(response);
//     } catch (err) {
//       setError("Error fetching skin data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>CS:GO Skin Data Fetcher</h1>
//       <div>
//         <label>
//           Category:
//           <select
//             value={category}
//             onChange={(e) => {
//               setCategory(e.target.value);
//               setGun(""); // Reset gun selection when category changes
//             }}
//           >
//             <option value="">Select a category</option>
//             {Object.keys(gunCategories).map((cat) => (
//               <option key={cat} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </label>
//       </div>
//       <div>
//         <label>
//           Gun:
//           <select
//             value={gun}
//             onChange={(e) => setGun(e.target.value)}
//             disabled={!category}
//           >
//             <option value="">Select a gun</option>
//             {category &&
//               gunCategories[category].map((g) => (
//                 <option key={g} value={g}>
//                   {g}
//                 </option>
//               ))}
//           </select>
//         </label>
//       </div>
//       <div>
//         <label>
//           Skin:
//           <input
//             type="text"
//             value={skin}
//             onChange={(e) => setSkin(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Condition:
//           <select
//             value={condition}
//             onChange={(e) => setCondition(e.target.value)}
//           >
//             <option value="">Select a condition</option>
//             {conditions.map((cond) => (
//               <option key={cond} value={cond}>
//                 {cond}
//               </option>
//             ))}
//           </select>
//         </label>
//       </div>
//       <button onClick={fetchSkinData} disabled={loading}>
//         {loading ? "Loading..." : "Fetch Skin Data"}
//       </button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {skinData && (
//         <div>
//           <h2>Skin Data:</h2>
//           <p>
//             <strong>Success:</strong> {skinData.success ? "Yes" : "No"}
//           </p>
//           <p>
//             <strong>Average Price:</strong> ${skinData.average_price}
//           </p>
//           <p>
//             <strong>Median Price:</strong> ${skinData.median_price}
//           </p>
//           <p>
//             <strong>Amount Sold:</strong> {skinData.amount_sold}
//           </p>
//           <p>
//             <strong>Standard Deviation:</strong> {skinData.standard_deviation}
//           </p>
//           <p>
//             <strong>Lowest Price:</strong> ${skinData.lowest_price}
//           </p>
//           <p>
//             <strong>Highest Price:</strong> ${skinData.highest_price}
//           </p>
//           {/* <p>
//             <strong>First Sale Date:</strong>{" "}
//             {new Date(skinData.first_sale_date).toLocaleDateString()}
//           </p> */}
//           <p>
//             <strong>Time:</strong> {skinData.time}
//           </p>
//           {/* Uncomment this line to show the image when the issue is resolved */}
//           {/* <img src={skinData.icon} alt="Skin Icon" /> */}
//           <p>
//             <strong>Currency:</strong> {skinData.currency}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Mainpage;

//above version works fine. recently added a drop down with skin conditions.

// import React, { useState } from "react";
// import axios from "axios";

// const Mainpage = () => {
//   const [category, setCategory] = useState("");
//   const [gun, setGun] = useState("");
//   const [skin, setSkin] = useState("");
//   const [condition, setCondition] = useState("");
//   const [currency, setCurrency] = useState("USD");
//   const [stattrackSouvenir, setStattrackSouvenir] = useState("");
//   const [skinData, setSkinData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const gunCategories = {
//     Pistols: [
//       "Glock-18",
//       "USP-S",
//       "P2000",
//       "P250",
//       "Desert Eagle",
//       "Five-SeveN",
//       "CZ75-Auto",
//       "Dual Berettas",
//       "R8 Revolver",
//       "Tec-9",
//     ],
//     Rifles: ["AK-47", "M4A4", "M4A1-S", "AUG", "SG 553", "FAMAS", "Galil AR"],
//     Snipers: ["SSG 08", "AWP", "G3SG1", "SCAR-20"],
//     SMGs: ["MAC-10", "MP9", "MP7", "MP5-SD", "UMP-45", "P90", "PP-Bizon"],
//     Heavy: ["Nova", "XM1014", "MAG-7", "Sawed-Off", "M249", "Negev"],
//   };

//   const conditions = [
//     "Factory New",
//     "Minimal Wear",
//     "Field-Tested",
//     "Well-Worn",
//     "Battle-Scarred",
//   ];

//   const currencies = [
//     { code: "USD", symbol: "$", name: "US Dollar" },
//     { code: "EUR", symbol: "€", name: "Euro" },
//     { code: "GBP", symbol: "£", name: "British Pound" },
//     { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
//     { code: "AUD", symbol: "A$", name: "Australian Dollar" },
//     { code: "JPY", symbol: "¥", name: "Japanese Yen" },
//     { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
//     { code: "CHF", symbol: "CHF", name: "Swiss Franc" },
//     { code: "INR", symbol: "₹", name: "Indian Rupee" },
//     { code: "RUB", symbol: "₽", name: "Russian Ruble" },
//     { code: "BRL", symbol: "R$", name: "Brazilian Real" },
//     { code: "ZAR", symbol: "R", name: "South African Rand" },
//     { code: "KRW", symbol: "₩", name: "South Korean Won" },
//     { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
//     { code: "NZD", symbol: "NZ$", name: "New Zealand Dollar" },
//     { code: "MXN", symbol: "Mex$", name: "Mexican Peso" },
//     { code: "SEK", symbol: "kr", name: "Swedish Krona" },
//     { code: "NOK", symbol: "kr", name: "Norwegian Krone" },
//     { code: "DKK", symbol: "kr", name: "Danish Krone" },
//     { code: "PLN", symbol: "zł", name: "Polish Złoty" },
//   ];

//   const fetchSkinData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(
//         "https://cs-2-skin-price-fetcher-api.vercel.app/api/fetchSkinData",
//         {
//           params: {
//             gun: `${stattrackSouvenir} ${gun}`.trim(),
//             skin,
//             condition,
//             currency,
//           },
//         }
//       );
//       setSkinData(response.data.data);
//       console.log(response);
//     } catch (err) {
//       setError("Error fetching skin data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getCurrencySymbol = (code) => {
//     const currencyObj = currencies.find((currency) => currency.code === code);
//     return currencyObj ? currencyObj.symbol : "$";
//   };

//   return (
//     <div>
//       <h1>CS:GO Skin Data Fetcher</h1>
//       <div>
//         <label>
//           Category:
//           <select
//             value={category}
//             onChange={(e) => {
//               setCategory(e.target.value);
//               setGun(""); // Reset gun selection when category changes
//             }}
//           >
//             <option value="">Select a category</option>
//             {Object.keys(gunCategories).map((cat) => (
//               <option key={cat} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </label>
//       </div>
//       <div>
//         <label>
//           Stattrack/Souvenir:
//           <select
//             value={stattrackSouvenir}
//             onChange={(e) => setStattrackSouvenir(e.target.value)}
//           >
//             <option value="">None</option>
//             <option value="StatTrak">StatTrak</option>
//             <option value="Souvenir">Souvenir</option>
//           </select>
//         </label>
//       </div>
//       <div>
//         <label>
//           Gun:
//           <select
//             value={gun}
//             onChange={(e) => setGun(e.target.value)}
//             disabled={!category}
//           >
//             <option value="">Select a gun</option>
//             {category &&
//               gunCategories[category].map((g) => (
//                 <option key={g} value={g}>
//                   {stattrackSouvenir ? `${stattrackSouvenir} ${g}` : g}
//                 </option>
//               ))}
//           </select>
//         </label>
//       </div>
//       <div>
//         <label>
//           Skin:
//           <input
//             type="text"
//             value={skin}
//             onChange={(e) => setSkin(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Condition:
//           <select
//             value={condition}
//             onChange={(e) => setCondition(e.target.value)}
//           >
//             <option value="">Select a condition</option>
//             {conditions.map((cond) => (
//               <option key={cond} value={cond}>
//                 {cond}
//               </option>
//             ))}
//           </select>
//         </label>
//       </div>
//       <div>
//         <label>
//           Currency:
//           <select
//             value={currency}
//             onChange={(e) => {
//               setCurrency(e.target.value);
//               console.log(currency);
//             }}
//           >
//             <option value="">Select a currency</option>
//             {currencies.map((curr) => (
//               <option key={curr.code} value={curr.code}>
//                 {curr.name}
//               </option>
//             ))}
//           </select>
//         </label>
//       </div>
//       <button onClick={fetchSkinData} disabled={loading}>
//         {loading ? "Loading..." : "Fetch Skin Data"}
//       </button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {skinData && (
//         <div>
//           <h2>Skin Data:</h2>
//           <p>
//             <strong>Average Price:</strong> {getCurrencySymbol(currency)}
//             {skinData.average_price}
//           </p>
//           <p>
//             <strong>Median Price:</strong> {getCurrencySymbol(currency)}
//             {skinData.median_price}
//           </p>
//           <p>
//             <strong>Amount Sold:</strong> {skinData.amount_sold}
//           </p>
//           <p>
//             <strong>Standard Deviation:</strong> {getCurrencySymbol(currency)}
//             {skinData.standard_deviation}
//           </p>
//           <p>
//             <strong>Lowest Price:</strong> {getCurrencySymbol(currency)}
//             {skinData.lowest_price}
//           </p>
//           <p>
//             <strong>Highest Price:</strong> {getCurrencySymbol(currency)}
//             {skinData.highest_price}
//           </p>
//           <p className="flex flex-row ">
//             <strong>Time Sample: </strong> {skinData.time}{" "}
//             <p className="ml-1">Days</p>
//           </p>
//           <p>
//             <strong>Currency:</strong> {skinData.currency}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Mainpage;

//csgobackpack dead

const Mainpage = () => {
  const [category, setCategory] = (0, _react.useState)("");
  const [gun, setGun] = (0, _react.useState)("");
  const [skin, setSkin] = (0, _react.useState)("");
  const [condition, setCondition] = (0, _react.useState)("");
  const [isStatTrak, setIsStatTrak] = (0, _react.useState)(false);
  const [isSouvenir, setIsSouvenir] = (0, _react.useState)(false);
  const [skinData, setSkinData] = (0, _react.useState)(null);
  const [skinDetails, setSkinDetails] = (0, _react.useState)(null);
  const [loading, setLoading] = (0, _react.useState)(false);
  const [error, setError] = (0, _react.useState)(null);
  const [newGun, setNewGun] = (0, _react.useState)("");
  const [csgoFloatStatus, setCsgoFloatStatus] = (0, _react.useState)("");
  const [classColor, setClassColor] = (0, _react.useState)("");
  const [weaponClass, setWeaponClass] = (0, _react.useState)("");
  const gunCategories = {
    Pistols: ["Glock-18", "USP-S", "P2000", "P250", "Desert Eagle", "Five-SeveN", "CZ75-Auto", "Dual Berettas", "R8 Revolver", "Tec-9"],
    Rifles: ["AK-47", "M4A4", "M4A1-S", "AUG", "SG 553", "FAMAS", "Galil AR"],
    Snipers: ["SSG 08", "AWP", "G3SG1", "SCAR-20"],
    SMGs: ["MAC-10", "MP9", "MP7", "MP5-SD", "UMP-45", "P90", "PP-Bizon"],
    Heavy: ["Nova", "XM1014", "MAG-7", "Sawed-Off", "M249", "Negev"]
  };
  const conditions = ["Factory New", "Minimal Wear", "Field-Tested", "Well-Worn", "Battle-Scarred"];
  (0, _react.useEffect)(() => {
    let color = "";
    switch (weaponClass) {
      case "Consumer Grade":
        color = "text-gray-200";
        break;
      case "Industrial Grade":
        color = "text-blue-200";
        break;
      case "Mil-Spec":
        color = "text-blue-700";
        break;
      case "Restricted":
        color = "text-purple-400";
        break;
      case "Classified":
        color = "text-pink-600";
        break;
      case "Covert":
        color = "text-red-600";
        break;
      case "Contraband":
        color = "text-yellow-500";
        break;
      default:
        color = "";
    }
    setClassColor(color);
  }, [weaponClass]);
  (0, _react.useEffect)(() => {
    if (isStatTrak) {
      setNewGun("StatTrak\u2122 ".concat(gun));
      setCsgoFloatStatus(2);
    } else if (isSouvenir) {
      setNewGun("Souvenir ".concat(gun));
      setCsgoFloatStatus(3);
    } else {
      setNewGun(gun);
      setCsgoFloatStatus(1);
    }
  }, [gun, isStatTrak, isSouvenir]);
  const fetchSkinData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await _axios.default.get("https://cs-2-skin-price-fetcher-api.vercel.app/api/fetchSkinData", {
        params: {
          gun,
          skin,
          condition,
          isStatTrak,
          isSouvenir
        }
      });
      if (response.data.success) {
        // Save skin data to the backend
        await _axios.default.post("https://cs-2-skin-price-fetcher-api.vercel.app/api/saveSkinData", {
          success: response.data.success,
          lowest_price: response.data.lowest_price,
          volume: response.data.volume,
          median_price: response.data.median_price,
          gun,
          skin,
          condition,
          isStatTrak,
          isSouvenir
        });
        setSkinData(response.data);

        // Fetch additional skin details from the CSGO API
        const skinDetailsResponse = await _axios.default.get("https://bymykel.github.io/CSGO-API/api/en/skins.json");
        const skinDetailsData = skinDetailsResponse.data.find(s => s.name === "".concat(gun, " | ").concat(skin));
        setSkinDetails(skinDetailsData);
        setWeaponClass(skinDetailsData.rarity.name);
      } else {
        setError("Failed to fetch skin data from Steam Market API");
      }
    } catch (err) {
      setError("Error fetching skin data");
    } finally {
      setLoading(false);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col justify-center items-center min-h-screen bg-black text-white font-mono"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "text-lg font-bold"
  }, "CS:GO Skin Data Fetcher"), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "font-semibold "
  }, "Category: "), /*#__PURE__*/_react.default.createElement("select", {
    value: category,
    onChange: e => {
      setCategory(e.target.value);
      setGun("");
    },
    className: "bg-neutral-800 rounded-sm ml-2 text-white"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "Select a category"), Object.keys(gunCategories).map(cat => /*#__PURE__*/_react.default.createElement("option", {
    key: cat,
    value: cat
  }, cat))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "font-semibold"
  }, " Gun:"), /*#__PURE__*/_react.default.createElement("select", {
    value: gun,
    onChange: e => setGun(e.target.value),
    className: "bg-neutral-800 rounded-sm ml-2 text-white",
    disabled: !category
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "Select a gun"), category && gunCategories[category].map(g => /*#__PURE__*/_react.default.createElement("option", {
    key: g,
    value: g
  }, g))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-1"
  }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "font-semibold"
  }, " Skin:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    value: skin,
    onChange: e => setSkin(e.target.value),
    className: "bg-neutral-800 rounded-sm ml-2 text-white"
  }))), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-xs mb-2"
  }, "(Example : Aquamarine Revenge [or] Redline)"), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "font-semibold"
  }, "Condition:"), /*#__PURE__*/_react.default.createElement("select", {
    value: condition,
    onChange: e => setCondition(e.target.value),
    className: "bg-neutral-800 rounded-sm ml-2 text-white"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "Select a condition"), conditions.map(cond => /*#__PURE__*/_react.default.createElement("option", {
    key: cond,
    value: cond
  }, cond))))), /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "text-orange-500"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "font-semibold"
  }, "StatTrak:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: isStatTrak,
    onChange: e => {
      setIsStatTrak(e.target.checked);
      setNewGun("StatTrak\u2122 ".concat(gun));
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "text-yellow-300"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "font-semibold"
  }, " Souvenir:"), ".", /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: isSouvenir,
    onChange: e => {
      setIsSouvenir(e.target.checked);
      setNewGun("Souvenir ".concat(gun));
    }
  }))), /*#__PURE__*/_react.default.createElement("button", {
    onClick: fetchSkinData,
    disabled: loading,
    className: "bg-gray-600 p-1 rounded-md font-semibold"
  }, loading ? "Loading..." : "Fetch Skin Data"), error && /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: "red"
    }
  }, error)), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-1"
  }, skinData && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, "Skin Data:"), skinDetails && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: skinDetails.image,
    alt: skinDetails.name,
    className: "max-w-72"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-row"
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Name:"), " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "font-semibold text-neutral-500"
  }, skinDetails.name)), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", {
    className: "ml-2"
  }, "Rarity:"), " ", /*#__PURE__*/_react.default.createElement("span", {
    className: classColor
  }, skinDetails.rarity.name))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-row"
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Min Float:"), " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "text-green-500"
  }, skinDetails.min_float)), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", {
    className: "ml-2"
  }, "Max Float:"), " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "text-red-600"
  }, skinDetails.max_float))), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Collections:"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "text-yellow-500"
  }, skinDetails.collections.map(collection => /*#__PURE__*/_react.default.createElement("li", {
    key: collection.id
  }, collection.name))))), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Lowest Price:"), " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "text-green-600"
  }, skinData.lowest_price)), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Volume:"), " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "text-cyan-500"
  }, skinData.volume)), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Median Price:"), " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "text-green-600"
  }, skinData.median_price)), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-row content-center justify-center"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "mr-2 mt-1 font-semibold"
  }, "Check This skin on the Market :"), /*#__PURE__*/_react.default.createElement("button", {
    className: "mr-2"
  }, /*#__PURE__*/_react.default.createElement("a", {
    title: "Steam, Public domain, via Wikimedia Commons",
    href: "https://steamcommunity.com/market/listings/730/".concat(newGun, "%20%7C%20").concat(skin, "%20(").concat(condition, ")"),
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("img", {
    width: "32",
    alt: "Steam icon logo",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/32px-Steam_icon_logo.svg.png?20220611141426"
  }))), /*#__PURE__*/_react.default.createElement("button", {
    className: "ml-2"
  }, /*#__PURE__*/_react.default.createElement("a", {
    title: "csgofloat",
    href: "https://csfloat.com/search?category=".concat(csgoFloatStatus, "&sort_by=lowest_price&type=buy_now&market_hash_name=").concat(newGun, "%20%7C%20").concat(skin, "%20(").concat(condition, ")"),
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://csfloat.com/assets/n-mini-logo.png",
    alt: "csgofloatlogo",
    className: "max-w-8"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/_react.default.createElement("button", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://buymeacoffee.com/sdahewar",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "If you wanna buy me a coffee :]")))))));
};
var _default = exports.default = Mainpage;