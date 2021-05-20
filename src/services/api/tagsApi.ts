import axios from "axios";
import { TagsState } from "../../store/ducks/tags/contracts/state";

export const TagsAPI = {
  async fetchTags(): Promise<TagsState> {
    const res = await axios.get("/tags");
    console.log("RES: " + res.data);
    return res.data as TagsState;
  },
};
