import type { Model } from "../types";

declare module "../data/models.json" {
  const value: Model[];
  export default value;
}