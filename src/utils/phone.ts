/**
 * Formats phone numbers consistently across the site
 */

// Raw phone number for tel: links
export const RAW_PHONE = '+12185035110';

// Formatted display version
export const FORMATTED_PHONE = '(218) 503-5110';

/**
 * Gets phone number in tel: link format
 */
export const getTelLink = () => `tel:${RAW_PHONE}`;

/**
 * Gets formatted display version of phone number
 */
export const getDisplayPhone = () => FORMATTED_PHONE;