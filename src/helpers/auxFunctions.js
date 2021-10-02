export const averageStats = (
  param1,
  param2,
  param3,
  param4,
  param5,
  param6
) => {
  let arrStats = [param1, param2, param3, param4, param5, param6].map(
    (x) => +x
  );

  return Math.floor(arrStats.reduce((a, b) => a + b) / arrStats.length);
};
export const getAvgHeight = (team) => {
  let heights = [];
  if (team.length > 0) {
    team.map((h) => heights.push(parseInt(h.appearance.height[1])));
  }
  return Math.floor(heights.reduce((acc, h) => acc + h) / team.length);
};
export const getAvgWeight = (team) => {
  let weights = [];
  if (team.length > 0) {
    team.map((h) => weights.push(parseInt(h.appearance.weight[1])));
  }
  return Math.floor(weights.reduce((acc, h) => acc + h) / team.length);
};
export const getStrongestStat = (team) => {
  const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  };

  let arrStats = [];
  if (team.length > 0) {
    team.map((h) => {
      let powerstats = Object.values(h.powerstats);
      let maxStat = Math.max(...powerstats).toString();
      let stat = getKeyByValue(h.powerstats, maxStat);
      arrStats.push(stat);
    });
  }
  return Object.entries(
    arrStats.reduce((acc, v) => {
      acc[v] = acc[v] ? acc[v] + 1 : 1;
      return acc;
    }, {})
  ).reduce((acc, v) => (v[1] >= acc[1] ? v : acc), [null, 0])[0];
};

export const getPowerStats = (team) => {
  let teamStats = {};
  let keys = [
    "intelligence",
    "strength",
    "speed",
    "durability",
    "power",
    "combat",
  ];
  for (const key of keys) {
    teamStats[key] = 0;
  }
  if (team.length > 0) {
    team.map((h) => {
      for (let i = 0; i < keys.length; i++) {
        teamStats[keys[i]] += Number(h.powerstats[keys[i]]);
      }
    });
  }
  return Object.values(teamStats);
};
