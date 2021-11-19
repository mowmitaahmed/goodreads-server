const express = require('express');

// Created Require Files..
const controller = require('../controller/product');
// const inputValidator = require('../validation/product');
const checkAuth = require('../middileware/check-user-auth');
// const checkAdminAuth = require('../middileware/check-admin-auth');
// const checkIpWhitelist = require('../middileware/check-ip-whitelist');
// Get Express Router Function..
const router = express.Router();

/**
 * /api/product
 * http://localhost:3000/api/product
 */

router.post('/add-single-product', controller.addSingleProduct);
router.post('/add-multiple-products', controller.insertManyProduct);
router.post('/get-all-products', controller.getAllProducts);
router.get('/get-single-product-by-slug/:slug', controller.getSingleProductBySlug);
router.get('/get-single-product-by-id/:id', controller.getSingleProductById);
router.post('/get-specific-products-by-ids', controller.getSpecificProductsByIds);

// Modify
router.put('/edit-product-by-id', controller.updateProductById);
router.post('/update-multiple-product-by-id', controller.updateMultipleProductById);
router.delete('/delete-product-by-id/:id', controller.deleteProductById);
// // Filter
router.post('/product-filter-query', controller.productFilterByQuery);
// // Pagination
// router.get('/products-by-limit', controller.getProductsByLimit);
// // Multiple Ids
// router.post('/get-specific-products-by-id', controller.getSpecificProductsByIds);
// // Range
// router.post('/get-max-min-price', controller.getMaxMinPrice);
// router.post('/product-filter-by-menu-navigate-min-max', controller.productFilterByMinMax);
// // Search
router.post('/get-products-by-search', controller.getProductsBySearch);
// // Filter
// router.post('/get-product-by-filter/', controller.filterByCatSubCatBrandFilters);
// // Ultimate Query
// router.post('/get-products-by-ultimate-query', controller.ultimateQuery)


// Export All router..
module.exports = router;
