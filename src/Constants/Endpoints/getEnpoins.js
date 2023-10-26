export const endpoints = {
  GET_VIDEO_BY_ID: `/videos?part=snippet&id=`,
  GET_COMMENTS_BY_FILM: "/commentThreads?part=snippet&videoId=",
  FET_VIDO_BY_CHANNEL_ID:
    "channels?part=snippet%2CcontentDetails%2Cstatistics&id=",

  GET_MOST_POPULAR_VIDEO_PL:
    "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=PL&maxResults=4",

  GET_CATEGORIES_FILM: {
    ALL: "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=PL&maxResults=5",
    MUSIC:
      "search?part=snippet&type=video%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=10&maxResults=10",
    GAMES:
      "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=20&maxResults=10",
    SPORTS:
      "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=17&maxResults=10",
    ANIMALS:
      "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=15&maxResults=10",
    SHORTS:
      "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=25&maxResults=10",
    TRAVELS:
      "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=28&maxResults=10",
    PEOPLE:
      "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=22&maxResults=10",
  },

  // `channels?part=snippet&id=${channelId}
  GET_VIDEO_BY_ID_CHANNEL:
    "channels?part=snippet%2CcontentDetails%2Cstatistics",
};
// search?part=snippet&type=video%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=10&maxResults=17
