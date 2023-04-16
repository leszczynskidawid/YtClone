export const endpoints = {
  GET_VIDEO_BY_ID: `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=wr3VmbZdVA4`,
  GET_VIDEO_25_RESULTS_WITH_WORD_KEY_PERFECT_ASS:
    "playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25",

  GET_MOST_POPULAR_VIDEO_PL:
    "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=PL&maxResults=10&maxResults=5",

  GET_CATEGORIES_FILM: {
    ALL: "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=PL&maxResults=10&maxResults=5",
    MUSIC:
      "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=10&maxResults=17",
    GAMES:
      "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=20&maxResults=17",
    SPORTS:
      "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=17&maxResults=17",
    ANIMALS:
      "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=15&maxResults=17",
    SHORTS:
      "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=25&maxResults=17",
    TRAVELS:
      "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=28&maxResults=17",
    PEOPLE:
      "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=22&maxResults=17",
  },
};
