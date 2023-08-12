'use strict';

/**
 * encrypt-key service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::encrypt-key.encrypt-key');
