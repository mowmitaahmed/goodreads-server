const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: false
        },
        address: {
            type: String,
            required: false
        },
        phoneNo: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: false
        },
        district: {
            type: String,
            required: false
        },
        area: {
            type: String,
            required: false
        },
        shippingAddress: {
            type: String,
            required: false
        },
        gender: {
            type: String,
            required: false
        },
        birthdate: {
            type: Date,
            required: false
        },
        username: {
            type: String,
            required: false
        },
        occupation: {
            type: String,
            required: false
        },
        profileImg: {
            type: String
        },
        password: {
            type: String,
            required: false
        },
        isPhoneVerified: {
            type: Boolean,
            required: false
        },
        isEmailVerified: {
            type: Boolean,
            required: false
        },
        registrationType: {
            type: String,
            required: false
        },
        registrationAt: {
            type: Date,
            default: Date.now(),
            required: true,
        },
        hasAccess: {
            type: Boolean,
            required: false
        },
        carts: [{
            type: Schema.Types.ObjectId,
            ref: 'Cart'
        }],
        checkouts: [{
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }],
        prescriptionOrders: [{
            type: Schema.Types.ObjectId,
            ref: 'PrescriptionOrder'
        }],
        addresses: [{
            type: Schema.Types.ObjectId,
            ref: 'Address'
        }],
        wishlists: [{
            type: Schema.Types.ObjectId,
            ref: 'Wishlist'
        }],
        usedCoupons: [{
            type: Schema.Types.ObjectId,
            ref: 'Coupon'
        }],
    },
    {
        timestamps: true
    }
);
// hash the password
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
// checking if password is valid
userSchema.methods.validPassword = function(password) {
return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
