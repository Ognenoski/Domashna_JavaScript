export class StringUtils {

    constructor() {
        throw new Error("Cannot create instance");
    }

    static capitalize(str) {
        return str.charAt(0).toUpperCase() +
               str.slice(1).toLowerCase();
    }

    static reverse(str) {
        return str.split("").reverse().join("");
    }

    static wordCount(str) {
        return str.trim().split(" ").length;
    }

    static truncate(str, maxLength) {
        if (str.length > maxLength) {
            return str.slice(0, maxLength) + "...";
        }

        return str;
    }
}