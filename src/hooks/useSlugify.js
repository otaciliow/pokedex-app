export function useSlugify() {
    const accentsMap = new Map([
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