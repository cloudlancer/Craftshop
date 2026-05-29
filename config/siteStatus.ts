/**
 * Site Status Configuration
 * ========================
 * Controls the hosting lock / payment required mode.
 *
 * When `siteLocked` is true (or env var SITE_LOCKED=true),
 * all visitor-facing routes are redirected to a professional
 * "Hosting Limit Exceeded" notice page.
 *
 * HOW TO USE:
 * -----------
 * Option A: Set SITE_LOCKED=true in .env.local (recommended)
 * Option B: Change siteLocked below to true
 *
 * The environment variable takes precedence over this file.
 */

export const siteStatusConfig = {
  /**
   * Master toggle for site lock.
   * - true  = site is locked, visitors see the hosting notice
   * - false = site operates normally
   *
   * NOTE: The env var SITE_LOCKED takes precedence over this value.
   *       Set SITE_LOCKED=true in .env.local or your hosting platform.
   */
  siteLocked: true,

  /**
   * URL for the "Renew Hosting" button.
   * Point this to your payment/renewal page.
   */
  renewUrl: "https://example.com/payment",

  /**
   * Admin contact email for the "Contact Administrator" button.
   */
  contactEmail: "admin@example.com",

  /**
   * Optional custom message to display on the lock page.
   * Leave empty to use the default message.
   */
  customMessage: "",
};
