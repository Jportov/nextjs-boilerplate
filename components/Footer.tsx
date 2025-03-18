const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center p-5">
    <a
      className="flex  items-center gap-2 hover:underline hover:underline-offset-4 text-sm text-white-500"
      href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      © {new Date().getFullYear()} Tomelis Rig Services. All rights reserved
    </a>
  </footer>
  );
};

export default Footer;
