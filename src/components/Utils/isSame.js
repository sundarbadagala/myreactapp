export const isSame = (obj1, obj2) => {
  return Object.keys(obj1).map((item) => {
    if (typeof obj1[item] === "string" || typeof obj1[item] === "number") {
      return obj2.hasOwnProperty(item) && obj1[item] == obj2[item];
    } else if (Array.isArray(obj1[item])) {
      if (typeof obj1[item][0] === "string") {
        return (
          obj2.hasOwnProperty(item) &&
          obj1[item].every(
            (key, index) => obj2[item]?.[index] === key
          )
        );
      } else if (typeof obj1[item][0] === "object") {
        if (obj1[item]?.length === obj2[item]?.length) {
          const isSame =
            obj1[item]?.length === obj2[item]?.length &&
            obj1[item].every(
              (value, i) =>
                Object.keys(value).length <=
                  Object.keys(obj2[item][i]).length &&
                Object.keys(value).every(
                  (subValue) => value[subValue] === obj2[item][i][subValue]
                )
            );
          return isSame;
        } else {
          return false;
        }
      } else {
        return obj1[item].length === obj2[item].length;
      }
    } else if (typeof obj1[item] === "object") {
      if (obj1[item] === null || obj1[item] === undefined) {
        return obj2.hasOwnProperty(item) && obj1[item] === obj2[item];
      } else {
        if (Object.keys(obj1[item]).length === 0) {
          return false;
        } else {
          return Object.keys(obj1[item]).map((vals) => {
            return (
              obj2[item].hasOwnProperty(vals) &&
              obj1[item][vals] === obj2[item][vals]
            );
          });
        }
      }
    }
  });
};
