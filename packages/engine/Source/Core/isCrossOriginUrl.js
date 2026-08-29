import defined from "./defined.js";

/*global CESIUM_BASE_URL*/

let a;

function isCrossOriginUrlInWorker(url) {
  let baseHref;
  if (typeof CESIUM_BASE_URL !== "undefined") {
    baseHref = CESIUM_BASE_URL;
  } else if (
    typeof self !== "undefined" &&
    defined(self.location) &&
    defined(self.location.href)
  ) {
    baseHref = self.location.href;
  } else {
    return false;
  }

  try {
    const target = new URL(url, baseHref);
    const base = new URL(baseHref);
    return target.origin !== base.origin;
  } catch {
    return false;
  }
}

/**
 * Given a URL, determine whether that URL is considered cross-origin to the current page.
 *
 * @private
 */
function isCrossOriginUrl(url) {
  if (typeof document === "undefined") {
    return isCrossOriginUrlInWorker(url);
  }

  if (!defined(a)) {
    a = document.createElement("a");
  }

  // copy window location into the anchor to get consistent results
  // when the port is default for the protocol (e.g. 80 for HTTP)
  a.href = window.location.href;

  // host includes both hostname and port if the port is not standard
  const host = a.host;
  const protocol = a.protocol;

  a.href = url;
  // IE only absolutizes href on get, not set
  // eslint-disable-next-line no-self-assign
  a.href = a.href;

  return protocol !== a.protocol || host !== a.host;
}
export default isCrossOriginUrl;
