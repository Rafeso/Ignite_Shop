import { CartButtonContainer } from "@/components/CartButton/styles";
import { Handbag } from "phosphor-react";
import { ComponentProps } from "react";

type CartButtonProps = ComponentProps<typeof CartButtonContainer> & {
  quantity?: number;
};

export function CartButton({ quantity = 0, ...props }: CartButtonProps) {
  return (
    <CartButtonContainer {...props}>
      {quantity > 0 && <span>{quantity}</span>}
      <Handbag weight="bold" />
    </CartButtonContainer>
  );
}
