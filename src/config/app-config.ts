const BACKEND_API_BASE_URL: any =
  process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL ||
  "frp-tunnel.riyadahsan.com:6101";
const BACKEND_API_PUBLIC_URL: any =
  process.env.NEXT_PUBLIC_BACKEND_API_PUBLIC_URL;
const NEXT_PUBLIC_IMAGE_API_URL: any = process.env.NEXT_PUBLIC_IMAGE_API_URL;
const IS_PRODUCTION: any =
  process.env.NEXT_PUBLIC_IS_PRODUCTION === "yes" ? true : false;
const FILE_DRIVE = "public";
const FILE_DRIVE_TYPE = "remote";
const FRONTEND_API_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
const STRIPE_URL =
  process.env.NEXT_PUBLIC_STRIPE_URL ||
  "https://donate.stripe.com/00g6qUdUV4aD51KcMM";
const OJS_URL =
  process.env.NEXT_PUBLIC_OJS_URL ||
  "http://frp-tunnel.deepchainlabs.com:6112/";
const OJS_TOKEN =
  process.env.NEXT_PUBLIC_OJS_TOKEN ||
  "";

let config = {
  BACKEND_API_BASE_URL,
  BACKEND_API_PUBLIC_URL,
  NEXT_PUBLIC_IMAGE_API_URL,
  FILE_DRIVE,
  FILE_DRIVE_TYPE,
  IS_PRODUCTION,
  FRONTEND_API_BASE_URL,
  STRIPE_URL,OJS_URL,OJS_TOKEN
};

export default config;
