export const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export function WORD_GET(word) {
  return {
    url: API_URL + word,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer' + word,
      },
    },
  };
}
