import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  air_max_iii,
  air_max_plus,
  air_max_utility,
  air_max_tn,
  thumbnailShoe1,
  thumbnailShoe2,
  air_max_tn2,
  nike_97_thumnails_1,
  nike_97_thumnails_2,
  nike_97_thumnails_3,
  nike_97_thumnails_4,
  nike_97_thumnails_5,
  nike_97_thumnails_6,
  air_max_97_mainImg_6,
  air_max_drift,
  air_max_luxe,
  thumbnailShoe3,
  air_max_97_mainImg_1,
  air_max_97_mainImg_2,
  air_max_97_mainImg_3,
  air_max_97_mainImg_4,
  air_max_97_mainImg_5,
  mercurial_mainImg_01,
  mercurial_mainImg_02,
  mercurial_mainImg_03,
  mercurial_mainImg_04,
  mercurial_mainImg_05,
  mercurial,
  mercurial_thumbnail_01,
  mercurial_thumbnail_02,
  mercurial_thumbnail_03,
  mercurial_thumbnail_04,
  mercurial_thumbnail_05,
  mercurial_thumbnail_06,
} from "../assets/images";

export const navLinks = [
  { value: "/", label: "Home" },
  { value: "shop", label: "Shop" },
  { value: "cart", label: "Cart" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const SIZE_LABEL = "SIZE";
export const COLOR_LABEL = "COLOR";
export const PRICE_LABEL = "PRICE";
export const FILTER_LABEL = "FILTERS";
export const products = [
  {
    id: 1,
    imgURL: air_max_97_mainImg_1,
    images: [
      {
        id: "qwert",
        name: air_max_97_mainImg_1,
        thumbnail: nike_97_thumnails_1,
      },
      {
        id: "qwe",
        name: air_max_97_mainImg_2,
        thumbnail: nike_97_thumnails_2,
      },
      {
        id: "qw",
        name: air_max_97_mainImg_3,
        thumbnail: nike_97_thumnails_4,
      },
      {
        id: "q",
        name: air_max_97_mainImg_4,
        thumbnail: nike_97_thumnails_5,
      },
      {
        id: "q1",
        name: air_max_97_mainImg_5,
        thumbnail: nike_97_thumnails_6,
      },
      {
        id: "123456",
        name: air_max_97_mainImg_6,
        thumbnail: nike_97_thumnails_3,
      },
    ],
    rating: 4.7,
    name: "Nike Air Max 97 Black/White",
    price: 100,
    description:
      "With its iconic full-length Nike Air cushioning for ultimate comfort, it combines bold colors and sharp details for a standout look. Perfect for those who want both style and comfort on the go.",
    color: "Black",
    sizes: [
      { value: 39 },
      { value: 40 },
      { value: 41 },
      { value: 42 },
      { value: 43 },
      { value: 45 },
      { value: 47 },
    ],
  },
  {
    id: 2,
    imgURL: air_max_plus,
    name: "Nike Air Max Plus Mercurial ",
    price: 120,
    color: "Red",
    description:
      "With its iconic full-length Nike Air cushioning for ultimate comfort, it combines bold colors and sharp details for a standout look. Perfect for those who want both style and comfort on the go.",
    images: [
      {
        id: "qwert",
        name: mercurial,
        thumbnail: mercurial_thumbnail_01,
      },
      {
        id: "qwe",
        name: mercurial_mainImg_03,
        thumbnail: mercurial_thumbnail_02,
      },
      {
        id: "qw",
        name: mercurial_mainImg_02,
        thumbnail: mercurial_thumbnail_03,
      },
      {
        id: "q",
        name: mercurial_mainImg_01,
        thumbnail: mercurial_thumbnail_04,
      },
      {
        id: "q1",
        name: mercurial_mainImg_05,
        thumbnail: mercurial_thumbnail_05,
      },
      {
        id: "123456",
        name: mercurial_mainImg_04,
        thumbnail: mercurial_thumbnail_06,
      },
    ],
    sizes: [
      { value: 39 },
      { value: 40 },
      { value: 43 },
      { value: 45 },
      { value: 47 },
    ],
  },
  {
    id: 3,
    imgURL: air_max_iii,
    name: "Nike Air Max Plus lll",
    price: 220,
    color: "Black",
    description:
      "With its iconic full-length Nike Air cushioning for ultimate comfort, it combines bold colors and sharp details for a standout look. Perfect for those who want both style and comfort on the go.",

    images: [
      {
        id: "qwert",
        name: mercurial,
        thumbnail: mercurial_thumbnail_01,
      },
      {
        id: "qwe",
        name: mercurial_mainImg_03,
        thumbnail: mercurial_thumbnail_02,
      },
      {
        id: "qw",
        name: mercurial_mainImg_02,
        thumbnail: mercurial_thumbnail_03,
      },
      {
        id: "q",
        name: mercurial_mainImg_01,
        thumbnail: mercurial_thumbnail_04,
      },
      {
        id: "q1",
        name: mercurial_mainImg_05,
        thumbnail: mercurial_thumbnail_05,
      },
      {
        id: "123456",
        name: mercurial_mainImg_04,
        thumbnail: mercurial_thumbnail_06,
      },
    ],
    sizes: [
      { value: 39 },
      { value: 40 },
      { value: 41 },
      { value: 42 },
      { value: 43 },
      { value: 45 },
      { value: 47 },
    ],
  },
  {
    id: 4,
    imgURL: air_max_utility,
    name: "Nike Air Max Plus Utility",
    price: 320,
    description:
      "With its iconic full-length Nike Air cushioning for ultimate comfort, it combines bold colors and sharp details for a standout look. Perfect for those who want both style and comfort on the go.",

    color: "Black",
    images: [
      {
        id: "qwert",
        name: mercurial,
        thumbnail: mercurial_thumbnail_01,
      },
      {
        id: "qwe",
        name: mercurial_mainImg_03,
        thumbnail: mercurial_thumbnail_02,
      },
      {
        id: "qw",
        name: mercurial_mainImg_02,
        thumbnail: mercurial_thumbnail_03,
      },
      {
        id: "q",
        name: mercurial_mainImg_01,
        thumbnail: mercurial_thumbnail_04,
      },
      {
        id: "q1",
        name: mercurial_mainImg_05,
        thumbnail: mercurial_thumbnail_05,
      },
      {
        id: "123456",
        name: mercurial_mainImg_04,
        thumbnail: mercurial_thumbnail_06,
      },
    ],
    sizes: [
      { value: 39 },
      { value: 40 },
      { value: 41 },
      { value: 42 },
      { value: 43 },
      { value: 45 },
      { value: 47 },
    ],
  },
  {
    id: 5,
    imgURL: air_max_tn,
    name: "Nike Air Max Plus",
    price: 180,
    color: "Black",
    description:
      "With its iconic full-length Nike Air cushioning for ultimate comfort, it combines bold colors and sharp details for a standout look. Perfect for those who want both style and comfort on the go.",

    images: [
      {
        id: "qwert",
        name: mercurial,
        thumbnail: mercurial_thumbnail_01,
      },
      {
        id: "qwe",
        name: mercurial_mainImg_03,
        thumbnail: mercurial_thumbnail_02,
      },
      {
        id: "qw",
        name: mercurial_mainImg_02,
        thumbnail: mercurial_thumbnail_03,
      },
      {
        id: "q",
        name: mercurial_mainImg_01,
        thumbnail: mercurial_thumbnail_04,
      },
      {
        id: "q1",
        name: mercurial_mainImg_05,
        thumbnail: mercurial_thumbnail_05,
      },
      {
        id: "123456",
        name: mercurial_mainImg_04,
        thumbnail: mercurial_thumbnail_06,
      },
    ],
    sizes: [
      { value: 39 },
      { value: 40 },
      { value: 41 },
      { value: 42 },
      { value: 43 },
      { value: 45 },
      { value: 47 },
    ],
  },
  {
    id: 6,
    imgURL: air_max_tn2,
    name: "Nike Air Max Plus TN",
    price: 450,
    color: "Black",
    description:
      "With its iconic full-length Nike Air cushioning for ultimate comfort, it combines bold colors and sharp details for a standout look. Perfect for those who want both style and comfort on the go.",

    images: [
      {
        id: "qwert",
        name: mercurial,
        thumbnail: mercurial_thumbnail_01,
      },
      {
        id: "qwe",
        name: mercurial_mainImg_03,
        thumbnail: mercurial_thumbnail_02,
      },
      {
        id: "qw",
        name: mercurial_mainImg_02,
        thumbnail: mercurial_thumbnail_03,
      },
      {
        id: "q",
        name: mercurial_mainImg_01,
        thumbnail: mercurial_thumbnail_04,
      },
      {
        id: "q1",
        name: mercurial_mainImg_05,
        thumbnail: mercurial_thumbnail_05,
      },
      {
        id: "123456",
        name: mercurial_mainImg_04,
        thumbnail: mercurial_thumbnail_06,
      },
    ],
    sizes: [
      { value: 39 },
      { value: 40 },
      { value: 41 },
      { value: 42 },
      { value: 43 },
      { value: 45 },
      { value: 47 },
    ],
  },
  {
    id: 7,
    imgURL: air_max_luxe,
    name: "Nike Air Force 1 Luxe",
    price: 200,
    description:
      "With its iconic full-length Nike Air cushioning for ultimate comfort, it combines bold colors and sharp details for a standout look. Perfect for those who want both style and comfort on the go.",

    color: "White",
    images: [
      {
        id: "qwert",
        name: mercurial,
        thumbnail: mercurial_thumbnail_01,
      },
      {
        id: "qwe",
        name: mercurial_mainImg_03,
        thumbnail: mercurial_thumbnail_02,
      },
      {
        id: "qw",
        name: mercurial_mainImg_02,
        thumbnail: mercurial_thumbnail_03,
      },
      {
        id: "q",
        name: mercurial_mainImg_01,
        thumbnail: mercurial_thumbnail_04,
      },
      {
        id: "q1",
        name: mercurial_mainImg_05,
        thumbnail: mercurial_thumbnail_05,
      },
      {
        id: "123456",
        name: mercurial_mainImg_04,
        thumbnail: mercurial_thumbnail_06,
      },
    ],
    sizes: [
      { value: 39 },
      { value: 40 },
      { value: 41 },
      { value: 42 },
      { value: 43 },
      { value: 45 },
      { value: 47 },
    ],
  },
  {
    id: 8,
    description:
      "With its iconic full-length Nike Air cushioning for ultimate comfort, it combines bold colors and sharp details for a standout look. Perfect for those who want both style and comfort on the go.",

    imgURL: air_max_drift,

    name: "Nike Air Plus Drift",
    price: 110,
    color: "Gray",
    images: [
      {
        id: "qwert",
        name: mercurial,
        thumbnail: mercurial_thumbnail_01,
      },
      {
        id: "qwe",
        name: mercurial_mainImg_03,
        thumbnail: mercurial_thumbnail_02,
      },
      {
        id: "qw",
        name: mercurial_mainImg_02,
        thumbnail: mercurial_thumbnail_03,
      },
      {
        id: "q",
        name: mercurial_mainImg_01,
        thumbnail: mercurial_thumbnail_04,
      },
      {
        id: "q1",
        name: mercurial_mainImg_05,
        thumbnail: mercurial_thumbnail_05,
      },
      {
        id: "123456",
        name: mercurial_mainImg_04,
        thumbnail: mercurial_thumbnail_06,
      },
    ],
    sizes: [
      { value: 39 },
      { value: 40 },
      { value: 41 },
      { value: 42 },
      { value: 43 },
      { value: 45 },
      { value: 47 },
    ],
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];
export const sizesValue = [
  {
    id: 1,
    value: 38,
  },
  {
    id: 2,
    value: 39,
  },
  {
    id: 3,
    value: 40,
  },
  {
    id: 4,
    value: 41,
  },
  {
    id: 5,
    value: 42,
  },
  {
    id: 6,
    value: 43,
  },
  {
    id: 7,
    value: 44,
  },
  {
    id: 8,
    value: 45,
  },
  {
    id: 9,
    value: 46,
  },
  {
    id: 10,
    value: 47,
  },
];

export const colorsValue = [
  {
    id: 1,
    value: "Black",
  },
  {
    id: 2,
    value: "Blue",
  },
  {
    id: 3,
    value: "Red",
  },
  {
    id: 4,
    value: "White",
  },
  {
    id: 5,
    value: "Gray",
  },
  {
    id: 6,
    value: "Brown",
  },
  {
    id: 7,
    value: "Orange",
  },
  {
    id: 8,
    value: "Purple",
  },
  {
    id: 9,
    value: "Green",
  },
];
export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export const LABEL_CART = { EMPTY_CART: "Your cart is empty!" };
export const LABEL_CHECKOUT = { 
  CAPTURE: "Shipping Information",
  NAME: "Full Name",
  ADDRESS: "Address",
  CITY: "City",
  ZIP: "Zip Code",
  CONTACT_PHONE: "Contact phone",
  SUBMIT_ORDER: "Submit Order"

};
