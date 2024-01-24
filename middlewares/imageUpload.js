var multer = require("multer");
const authConfig = require("../configs/auth.config");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
cloudinary.config({ cloud_name: authConfig.cloud_name, api_key: authConfig.api_key, api_secret: authConfig.api_secret, });
const storage = new CloudinaryStorage({ cloudinary: cloudinary, params: { folder: "ecommerce/product", allowed_formats: ["jpg", "avif", "webp", "jpeg", "png", "PNG", "xlsx", "xls", "pdf", "PDF"], }, });
const upload = multer({ storage: storage });
const productUpload = upload.fields([{ name: 'images', maxCount: 20 }, { name: 'image', maxCount: 1 }]);
const storage1 = new CloudinaryStorage({ cloudinary: cloudinary, params: { folder: "ecommerce/banner", allowed_formats: ["jpg", "avif", "webp", "jpeg", "png", "PNG", "xlsx", "xls", "pdf", "PDF"], }, });
const bannerUpload = multer({ storage: storage1 });
const storage2 = new CloudinaryStorage({ cloudinary: cloudinary, params: { folder: "ecommerce/blog", allowed_formats: ["jpg", "avif", "webp", "jpeg", "png", "PNG", "xlsx", "xls", "pdf", "PDF"], }, });
const blogUpload = multer({ storage: storage2 });
const storage3 = new CloudinaryStorage({ cloudinary: cloudinary, params: { folder: "ecommerce/about", allowed_formats: ["jpg", "avif", "webp", "jpeg", "png", "PNG", "xlsx", "xls", "pdf", "PDF"], }, });
const upload3 = multer({ storage: storage3 });
const aboutusUpload = upload3.fields([{ name: 'aboutusImages', maxCount: 10 }, { name: 'aboutusImage', maxCount: 1 }]);
const storage4 = new CloudinaryStorage({ cloudinary: cloudinary, params: { folder: "ecommerce/category", allowed_formats: ["jpg", "avif", "webp", "jpeg", "png", "PNG", "xlsx", "xls", "pdf", "PDF"], }, });
const categoryUpload = multer({ storage: storage4 });
const storage5 = new CloudinaryStorage({ cloudinary: cloudinary, params: { folder: "ecommerce/subCategory", allowed_formats: ["jpg", "avif", "webp", "jpeg", "png", "PNG", "xlsx", "xls", "pdf", "PDF"], }, });
const subCategoryUpload = multer({ storage: storage5 });
const storage6 = new CloudinaryStorage({ cloudinary: cloudinary, params: { folder: "ecommerce/service", allowed_formats: ["jpg", "avif", "webp", "jpeg", "png", "PNG", "xlsx", "xls", "pdf", "PDF"], }, });
const serviceUpload = multer({ storage: storage6 });
const storage7 = new CloudinaryStorage({ cloudinary: cloudinary, params: { folder: "ecommerce/userProfile", allowed_formats: ["jpg", "avif", "webp", "jpeg", "png", "PNG", "xlsx", "xls", "pdf", "PDF"], }, });
const userProfileUpload = multer({ storage: storage7 });
const storage8 = new CloudinaryStorage({ cloudinary: cloudinary, params: { folder: "ecommerce/Brand", allowed_formats: ["jpg", "avif", "webp", "jpeg", "png", "PNG", "xlsx", "xls", "pdf", "PDF"], }, });
const BrandUpload = multer({ storage: storage8 });
const storage9 = new CloudinaryStorage({ cloudinary: cloudinary, params: { folder: "ecommerce/E4u", allowed_formats: ["jpg", "avif", "webp", "jpeg", "png", "PNG", "xlsx", "xls", "pdf", "PDF"], }, });
const E4UUpload = multer({ storage: storage9 });
const storage10 = new CloudinaryStorage({ cloudinary: cloudinary, params: { folder: "ecommerce/offer", allowed_formats: ["jpg", "avif", "webp", "jpeg", "png", "PNG", "xlsx", "xls", "pdf", "PDF"], }, });
const offerUpload = multer({ storage: storage10 });
const storage11 = multer({ storage: storage })
var cpUpload = storage11.fields([{ name: 'passPort', maxCount: 1 },
{ name: 'socialSecurityCard', maxCount: 1 },
{ name: 'dL', maxCount: 1 },
{ name: 'voterIdentityCard', maxCount: 1 },
{ name: 'addressProof', maxCount: 1 }]);


var kpUpload = storage11.fields([
        { name: 'certIncorRegi', maxCount: 1 },
        { name: 'excerptStateCompanyRegi', maxCount: 1 },
        { name: 'certIncorIncumbency', maxCount: 1 },
        { name: 'CertGoodStanding', maxCount: 1 },
        { name: 'memorandum', maxCount: 1 },
        { name: 'uboShareholderRegi', maxCount: 1 },
        { name: 'uboCertIncorIncumbency', maxCount: 1 },
        { name: 'uboStatOfInformation', maxCount: 1 },
        { name: 'uboExcerptStateCompanyRegi', maxCount: 1 },
        { name: 'uboMemorandum', maxCount: 1 },
        { name: 'uboTrustAgreement', maxCount: 1 },
        { name: 'evidence', maxCount: 1 },
]);
module.exports = { productUpload, bannerUpload, upload, blogUpload, cpUpload, kpUpload, aboutusUpload, subCategoryUpload, categoryUpload, serviceUpload, E4UUpload, userProfileUpload, BrandUpload, offerUpload };
