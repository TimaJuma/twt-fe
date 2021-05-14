import axios from "axios";
import { TagsState } from "../../store/ducks/tags/contracts/state";

export const TagsAPI = {
  async fetchTags(): Promise<TagsState["items"]> {
    const { data } = await axios.get("/tags");
    return data;
  },
};
