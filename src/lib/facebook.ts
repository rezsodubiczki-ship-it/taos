const DEFAULT_FACEBOOK_URL = "https://www.facebook.com/brad.schofield.117924";

export function getFacebookPageUrl() {
  return import.meta.env.PUBLIC_FACEBOOK_PAGE_URL?.trim() || DEFAULT_FACEBOOK_URL;
}
