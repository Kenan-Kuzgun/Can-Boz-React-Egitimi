import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID FLM7hvAoDNzijMp7IvF32Jq8fJe4v5WpqFJzKibCQ5k",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
