const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto max-w-5xl flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Karan Sariyala. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with <span className="text-primary">♥</span> and modern tech
        </p>
      </div>
    </footer>
  );
};

export default Footer;
