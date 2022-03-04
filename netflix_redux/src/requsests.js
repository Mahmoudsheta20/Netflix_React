const api_key = "011a19f7aef4b91e754cc83d49c0bcd9";
const requests = {
    fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchTrending_tv: `/trending/tv/week?api_key=${api_key}&language=en-US`,
    fetchTrending_movies: `/trending/movie/week?api_key=${api_key}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchneflix: `/discover/tv?api_key=${api_key}&with_networks=213`,
    fetch_action: `/discover/movie?api_key=${api_key}&with_genres=28`,
    fetch_comdy: `/discover/movie?api_key=${api_key}&with_genres=35`,
    fetch_horror: `/discover/movie?api_key=${api_key}&with_genres=27`,
    fetch_romansy: `/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetch_documantry: `/discover/movie?api_key=${api_key}&with_genres=99`,
    fetch_tv: `/tv/top_rated?api_key=${api_key}&language=en-US`,
    fetch_flix: `/watch/netflix/movie?api_key=${api_key}&language=en-US`,



}
export default requests