export interface ProductItem {
    id: string,
    name: string,
    price: number,
    src: string,
    quantity: number,
    added: boolean,
}

const InitialState: ProductItem[] = [{
    id: '0',
    name: "Valour Blue",
    price: 120,
    quantity: 0,
    added: false,
    src:
    "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
},
{
    id: "1",
    name: "Jordan Mars 270",
    price: 140,
    quantity: 0,
    added: false,
    src:
    "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
},
{
    id: "2",
    name: "Air Jordan 11 Low",
    price: 160,
    quantity: 0,
    added: false,
    src:
    "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/9eb2cd70-f0d4-4ea6-94b2-ae7f2bb9580a/air-jordan-11-low-ie-black-cement-release-date.jpg"
},
{
    id: "3",
    name: "Light Bone",
    price: 100,
    quantity: 0,
    added: false,
    src:
    "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/8bd6fc84-764d-4d82-aac6-acce1d11766e/ispa-overreact-flyknit-light-bone-release-date.jpg"
},
{
    id: "4",
    name: "Crimson Volt",
    price: 80,
    added: false,
    quantity: 0,
    src:
    "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/1d40aec6-49ea-458a-8007-0799c99e5484/ispa-overreact-flyknit-crimson-volt-release-date.jpg"
},
{
    id: "5",
    name: "Smoke Grey",
    price: 200,
    quantity: 0,
    added: false,
    src:
    "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/8ff1b4d8-3458-49f3-9d7d-0647261aafe4/air-jordan-1-smoke-grey-release-date.jpg"
},
{
    id: "6",
    name: "Purple Grape",
    price: 160,
    quantity: 0,
    added: false,
    src:
    "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/c59c1a8b-c3a4-495e-aada-a871c8cce359/air-jordan-5-purple-grape-release-date.jpg"
},
{
    id: "7",
    name: "Nike Air Force 1",
    price: 170,
    quantity: 0,
    added: false,
    src:
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5b7f6c36-498f-49ca-80f0-f9cc062b8ed4/air-force-1-shadow-shoe-mN8Glx.jpg"
},
{
    id: "8",
    name: "Nike Air Zoom",
    price: 172,
    quantity: 0,
    added: false,
    src: 
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg"

}]
export { InitialState }