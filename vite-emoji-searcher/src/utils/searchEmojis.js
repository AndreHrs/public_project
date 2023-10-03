export const searchEmojis = ({
  emojisData,
  searchText = "",
  maxResults = 20,
}) => {
  const searchEmojisBySearchText = emojisData.filter((emoji) => {
    if (emoji.unicodeName.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }

    if (emoji.unicodeName.includes(searchText.toLowerCase())) {
      return true;
    }

    return false;
  });
  const result = searchEmojisBySearchText.splice(0, maxResults);
  return result;
};
