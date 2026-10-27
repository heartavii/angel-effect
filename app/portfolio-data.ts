// ============================================================
// THE ANGEL EFFECT: edit this file to manage your portfolio.
// Files live in /public. In "mediaPath" write the path WITHOUT "public",
// e.g. a file at public/videos/tiktok/lovito.mp4 -> "/videos/tiktok/lovito.mp4"
// Folders to create: public/images/{campaigns,modeling,instagram,cafes,food,profile}
//                    public/videos/{campaigns,tiktok,reels,on-site}
// ============================================================

export type Category = "fashion" | "makeup" | "skincare" | "lifestyle" | "food" | "cafe" | "modeling";
export type Section = "campaign" | "onsite" | "instagram" | "modeling" | "cafe";

export type PortfolioItem = {
  id: string;                 // unique, no spaces
  section: Section;           // which part of the site shows it
  title: string;
  category: Category;
  mediaType: "image" | "video";
  mediaPath: string;          // "" = no file yet (shows a "media coming soon" card)
  thumbnailPath?: string;     // recommended for videos (jpg/png/webp)
  postUrl?: string;           // optional TikTok / Instagram / other link
  brand?: string;
  location?: string;          // for on-site visits and cafés
  description?: string;
  date?: string;              // e.g. "2026-03"
  views?: number;             // ONLY real, per-video numbers
  likes?: number;
  alt?: string;               // describe the image for screen readers
  // ---- optional image settings (all have safe defaults) ----
  ratio?: "portrait" | "square" | "landscape" | "tall" | "wide"; // frame shape. Default: video = tall (9:16), photo = per-section
  fit?: "cover" | "contain";  // cover (default) fills + crops. contain shows the WHOLE image (transparent PNGs, cutouts, logos)
  position?: string;          // focal point when cropped, e.g. "center 20%", "top", "left center"
  background?: string;        // frame colour behind the image, e.g. "#F9E7EF" or "transparent"
};

// Past or existing collaborations. Add or remove names freely.
// Hero + About portraits. Change the file name/extension to match YOUR file (png, jpg, webp).
export type ImageSettings = { src: string; alt: string; fit?: "cover" | "contain"; position?: string; background?: string; };
export const profileImages: { hero: ImageSettings; about: ImageSettings } = {
  hero:  { src: "/images/creator/hero.jpg",  alt: "Angel Heart Avilanes", fit: "cover", position: "center 20%" },
  about: { src: "/images/creator/about.jpg", alt: "Angel Heart Avilanes, about portrait", fit: "cover", position: "center 20%" },
  // Transparent PNG cutout? Use: fit: "contain", position: "center bottom"
};

// Account/post performance, entered manually from your analytics.
// Update "period" with exact dates when you can (e.g. "Sept 30 - Oct 27, 2026").
export const analytics = {
  period: "September–October (28 days)",
  source: "creator analytics, entered manually",
  stats: [
    { label: "Post views", value: "1.2M", caption: "Sept–Oct reporting period" },
    { label: "Likes", value: "108.8K", caption: "Sept–Oct reporting period" },
    { label: "Shares", value: "8.6K", caption: "Sept–Oct reporting period" },
    { label: "Comments", value: "205", caption: "Sept–Oct reporting period" },
    { label: "Engagement rate", value: "9.8%", caption: "Sept–Oct reporting period" },
  ],
  // Audience breakdown for the same period. Leave a field "" to show "Not provided".
  audience: {
    age: "",
    gender: "77% female · 22% male · 1% other (Sept–Oct)",
    locations: "",
    activeTimes: "",
  },
  // Chart data: one real entry per month from your analytics (needs at least 2). Example:
  // { label: "Sept", views: 123456 }, { label: "Oct", views: 234567 }
  monthly: [] as { label: string; views: number }[],
};

export const brands: string[] = [
  "Lovito", "SHEIN", "Lazada", "barenbliss", "SKINTIFIC",
  "DAZZLE ME", "Mikana", "Y.O.U", "MAANGE", "Maybelline",
];

