const mongoose = require('mongoose');


const merchantSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: 'name is required',
        trim:true
    },
    email_id:{
        type: String,
        required: 'email is required',
        trim:true
    },
    password:{
        type: String,
        required: 'password is required',
        trim:true
    },
    p_in_encrypt:{
        type: String,
        required: 'password enc is required',
        trim:true
    },
    mid: {
        type: String,
        trim:true
    },
    mid_alias: {
        type: String,
        trim:true
    },
    api_key: {
        type: String,
        trim:true
    },
    paay_key : {
        type: String,
        trim:true
    },
    paay_secret : {
        type: String,
        trim:true
    },
    business : {
        type: String,
        trim:true
    },
    website : {
        type: String,
        trim:true
    },
    address : {
        type: String,
        trim:true
    },
    city : {
        type: String,
        trim:true
    },
    country : {
        type: String,
        trim:true
    },
    state : {
        type: String,
        trim:true
    },
    zip:{
        type: Number,
        trim:true,
    },
    bank_name:{
        type: String,
        trim:true,
    },
    account_no:{
        type: Number,
        trim:true,
    },
    swift:{
        type: String,
        trim:true,
    },
    mdr:{
        type: Number,
        trim:true,
        default:0
    },
    chargeback:{
        type: Number,
        trim:true,
        default:0
    },
    rolling:{
        type: Number,
        trim:true,
        default:0
    },
    transaction:{
        type: Number,
        trim:true,
        default:0
    },
    verification:{
        type: Number,
        trim:true,
        default:0
    },
    represenment:{
        type: Number,
        trim:true,
        default:0
    },
    fraud_alert:{
        type: Number,
        trim:true,
        default:0
    },
    role:{
        type: Number,
        trim:true,
        default:0
    },
    campaign_id:{
        type: Number,
        trim:true,
        default:0
    },
    status:{
        type: Number,
        trim:true,
        default:0
    },
    account_status:{
        type: String,
        trim:true,
    },
    merchant_qc:{
        type: Number,
        trim:true,
        default:0
    },
    is_vt_show:{
        type: Number,
        trim:true,
        default:1
    },
    is_echeck_show:{
        type: Number,
        trim:true,
        default:0
    },
    is_paymentlink_show:{
        type: Number,
        trim:true,
        default:1
    },
    is_cc_api_allow:{
        type: Number,
        trim:true,
        default:1
    },
    is_echeck_api_allow:{
        type: Number,
        trim:true,
        default:1
    },
    merchant_product_type:{
        type: Number,
        trim:true,
        default:0
    },
    transaction_noti:{
        type: Number,
        trim:true,
        default:0
    },
    refund_noti:{
        type: Number,
        trim:true,
        default:0
    },
    void_noti:{
        type: Number,
        trim:true,
        default:0
    },
    login_time:{
        type: String,
        trim:true,
    },
    login_ip:{
        type: String,
        trim:true,
    },
    merchantlogo:{
        type: String,
        trim:true,
    },
    main_merchant:{
        type: Number,
        trim:true,
        default:0
    },
    merchant_allow:{
        type: Number,
        trim:true,
        default:0
    },
    perant_merchant:{
        type: Number,
        trim:true,
        default:0
    },
    recurring_allow:{
        type: Number,
        trim:true,
        default:0
    },
    ip_status:{
        type: Number,
        trim:true,
        default:0
    },
    ip_address:{
        type: String,
        trim:true,
    },
},{
    timestamps: true,
})

module.exports = mongoose.model('merchant_qc', merchantSchema);