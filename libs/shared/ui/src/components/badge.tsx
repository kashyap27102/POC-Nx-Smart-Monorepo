interface BadgeProps {
  children: React.ReactNode;
}

export const Badge = ({ children }: BadgeProps) => {
  return (
    <p className="rounded-lg px-2 py-1 text-sm bg-rose-200/50 border-2 border-rose-400 w-fit">
      {children}
    </p>
  );
};
