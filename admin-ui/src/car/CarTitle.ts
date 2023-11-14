import { Car as TCar } from "../api/car/Car";

export const CAR_TITLE_FIELD = "modelNo";

export const CarTitle = (record: TCar): string => {
  return record.modelNo?.toString() || String(record.id);
};
