import { forOwn } from "lodash";
import cloneDeep from "lodash.clonedeep";

export const mergeClasses = (classes, activeNames = []) => {
  const styles = (classes.default && cloneDeep(classes.default)) || {};
  activeNames.map(name => {
    const toMerge = classes[name];
    if (toMerge) {
      forOwn(toMerge, (value, key) => {
        if (!styles[key]) {
          styles[key] = {};
        }

        styles[key] = { ...styles[key], ...toMerge[key] };
      });
    }

    return name;
  });
  return styles;
};

export default mergeClasses;
