import axios from "axios";
import { TagsState } from "../../store/ducks/tags/contracts/state";

export const TagsAPI = {
  async fetchTags(): Promise<TagsState["items"]> {
    const res = await axios.get("/tags");
    console.log("RES: " + res);
    return res.data;
  },
};
