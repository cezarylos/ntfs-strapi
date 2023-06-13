'use strict';

/**
 * how-to-connect service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::how-to-connect.how-to-connect');
