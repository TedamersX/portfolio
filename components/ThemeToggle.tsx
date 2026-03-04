'use client';
import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    setResolvedTheme(theme);
  }, [theme]);

  if (resolvedTheme === undefined) {
    return <div className="p-2 w-9 h-9" />;
  }

  return (
    <button 
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full hover:bg-app-muted/10 transition-colors"
      aria-label="Changer de thème"
    >
      {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}