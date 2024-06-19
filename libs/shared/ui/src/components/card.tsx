interface CardProps {
  children: React.ReactNode;
  classname?: string;
}

export const Card = ({ children, classname }: CardProps) => {
  return (
    <div className={`rounded-md shadow-lg p-6 border-2 ${classname}`}>
      {children}
    </div>
  );
};
