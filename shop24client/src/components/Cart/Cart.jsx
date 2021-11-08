import { Add, Remove } from "@mui/icons-material";
import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Top,
  Bottom,
  TopButton,
  TopTexts,
  TopText,
  Info,
  Summary,
  Image,
  Product,
  ProductDetail,
  Details,
  ProductName,
  ProductColor,
  ProductId,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  HR,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
  Empty,
  ImageEmpty,
  EmptyDescripton,
} from "./styles";
import { useSelector } from "react-redux";
import EmptyCart from "assets/empty-cart.jpg";
export default function Cart() {
  const cart = useSelector((state) => state.CartReducer.cart);
  const total = useSelector((state) => state.CartReducer.total);

  return (
    <div>
      <Wrapper>
        {cart.length > 0 && (
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>SHOPPING BAG (2)</TopText>
              <TopText>YOUR WISHLIST</TopText>
            </TopTexts>
            <TopButton type="filled">Checkout now</TopButton>
          </Top>
        )}

        <Bottom>
          <Info>
            {cart.length > 0 ? (
              cart.map((el, index) => (
                <Product>
                  <ProductDetail>
                    <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {el.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {el._id}
                      </ProductId>
                      <ProductColor color="black" />
                      <ProductSize>
                        <b>Size:</b> {el.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>{el.quantity}</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>{el.price * el.quantity} $</ProductPrice>
                  </PriceDetail>
                </Product>
              ))
            ) : (
              <Empty>
                <ImageEmpty src={EmptyCart} />
                <EmptyDescripton>Your cart is empty</EmptyDescripton>
              </Empty>
            )}

            <HR />
          </Info>
          {cart.length > 0 && (
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipiing</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipiing Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ {total}</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT</Button>
            </Summary>
          )}
        </Bottom>
      </Wrapper>
    </div>
  );
}
