import React, { createContext, useContext } from 'react';

type TabsContextValue = {
  value: string;
  onChange: (value: string) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

type TabsProps = React.PropsWithChildren<{
  value: string;
  onChange: (value: string) => void;
}>;

export function Tabs({ value, onChange, children }: TabsProps) {
  return <TabsContext.Provider value={{ value, onChange }}>{children}</TabsContext.Provider>;
}

export function TabsList({ children }: React.PropsWithChildren) {
  return <div className="flex justify-center space-x-4">{children}</div>;
}

type TriggerProps = React.PropsWithChildren<{ value: string }>;

export function TabsTrigger({ value, children }: TriggerProps) {
  const ctx = useContext(TabsContext);
  if (!ctx) return null;
  const active = ctx.value === value;
  return (
    <button
      onClick={() => ctx.onChange(value)}
      className={`px-8 py-3 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${
        active ? 'bg-brand text-white shadow-lg' : 'bg-surface-4 text-gray-600 hover:bg-surface-4'
      }`}
    >
      {children}
    </button>
  );
}

type ContentProps = React.PropsWithChildren<{ value: string }>;

export function TabsContent({ value, children }: ContentProps) {
  const ctx = useContext(TabsContext);
  if (!ctx || ctx.value !== value) return null;
  return <>{children}</>;
}
