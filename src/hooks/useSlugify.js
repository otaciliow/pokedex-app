// Slugify replaces every special and upper-cased characters to make sure that only allowed lower-cased characters will be used

export function useSlugify() {
    const accentsMap = new Map([
      // allowed characters
        ["-", "\\s|\\.|_"],
        ["a", "á|à|ã|â|ä"],
        ["e", "é|è|ê|ë"],
        ["i", "í|ì|î|ï"],
        ["o", "ó|ò|ô|õ|ö"],
        ["u", "ú|ù|û|ü"],
        ["c", "ç"],
        ["n", "ñ"]
      ]);
      
    const reducer = (acc, [key]) => acc.replace(new RegExp(accentsMap.get(key), "gi"), key);
      
    const slugify = (text) => [...accentsMap].reduce(reducer, text.toLowerCase());

    return slugify;
}