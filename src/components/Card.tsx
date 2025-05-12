interface Props {
  children: React.ReactNode;
  className: string;
}

function Card({ children, className }: Props) {
  return <article className={`rounded-lg overflow-hidden hover:shadow-lg ${className}`}>{children}</article>;
}

export default Card;
