// Data biaya admin Shopee berdasarkan kategori
// Sumber: https://seller.shopee.co.id/edu/article/15965

export interface CategoryData {
    name: string;
    adminFee: number; // dalam persen
    freeShippingFee?: number; // dalam persen, untuk program gratis ongkir XTRA
    freeShippingMaxFee?: number; // maksimum biaya dalam rupiah
}

export interface CategoryGroup {
    group: string;
    categories: CategoryData[];
}

// Biaya admin default untuk penjual Shopee Mall
export const SHOPEE_MALL_BASE_FEE = 3.0; // Biaya pembayaran 3%

// Biaya layanan Promo XTRA
export const PROMO_XTRA_FEE = 4.5; // 4.5%
export const PROMO_XTRA_MAX = 60000; // Maks 60.000 per kuantitas

// Biaya Shopee Live XTRA
export const SHOPEE_LIVE_FEE = 3.0; // 3%
export const SHOPEE_LIVE_MAX = 20000; // Maks 20.000 per kuantitas

// Biaya PO > 30 hari
export const PO_FEE = 3.0; // 3%

// Biaya Asuransi Pengiriman
export const SHIPPING_INSURANCE_FEE = 0.5; // 0.5%

// Biaya Hemat Biaya Kirim
export const HEMAT_BIAYA_KIRIM_FEE = 350; // Rp350 flat

// Biaya Proses Pesanan
export const ORDER_PROCESSING_FEE = 1250; // Rp1.250 flat

