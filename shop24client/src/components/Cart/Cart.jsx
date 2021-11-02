import { Add, Remove } from '@mui/icons-material';
import React from 'react'
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
    Button
   
    
  } from "./styles";
  export default function Cart() {
    return (
        <div>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>SHOPPING BAG (2)</TopText>
                        <TopText>YOUR WISHLIST</TopText>

                    </TopTexts>
                    <TopButton type="filled">Checkout now</TopButton>

                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                <Details>
                                    <ProductName>
                                     <b>Product:</b> JESSIE THUNDER SHOES

                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 93813718293

                                    </ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize>
                                        <b>Size:</b> 37.5

                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>5 $</ProductPrice>

                            </PriceDetail>
                        </Product>
                        <HR/>
                        <Product>
                            <ProductDetail>
                            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                <Details>
                                    <ProductName>
                                     <b>Product:</b> JESSIE THUNDER SHOES

                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 93813718293

                                    </ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize>
                                        <b>Size:</b> 37.5

                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>5 $</ProductPrice>

                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>
                                Subtotal
                            </SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>
                                Estimated Shipiing
                            </SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>
                                 Shipiing Discount
                            </SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >
                                Total
                            </SummaryItemText>
                            <SummaryItemPrice>$ 324324</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        </div>
    )
}
