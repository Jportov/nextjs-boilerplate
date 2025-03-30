const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-gray-400 text-sm py-6 px-4 mt-10">
      <div className="max-w-5xl mx-auto text-center">
        <p>
          © {new Date().getFullYear()} Tomelis Rig Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
