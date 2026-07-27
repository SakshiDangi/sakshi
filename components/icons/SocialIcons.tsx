import {
  Mail,
  FileText,
  MessageCircle,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";


export const socialIcons = {

  GitHub: FaGithub,

  LinkedIn: FaLinkedin,

  Twitter: FaTwitter,

  Email: Mail,

  Resume: FileText,

  Discord: MessageCircle,

} as const;