import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function SocialFloatingBar() {
  const socialLinks = [
    { icon: FaInstagram, url: "https://www.instagram.com/wright_mep?utm_source=qr&igsh=dmNja3pjaTMybXZ6", color: "#E4405F" },
    { icon: FaFacebookF, url: "https://www.facebook.com/share/1CPyHrjMdM/", color: "#1877F2" },
    { icon: FaWhatsapp, url: "https://wa.me/919895277526", color: "#25D366" },
    // { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/yourprofile", color: "#0A66C2" },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col space-y-3">
      {socialLinks.map((item, index) => {
        const Icon = item.icon;
        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
            style={{ backgroundColor: item.color }}
          >
            <Icon className="w-6 h-6 text-white" />
          </a>
        );
      })}


    </div>
  );
}