export const items: PortfolioItem[] = [
  // ---- On-site experiences ----
  // Add postUrl only when you have the real link. Without it, no button shows.
  { id: "coucou-bakeshop", section: "onsite", title: "On-site visit", location: "Coucou Bakeshop",
    category: "food", mediaType: "image",
    mediaPath: "/images/cafes/coucou-1.png",
    postUrl: "https://www.instagram.com/reel/DWfvdMeDw7m/" },
  { id: "mikana-store", section: "onsite", title: "Store visit", brand: "Mikana", location: "Mikana Store Branch",
    category: "skincare", mediaType: "image",
    mediaPath: "/images/campaigns/mikana-1.png", postUrl: "https://www.instagram.com/reel/DR9epi6jzYH/" },

  // ---- Instagram collaborations ----
  { id: "ig-oli-studios", section: "instagram", title: "Instagram collaboration", brand: "Oli Studios",
    category: "lifestyle", mediaType: "image",
    mediaPath: "/images/creator/about.jpg" , postUrl: "https://www.instagram.com/p/DeB7u5aD_jr/?img_index=1"},
  { id: "ig-locakids", section: "instagram", title: "Instagram collaboration", brand: "LocaKids Coffee",
    category: "cafe", mediaType: "image",
    mediaPath: "/images/instagram/localkids.jpg",  postUrl: "https://www.instagram.com/p/Da7s0dRjzZI/?img_index=1https://www.instagram.com/p/Da7s0dRjzZI/?img_index=1"},

  // ---- Top-performing promotional TikToks (link cards) ----
  // Each id must be unique. Replace the title (and add brand: "..." only if the video was for that brand).
  // Thumbnails live in public/images/campaigns/. Views = this video's own view count.
  { id: "top-video-1", section: "campaign", title: "Top promotional video 1", category: "lifestyle",
    mediaType: "video", mediaPath: "",
    thumbnailPath: "/images/campaigns/video1.png",
    views: 759600,
    postUrl: "https://www.tiktok.com/@heart_avii/video/7475210119253363975" },
  { id: "top-video-2", section: "campaign", title: "Top promotional video 2", category: "lifestyle",
    mediaType: "video", mediaPath: "",
    thumbnailPath: "/images/campaigns/video2.png",
    views: 584600,
    postUrl: "https://www.tiktok.com/@heart_avii/video/7464443618137328904" },
  { id: "top-video-3", section: "campaign", title: "Top promotional video 3", category: "lifestyle",
    mediaType: "video", mediaPath: "",
    thumbnailPath: "/images/campaigns/video3.png",
    views: 1500000,
    postUrl: "https://www.tiktok.com/@heart_avii/video/7605889528787881237" },
  { id: "top-video-4", section: "campaign", title: "Top promotional video 4", category: "lifestyle",
    mediaType: "video", mediaPath: "",
    thumbnailPath: "/images/campaigns/video4.png",
    views: 41700,
    postUrl: "https://www.tiktok.com/@heart_avii/video/7447743450268699924" },

  // ---- EXAMPLES (copy, uncomment, edit) ----
  // Image campaign:
  // { id: "shein-haul-1", section: "campaign", title: "Outfit haul", brand: "SHEIN", category: "fashion",
  //   mediaType: "image", mediaPath: "/images/campaigns/shein-haul-1.webp",
  //   postUrl: "https://www.instagram.com/p/XXXX/", description: "Short note.", date: "2026-02" },
  // MP4 campaign (9:16) with real stats:
  // { id: "skintific-review", section: "campaign", title: "Skincare routine", brand: "SKINTIFIC", category: "skincare",
  //   mediaType: "video", mediaPath: "/videos/tiktok/skintific-review.mp4",
  //   thumbnailPath: "/images/campaigns/skintific-review.webp",
  //   postUrl: "https://www.tiktok.com/@heart_avii/video/XXXX", views: 123456 },
  // Transparent PNG shown in full, never cropped:
  // { id: "png-1", section: "campaign", title: "Cutout", category: "fashion", mediaType: "image",
  //   mediaPath: "/images/campaigns/cutout.png", fit: "contain", background: "#F9E7EF", ratio: "square" },
  // Modeling project: { id: "model-1", section: "modeling", title: "Editorial", category: "modeling",
  //   mediaType: "image", mediaPath: "/images/modeling/model-1.webp" },
  // Café: { id: "cafe-1", section: "cafe", title: "Cozy corner", location: "Café name", category: "cafe",
  //   mediaType: "image", mediaPath: "/images/cafes/cafe-1.webp" },
];