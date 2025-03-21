const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete');

const sizesSchema = new mongoose.Schema({
    size: { type: String },
    quantity: { type: Number, default: 1 },
    // price: { type: Number },
    isSold: { type: Boolean, default: false },
});

const SanPham_Schema = new mongoose.Schema(
    {
        TenSP: { type: String, required: false },
        GiaBan: { type: Number, required: false },
        GiamGiaSP: { type: Number, default: "0" },
        urlYoutube: { type: String },
        urlDriverVideo: { type: String, default: "" },
        MoTa: { type: String, default: "Not thing" },
        Note: { type: String, default: "Vui lòng liên hệ admin để cung cấp lại!" },
        SoLuongBan: { type: Number, required: false, default: "1" },
        ImageSlider: [{ type: String }],    
        Image: { type: String, required: false },     
        IdLoaiSP: {ref: "LoaiSP", type: mongoose.SchemaTypes.ObjectId},
        sizes: [sizesSchema],
        SoLuongTon: { type: Number, required: false, default: 1 },  
        isActive: { type: Boolean, default: true},     
    },
    { 
        timestamps: true,   // createAt, updateAt
    },
);

// Override all methods
SanPham_Schema.plugin(mongoose_delete, { overrideMethods: 'all' });

const SanPham = mongoose.model('SanPham', SanPham_Schema);

module.exports = SanPham;