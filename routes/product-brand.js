// Main Module Required..
const express = require('express');

// Created Require Files..
const controller = require('../controller/product-brand');
const router = express.Router();

/**
 * /brand
 * http://localhost:3000/api/brand
 */


router.post('/add-brand', controller.addBrand);
router.post('/add-multiple-brand', controller.insertManyBrand);
router.get('/get-all-brands', controller.getAllBrands);
router.get('/get-brand-by-brand-id/:brandId', controller.getBrandByBrandId);
router.put('/edit-brand-by-brand', controller.editBrandData);
router.post('/get-brands-by-search', controller.getParentCategoriesBySearch);
router.delete('/delete-brand-by-id/:brandId', controller.deleteBrandByBrandId);

// Export All router..
module.exports = router;
