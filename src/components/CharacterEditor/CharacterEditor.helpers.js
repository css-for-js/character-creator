import {
  numBodies,
  numHeads,
  numFaces,
  numAccessories,
  skinColors,
  clothesColors,
} from '../../constants';
import { zeroPadNumber, range } from '../../utils';

export const bodyOptions = range(numBodies).map((index) => {
  return {
    id: index,
    label: `Body ${index + 1}`,
    children: zeroPadNumber(index + 1),
  };
});
export const headOptions = range(numHeads).map((index) => {
  return {
    id: index,
    label: `Head ${index + 1}`,
    children: zeroPadNumber(index + 1),
  };
});
export const faceOptions = range(numFaces).map((index) => {
  return {
    id: index,
    label: `Face ${index + 1}`,
    children: zeroPadNumber(index + 1),
  };
});
export const accessoryOptions = range(numAccessories).map((index) => {
  return {
    id: index,
    label: `Accessory ${index + 1}`,
    children: zeroPadNumber(index + 1),
  };
});
export const skinColorOptions = skinColors.map(({ label, color }) => {
  return {
    id: color,
    label,
    color,
    children: null,
  };
});
export const clothesColorOptions = clothesColors.map(
  ({ label, color }) => {
    return {
      id: color,
      label,
      color,
      children: null,
    };
  }
);
