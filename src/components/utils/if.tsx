interface Props {
  condition: boolean;
  children: React.ReactNode;
}

export default function If({ condition, children }: Props) {
  return condition ? children : null;
}
