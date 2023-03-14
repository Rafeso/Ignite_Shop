import Image from "next/image";
import Link from "next/link";
import { HeaderContainer } from "@/components/Header/styles";
import logoImg from "../../assets/logo.svg";
import { useRouter } from "next/router";
import { Cart } from "@/components/Cart";

export function Header() {
  const { pathname } = useRouter();

  const showCartButton = pathname !== "/success";
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" width={130} height={52} />
      </Link>
      {showCartButton && <Cart />}
    </HeaderContainer>
  );
}
