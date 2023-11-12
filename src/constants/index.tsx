import { Icon } from "@iconify/react";

import { SideNavItem } from "../types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Video to gif",
    path: "/video-to-gif",
    icon: <Icon icon="ant-design:file-gif-outlined" width="24" height="24" />,
  },
];