export const categoryGroups: CategoryGroup[] = [
    {
        group: "Fashion",
        categories: [
            {
                name: "Aksesoris Fashion (Umum)",
                adminFee: 9.0,
                freeShippingFee: 6.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Aksesoris Fashion - Masker",
                adminFee: 8.25,
                freeShippingFee: 5.5,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Aksesoris Fashion - Logam Mulia & Perhiasan Berharga",
                adminFee: 4.25,
                freeShippingFee: 1.5,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Fashion Bayi & Anak (Umum)",
                adminFee: 9.0,
                freeShippingFee: 4.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Fashion Bayi & Anak - Perhiasan",
                adminFee: 4.25,
                freeShippingFee: 1.5,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Fashion Muslim - Baju Olahraga/Renang Muslim",
                adminFee: 10.0,
                freeShippingFee: 6.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Fashion Muslim (Umum)",
                adminFee: 8.25,
                freeShippingFee: 5.5,
                freeShippingMaxFee: 40000,
            },
            { name: "Jam Tangan", adminFee: 9.0, freeShippingFee: 6.0, freeShippingMaxFee: 40000 },
            {
                name: "Koper & Tas Travel - Tas Duffel",
                adminFee: 10.0,
                freeShippingFee: 6.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Koper & Tas Travel (Umum)",
                adminFee: 9.0,
                freeShippingFee: 5.5,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Pakaian Pria - Kaos Kaki",
                adminFee: 10.0,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Pakaian Pria (Umum)",
                adminFee: 8.25,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Pakaian Wanita - Kaos Kaki",
                adminFee: 10.0,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Pakaian Wanita - Stocking",
                adminFee: 9.0,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Pakaian Wanita (Umum)",
                adminFee: 8.25,
                freeShippingFee: 5.5,
                freeShippingMaxFee: 40000,
            },
            { name: "Sepatu Pria", adminFee: 9.0, freeShippingFee: 5.0, freeShippingMaxFee: 40000 },
            {
                name: "Sepatu Wanita",
                adminFee: 9.0,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            { name: "Tas Pria", adminFee: 9.0, freeShippingFee: 5.5, freeShippingMaxFee: 40000 },
            { name: "Tas Wanita", adminFee: 9.0, freeShippingFee: 5.5, freeShippingMaxFee: 40000 },
        ],
    },
    {
        group: "Elektronik",
        categories: [
            {
                name: "Audio - Earphone, Headphone & Headset",
                adminFee: 6.75,
                freeShippingFee: 4.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Audio (Umum)",
                adminFee: 9.0,
                freeShippingFee: 4.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Elektronik - Kelistrikan",
                adminFee: 10.0,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Elektronik - Baterai",
                adminFee: 9.5,
                freeShippingFee: 4.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Elektronik - Peralatan Listrik Besar",
                adminFee: 6.5,
                freeShippingFee: 4.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Elektronik - Peralatan Listrik Kecil",
                adminFee: 6.5,
                freeShippingFee: 4.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Elektronik - Perangkat Dapur",
                adminFee: 6.5,
                freeShippingFee: 4.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Elektronik - TV & Aksesoris",
                adminFee: 6.5,
                freeShippingFee: 4.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Elektronik - Proyektor",
                adminFee: 5.25,
                freeShippingFee: 2.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Gaming & Konsol",
                adminFee: 9.0,
                freeShippingFee: 4.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Handphone & Aksesoris - Casing & Aksesoris",
                adminFee: 10.0,
                freeShippingFee: 4.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Handphone & Aksesoris - Powerbank & Baterai",
                adminFee: 9.5,
                freeShippingFee: 4.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Handphone & Tablet",
                adminFee: 5.25,
                freeShippingFee: 0.5,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Kamera & Drone",
                adminFee: 6.5,
                freeShippingFee: 4.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Komputer - Desktop, Laptop & Monitor",
                adminFee: 5.25,
                freeShippingFee: 0.5,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Komputer - Komponen",
                adminFee: 5.25,
                freeShippingFee: 1.5,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Komputer - Aksesoris & Peripheral",
                adminFee: 6.75,
                freeShippingFee: 4.0,
                freeShippingMaxFee: 40000,
            },
        ],
    },
    {
        group: "FMCG (Makanan, Kesehatan, Kecantikan)",
        categories: [
            {
                name: "Ibu & Bayi - Mainan",
                adminFee: 10.0,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Ibu & Bayi - Keamanan & Kesehatan",
                adminFee: 9.5,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Ibu & Bayi - Popok & Pispot",
                adminFee: 9.0,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Ibu & Bayi (Umum)",
                adminFee: 8.25,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Ibu & Bayi - Susu Formula & Makanan Bayi",
                adminFee: 6.75,
                freeShippingFee: 4.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Ibu & Bayi - Vitamin Bayi",
                adminFee: 6.5,
                freeShippingFee: 4.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Kesehatan - Hand Sanitizer",
                adminFee: 10.0,
                freeShippingFee: 5.5,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Kesehatan - Obat & Alat Kesehatan",
                adminFee: 9.5,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Kesehatan - Perawatan Diri",
                adminFee: 9.0,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Makanan & Minuman - Makanan Ringan",
                adminFee: 10.0,
                freeShippingFee: 5.5,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Makanan & Minuman - Permen & Cokelat",
                adminFee: 9.5,
                freeShippingFee: 5.5,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Makanan & Minuman - Makanan Instan",
                adminFee: 9.0,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Makanan & Minuman - Susu & Olahan",
                adminFee: 8.25,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Makanan & Minuman - Bahan Pokok & Baking",
                adminFee: 6.75,
                freeShippingFee: 4.5,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Makanan & Minuman - Telur",
                adminFee: 6.5,
                freeShippingFee: 4.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Perawatan & Kecantikan - Alat Kecantikan",
                adminFee: 8.25,
                freeShippingFee: 5.5,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Perawatan & Kecantikan - Kosmetik",
                adminFee: 8.25,
                freeShippingFee: 5.5,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Perawatan & Kecantikan - Parfum",
                adminFee: 8.25,
                freeShippingFee: 5.5,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Perawatan & Kecantikan - Perawatan Rambut & Tubuh",
                adminFee: 8.25,
                freeShippingFee: 5.5,
                freeShippingMaxFee: 40000,
            },
        ],
    },
    {
        group: "Lifestyle",
        categories: [
            {
                name: "Buku & Alat Tulis - Perlengkapan Menggambar",
                adminFee: 10.0,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Buku & Alat Tulis - Bubble Wrap & Kemasan",
                adminFee: 9.5,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Buku & Alat Tulis (Umum)",
                adminFee: 9.0,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Buku & Majalah",
                adminFee: 9.0,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            { name: "Buku Bayi", adminFee: 8.25, freeShippingFee: 4.5, freeShippingMaxFee: 40000 },
            {
                name: "Hewan Peliharaan",
                adminFee: 9.5,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Hobi & Koleksi",
                adminFee: 9.5,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Souvenir & Hadiah",
                adminFee: 9.0,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Otomotif - Mobil",
                adminFee: 2.5,
                freeShippingFee: 2.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Otomotif - Suku Cadang & Oli",
                adminFee: 9.0,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Otomotif - Aksesoris",
                adminFee: 8.25,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Olahraga & Outdoor (Umum)",
                adminFee: 10.0,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Olahraga & Outdoor - Jas Hujan",
                adminFee: 8.25,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Perlengkapan Rumah",
                adminFee: 10.0,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            {
                name: "Perlengkapan Rumah - Dapur",
                adminFee: 9.0,
                freeShippingFee: 5.0,
                freeShippingMaxFee: 40000,
            },
            { name: "Voucher", adminFee: 1.0, freeShippingFee: 0, freeShippingMaxFee: 0 },
        ],
    },
];

// Kategori yang dikecualikan dari Shopee Live XTRA
export const shopeeeLiveExcludedCategories = [
    "Voucher",
    "Aksesoris Fashion - Logam Mulia & Perhiasan Berharga",
    "Fashion Bayi & Anak - Perhiasan",
];

export type SellerType = "non_star" | "star" | "star_plus" | "mall";

export const sellerTypes: { value: SellerType; label: string; description: string }[] = [
    { value: "non_star", label: "Non-Star", description: "Penjual baru atau pesanan < 50" },
    { value: "star", label: "Star", description: "Penjual dengan performa baik" },
    { value: "star_plus", label: "Star+", description: "Penjual dengan performa sangat baik" },
    { value: "mall", label: "Shopee Mall", description: "Brand resmi & toko official" },
];
