const MinimalFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Unbreakable Back LLC. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            "Espalda Indestructible" es una marca comercial de Unbreakable Back LLC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MinimalFooter;
