import { TagsAPI } from "../../../services/api/tagsApi";

export function* fetchTagsRequest() {
  try {
    const tags = yield call(TagsAPI.fetchTags);
  } catch (e) {}
}
