'use strict';

/**
 * encrypt-key router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::encrypt-key.encrypt-key');
