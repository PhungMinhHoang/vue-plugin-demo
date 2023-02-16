import moment from "moment";
import type { OptionsTimeCountDown } from "@/utils/types";

/**
 * Cache string function
 * @param fn
 */
const cacheStringFunction = <T extends (str: string) => string>(fn: T): T => {
  const cache: Record<string, string> = Object.create(null);
  return ((str: string) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  }) as any;
};

/**
 * @private
 */
const camelizeRE = /-(\w)/g;

export const camelize = cacheStringFunction((str: string): string => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ""));
});

/**
 * Capitalize first letter of provided text
 * @param {String} text
 */
export const capitalize = cacheStringFunction((str: string) => str.charAt(0).toUpperCase() + str.slice(1));

/**
 * Pluralize word
 * @param word
 * @param count
 * @param suffix
 */
export const pluralize = (word: string, count = 1, suffix = "s"): string => {
  return count <= 1 ? word : `${word}${suffix}`;
};

/**
 * Truncate text if text length longer than a value
 * @param str
 * @param limit
 * @param text
 */
export const truncate = (str: string, limit: number, text = "..."): string => {
  if (str.length > limit) {
    return `${str.substring(0, limit)} ${text}`;
  }

  return str;
};

/**
 * Trim space and remove all double space or more inside
 * @param text
 */
export const trimSpace = (text: string): string => {
  return text.replace(/\s{2,}/g, " ").trim();
};

/**
 * Is valid email
 * @param email
 * @return {boolean}
 */
const re = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
export const isValidEmail = (email: string) => {
  if (!email.includes("@")) {
    return false;
  }

  const splitEmail = email.split("@");
  if (splitEmail[0].length > 64 || splitEmail[1].length > 255) {
    return false;
  }

  return re.test(email.toLowerCase());
};

// Replace string with `key: value` entries of the search object.
export const findAndReplace = (string: string, search: object) => {
  const regexp = new RegExp(
    Object.keys(search)
      .map((item) => item.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"))
      .join("|"),
    "g"
  );
  // @ts-ignore
  return string.replace(regexp, (match: string) => search[match]);
};

const phoneNumberRegex = /((09|03|07|08|05)+([0-9]{8})\b)/;
export const isValidPhoneNumber = (phoneNumber: string) => {
  return phoneNumberRegex.test(phoneNumber);
};

/**
 * @params:
 *   + time (string)
 *   + options: isTimeRemain(boolean), fullStrTime(boolean)
 * @return: string
 * */
export const getTimeCountDown = (time: number, options?: OptionsTimeCountDown) => {

  if (!time || time < 0) {
    return "0 giây";
  }

  const formatData = (n: number): string => ((n < 10 ? `0${n}` : n).toString());

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60) - hours * 60;
  const seconds = Math.floor(time - hours * 3600 - minutes * 60);

  if (options && options.isTimeRemain) {
    return moment
      .unix(time)
      .fromNow()
      .replace(/in|ago/, "")
      .replace(/an|a/, "1")
      .replace(/hours|hour/, "giờ")
      .replace(/minutes|minute/, "phút")
      .replace(/secounds|secound/, "giây")
      .replace(/days|day/, "ngày")
      .replace(/years|year/, "năm");
  }

  if (options && options.fullStrTime) {
    const strH = hours ? Number.parseInt(formatData(hours)) + " giờ " : "";
    const strM = minutes ? Number.parseInt(formatData(minutes)) + " phút " : "";
    const strS = Number.parseInt(formatData(seconds)) + " giây";
    return strH + strM + strS;
  }

  if (time < 60) {
    return `${Number.parseInt(formatData(seconds))} giây`;
  }

  return `${formatData(minutes)}:${formatData(seconds)}`;
};

export const existSpecialChar = (string: string) => {
  const specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
  for (let i = 0; i < specialChars.length; i++) {
    if (string.indexOf(specialChars[i]) > -1) {
      return true;
    }
  }
  return false;
};

export const existNumber = (string: string) => {
  return /[0-9]/.test(string);
};

export const removeNullByte = (str: string) => str.replace(/\0.*$/g, "");
