//csgobackpack dead

import React, { useState, useEffect } from "react";
import axios from "axios";

const config = require("dotenv").config;
const Mainpage = () => {
  const [category, setCategory] = useState("");
  const [gun, setGun] = useState("");
  const [skin, setSkin] = useState("");
  const [condition, setCondition] = useState("");
  const [isStatTrak, setIsStatTrak] = useState(false);
  const [isSouvenir, setIsSouvenir] = useState(false);
  const [skinData, setSkinData] = useState(null);
  const [skinDetails, setSkinDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newGun, setNewGun] = useState("");
  const [csgoFloatStatus, setCsgoFloatStatus] = useState("");
  const [classColor, setClassColor] = useState("");
  const [weaponClass, setWeaponClass] = useState("");

  const gunCategories = {
    Pistols: [
      "Glock-18",
      "USP-S",
      "P2000",
      "P250",
      "Desert Eagle",
      "Five-SeveN",
      "CZ75-Auto",
      "Dual Berettas",
      "R8 Revolver",
      "Tec-9",
    ],
    Rifles: ["AK-47", "M4A4", "M4A1-S", "AUG", "SG 553", "FAMAS", "Galil AR"],
    Snipers: ["SSG 08", "AWP", "G3SG1", "SCAR-20"],
    SMGs: ["MAC-10", "MP9", "MP7", "MP5-SD", "UMP-45", "P90", "PP-Bizon"],
    Heavy: ["Nova", "XM1014", "MAG-7", "Sawed-Off", "M249", "Negev"],
  };

  const conditions = [
    "Factory New",
    "Minimal Wear",
    "Field-Tested",
    "Well-Worn",
    "Battle-Scarred",
  ];

  useEffect(() => {
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
  useEffect(() => {
    if (isStatTrak) {
      setNewGun(`StatTrak™ ${gun}`);
      setCsgoFloatStatus(2);
    } else if (isSouvenir) {
      setNewGun(`Souvenir ${gun}`);
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
      const response = await axios.get(process.env.FETCH_SKIN_API, {
        params: {
          gun,
          skin,
          condition,
          isStatTrak,
          isSouvenir,
        },
      });

      if (response.data.success) {
        // Save skin data to the backend
        await axios.post(process.env.SAVE_SKIN_API, {
          success: response.data.success,
          lowest_price: response.data.lowest_price,
          volume: response.data.volume,
          median_price: response.data.median_price,
          gun,
          skin,
          condition,
          isStatTrak,
          isSouvenir,
        });

        setSkinData(response.data);

        // Fetch additional skin details from the CSGO API
        const skinDetailsResponse = await axios.get(
          process.env.SKIN_DETAIL_API
        );
        const skinDetailsData = skinDetailsResponse.data.find(
          (s) => s.name === `${gun} | ${skin}`
        );
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

  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white font-mono">
        <h1 className="text-lg font-bold">CS:GO Skin Data Fetcher</h1>
        <div className="flex-1">
          <div className="mb-2">
            <label>
              <span className="font-semibold ">Category: </span>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setGun("");
                }}
                className="bg-neutral-800 rounded-sm ml-2 text-white"
              >
                <option value="">Select a category</option>
                {Object.keys(gunCategories).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="font-semibold"> Gun:</span>
              <select
                value={gun}
                onChange={(e) => setGun(e.target.value)}
                className="bg-neutral-800 rounded-sm ml-2 text-white"
                disabled={!category}
              >
                <option value="">Select a gun</option>
                {category &&
                  gunCategories[category].map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
              </select>
            </label>
          </div>
          <div className="mb-1">
            <label>
              <span className="font-semibold"> Skin:</span>
              <input
                type="text"
                value={skin}
                onChange={(e) => setSkin(e.target.value)}
                className="bg-neutral-800 rounded-sm ml-2 text-white"
              />
            </label>
          </div>
          <p className="text-xs mb-2">
            (Example : Aquamarine Revenge [or] Redline)
          </p>
          <div className="mb-2">
            <label>
              <span className="font-semibold">Condition:</span>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="bg-neutral-800 rounded-sm ml-2 text-white"
              >
                <option value="">Select a condition</option>
                {conditions.map((cond) => (
                  <option key={cond} value={cond}>
                    {cond}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="">
            <label className="text-orange-500">
              <span className="font-semibold">StatTrak:</span>
              <input
                type="checkbox"
                checked={isStatTrak}
                onChange={(e) => {
                  setIsStatTrak(e.target.checked);
                  setNewGun(`StatTrak™ ${gun}`);
                }}
              />
            </label>
          </div>
          <div className="mb-2">
            <label className="text-yellow-300">
              <span className="font-semibold"> Souvenir:</span>.
              <input
                type="checkbox"
                checked={isSouvenir}
                onChange={(e) => {
                  setIsSouvenir(e.target.checked);
                  setNewGun(`Souvenir ${gun}`);
                }}
              />
            </label>
          </div>
          <button
            onClick={fetchSkinData}
            disabled={loading}
            className="bg-gray-600 p-1 rounded-md font-semibold"
          >
            {loading ? "Loading..." : "Fetch Skin Data"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <div className="flex-1">
          {skinData && (
            <div>
              <h2>Skin Data:</h2>
              {skinDetails && (
                <div>
                  <img
                    src={skinDetails.image}
                    alt={skinDetails.name}
                    className="max-w-72"
                  />
                  <div className="flex flex-row">
                    <p>
                      <strong>Name:</strong>{" "}
                      <span className="font-semibold text-neutral-500">
                        {skinDetails.name}
                      </span>
                    </p>
                    <p>
                      <strong className="ml-2">Rarity:</strong>{" "}
                      <span className={classColor}>
                        {skinDetails.rarity.name}
                      </span>
                    </p>
                  </div>
                  {/* <p className="max-w-72">
                    <strong>Description:</strong>{" "}
                    <span className="text-sm">{skinDetails.description}</span>
                  </p> */}

                  <div className="flex flex-row">
                    <p>
                      <strong>Min Float:</strong>{" "}
                      <span className="text-green-500">
                        {skinDetails.min_float}
                      </span>
                    </p>
                    <p>
                      <strong className="ml-2">Max Float:</strong>{" "}
                      <span className="text-red-600">
                        {skinDetails.max_float}
                      </span>
                    </p>
                  </div>
                  <p>
                    <strong>Collections:</strong>
                    <ul className="text-yellow-500">
                      {skinDetails.collections.map((collection) => (
                        <li key={collection.id}>{collection.name}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              )}
              <p>
                <strong>Lowest Price:</strong>{" "}
                <span className="text-green-600">{skinData.lowest_price}</span>
              </p>
              <p>
                <strong>Volume:</strong>{" "}
                <span className="text-cyan-500">{skinData.volume}</span>
              </p>
              <p>
                <strong>Median Price:</strong>{" "}
                <span className="text-green-600">{skinData.median_price}</span>
              </p>
              <div className="flex flex-row content-center justify-center">
                <p className="mr-2 mt-1 font-semibold">
                  Check This skin on the Market :
                </p>
                <button className="mr-2">
                  <a
                    title="Steam, Public domain, via Wikimedia Commons"
                    href={`https://steamcommunity.com/market/listings/730/${newGun}%20%7C%20${skin}%20(${condition})`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      width="32"
                      alt="Steam icon logo"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/32px-Steam_icon_logo.svg.png?20220611141426"
                    />
                  </a>
                </button>
                <button className="ml-2">
                  <a
                    title="csgofloat"
                    href={`https://csfloat.com/search?category=${csgoFloatStatus}&sort_by=lowest_price&type=buy_now&market_hash_name=${newGun}%20%7C%20${skin}%20(${condition})`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://csfloat.com/assets/n-mini-logo.png"
                      alt="csgofloatlogo"
                      className="max-w-8"
                    />
                  </a>
                </button>
              </div>
              <div className="mt-2  text-xs">
                <button>
                  <a
                    href="https://buymeacoffee.com/sdahewar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-900"
                  >
                    If you wanna buy me a coffee :]
                  </a>
                </button>
              </div>
            </div>
          )}
        </div>
        <p className="text-xs">Powered By Steam</p>
        <p className="text-xs">Not affiliated with Valve Corp.</p>
      </div>
    </div>
  );
};

export default Mainpage;
