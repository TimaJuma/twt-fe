import axios from "axios";
import { TweetsState } from "../../store/ducks/tweets/contracts/state";

export const TweetsAPI = {
  async fetchTweets(): Promise<TweetsState["items"]> {
    const { data } = await axios.get("/tweets");
    return data;
  },
};
